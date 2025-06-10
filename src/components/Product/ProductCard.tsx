import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Star, ShoppingBag } from 'lucide-react';
import { Product } from '../../types';
import { useStore } from '../../store/useStore';

interface ProductCardProps {
  product: Product;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, className = '' }) => {
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useStore();
  const inWishlist = isInWishlist(product.id);
  
  const defaultVariant = product.variants[0];
  const hasDiscount = defaultVariant.originalPrice && defaultVariant.originalPrice > defaultVariant.price;
  const discountPercentage = hasDiscount
    ? Math.round(((defaultVariant.originalPrice! - defaultVariant.price) / defaultVariant.originalPrice!) * 100)
    : 0;

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product.id);
    }
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product, defaultVariant.id);
  };

  return (
    <div className={`group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 ${className}`}>
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden">
        <Link to={`/products/${product.id}`}>
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </Link>
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col space-y-2">
          {product.newArrival && (
            <span className="px-2 py-1 bg-accent-sage text-white text-xs font-medium rounded-full">
              New
            </span>
          )}
          {product.bestseller && (
            <span className="px-2 py-1 bg-luxury-gold text-luxury-black text-xs font-medium rounded-full">
              Bestseller
            </span>
          )}
          {hasDiscount && (
            <span className="px-2 py-1 bg-red-500 text-white text-xs font-medium rounded-full">
              -{discountPercentage}%
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={handleWishlistToggle}
          className={`absolute top-4 right-4 p-2 rounded-full transition-all duration-300 ${
            inWishlist
              ? 'bg-red-500 text-white'
              : 'bg-white/80 text-gray-600 hover:bg-white hover:text-red-500'
          }`}
        >
          <Heart size={16} fill={inWishlist ? 'currentColor' : 'none'} />
        </button>

        {/* Quick Add Button */}
        <button
          onClick={handleAddToCart}
          className="absolute bottom-4 right-4 p-2 bg-luxury-black text-white rounded-full opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-luxury-charcoal"
        >
          <ShoppingBag size={16} />
        </button>
      </div>

      {/* Content */}
      <div className="p-6">
        <Link to={`/products/${product.id}`}>
          <div className="mb-2">
            <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">{product.category}</p>
            <h3 className="font-display text-lg font-semibold text-gray-900 mb-2 group-hover:text-luxury-gold transition-colors">
              {product.name}
            </h3>
          </div>

          {/* Fragrance Family */}
          <p className="text-sm text-gray-600 mb-3">{product.fragranceFamily}</p>

          {/* Rating */}
          <div className="flex items-center space-x-1 mb-3">
            <Star size={14} className="text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600">
              {product.ratings.average} ({product.ratings.count})
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-gray-900">
              ${defaultVariant.price}
            </span>
            {defaultVariant.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                ${defaultVariant.originalPrice}
              </span>
            )}
          </div>

          {/* Size Options */}
          {product.variants.length > 1 && (
            <div className="mt-3">
              <p className="text-xs text-gray-500 mb-1">Available sizes:</p>
              <div className="flex space-x-1">
                {product.variants.slice(0, 3).map((variant) => (
                  <span
                    key={variant.id}
                    className="px-2 py-1 bg-gray-100 text-xs rounded text-gray-600"
                  >
                    {variant.size}
                  </span>
                ))}
                {product.variants.length > 3 && (
                  <span className="px-2 py-1 bg-gray-100 text-xs rounded text-gray-600">
                    +{product.variants.length - 3}
                  </span>
                )}
              </div>
            </div>
          )}
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;