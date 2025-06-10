import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Truck, Shield, Sparkles, Star } from 'lucide-react';
import { sampleProducts } from '../data/products';
import ProductCard from '../components/Product/ProductCard';

const HomePage: React.FC = () => {
  const featuredProducts = sampleProducts.filter(p => p.featured).slice(0, 4);
  const newArrivals = sampleProducts.filter(p => p.newArrival).slice(0, 3);
  const bestsellers = sampleProducts.filter(p => p.bestseller).slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-luxury-black via-luxury-charcoal to-luxury-black overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=1920)'
          }}
        ></div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <div className="animate-fade-in">
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Discover Your
              <span className="block text-luxury-gold">Signature Scent</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Immerse yourself in the world of luxury fragrances, where each bottle tells a story of elegance and sophistication.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/products"
                className="px-8 py-4 bg-luxury-gold text-luxury-black font-semibold rounded-full hover:bg-luxury-lightGold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                Shop Collection
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/about"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-luxury-black transition-all duration-300"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <Sparkles className="text-luxury-gold opacity-60" size={24} />
        </div>
        <div className="absolute bottom-32 right-20 animate-float" style={{ animationDelay: '1s' }}>
          <Sparkles className="text-luxury-gold opacity-40" size={16} />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-luxury-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center group">
              <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Award className="text-luxury-black" size={28} />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-600">Crafted with the finest ingredients sourced globally</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Truck className="text-luxury-black" size={28} />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">Free Shipping</h3>
              <p className="text-gray-600">Complimentary delivery on orders over $200</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="text-luxury-black" size={28} />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">Authenticity Guaranteed</h3>
              <p className="text-gray-600">100% authentic fragrances with quality assurance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold text-gray-900 mb-4">Featured Collection</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our handpicked selection of exceptional fragrances that define luxury and elegance.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/products"
              className="inline-flex items-center px-6 py-3 bg-luxury-black text-white rounded-full hover:bg-luxury-charcoal transition-colors"
            >
              View All Products
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* New Arrivals & Bestsellers */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* New Arrivals */}
            <div>
              <div className="text-center mb-8">
                <h2 className="font-display text-3xl font-bold text-gray-900 mb-2">New Arrivals</h2>
                <p className="text-gray-600">Fresh fragrances just added to our collection</p>
              </div>
              <div className="space-y-6">
                {newArrivals.map((product) => (
                  <div key={product.id} className="flex bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-24 h-24 object-cover flex-shrink-0"
                    />
                    <div className="p-4 flex-1">
                      <Link to={`/products/${product.id}`}>
                        <h3 className="font-semibold text-gray-900 hover:text-luxury-gold transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-sm text-gray-600 mb-2">{product.fragranceFamily}</p>
                        <div className="flex items-center justify-between">
                          <span className="font-bold">${product.variants[0].price}</span>
                          <div className="flex items-center">
                            <Star size={14} className="text-yellow-400 fill-current mr-1" />
                            <span className="text-sm text-gray-600">{product.ratings.average}</span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bestsellers */}
            <div>
              <div className="text-center mb-8">
                <h2 className="font-display text-3xl font-bold text-gray-900 mb-2">Bestsellers</h2>
                <p className="text-gray-600">Customer favorites that never go out of style</p>
              </div>
              <div className="space-y-6">
                {bestsellers.map((product) => (
                  <div key={product.id} className="flex bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-24 h-24 object-cover flex-shrink-0"
                    />
                    <div className="p-4 flex-1">
                      <Link to={`/products/${product.id}`}>
                        <h3 className="font-semibold text-gray-900 hover:text-luxury-gold transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-sm text-gray-600 mb-2">{product.fragranceFamily}</p>
                        <div className="flex items-center justify-between">
                          <span className="font-bold">${product.variants[0].price}</span>
                          <div className="flex items-center">
                            <Star size={14} className="text-yellow-400 fill-current mr-1" />
                            <span className="text-sm text-gray-600">{product.ratings.average}</span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-20 bg-luxury-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-black via-luxury-charcoal to-luxury-black opacity-90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-4xl font-bold mb-6">The Art of Fragrance</h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Since 1995, Mahekraj has been crafting exceptional fragrances that capture the essence of luxury and sophistication. 
              Every bottle represents decades of expertise, passion, and an unwavering commitment to quality.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-luxury-gold mb-2">29+</div>
                <div className="text-gray-300">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-luxury-gold mb-2">150+</div>
                <div className="text-gray-300">Unique Fragrances</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-luxury-gold mb-2">50K+</div>
                <div className="text-gray-300">Happy Customers</div>
              </div>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center mt-8 px-6 py-3 bg-luxury-gold text-luxury-black rounded-full hover:bg-luxury-lightGold transition-colors font-semibold"
            >
              Learn Our Story
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Real experiences from fragrance enthusiasts worldwide</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Absolutely stunning fragrances! The Royal Oud Supreme is now my signature scent. 
                The quality and longevity are exceptional."
              </p>
              <div className="flex items-center justify-center">
                <img
                  src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop"
                  alt="Customer"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold">Sarah Johnson</p>
                  <p className="text-sm text-gray-500">Verified Customer</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "The customer service is as premium as their fragrances. Fast shipping and beautiful packaging. 
                Highly recommended!"
              </p>
              <div className="flex items-center justify-center">
                <img
                  src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop"
                  alt="Customer"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold">Michael Chen</p>
                  <p className="text-sm text-gray-500">Verified Customer</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "I've been a perfume collector for years, and Mahekraj's attention to detail is unmatched. 
                Each fragrance is a masterpiece."
              </p>
              <div className="flex items-center justify-center">
                <img
                  src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop"
                  alt="Customer"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold">Emma Rodriguez</p>
                  <p className="text-sm text-gray-500">Verified Customer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;