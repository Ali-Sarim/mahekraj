import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, Heart, User, Menu, X } from 'lucide-react';
import { useStore } from '../../store/useStore';

const Header: React.FC = () => {
  const {
    isMenuOpen,
    setMenuOpen,
    isCartOpen,
    setCartOpen,
    getCartItemsCount,
    searchQuery,
    setSearchQuery,
    isAuthenticated
  } = useStore();

  const cartItemsCount = getCartItemsCount();

  return (
    <header className="bg-luxury-black text-white relative z-50">
      {/* Top bar */}
      <div className="bg-luxury-charcoal text-center py-2 text-sm">
        <p>Free shipping on orders over $200 | Luxury fragrances crafted with care</p>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 hover:bg-luxury-charcoal rounded-lg transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-luxury-gold to-luxury-bronze rounded-full flex items-center justify-center">
              <span className="text-luxury-black font-bold text-xl">M</span>
            </div>
            <div>
              <h1 className="font-display text-2xl font-bold text-luxury-gold">Mahekraj</h1>
              <p className="text-xs text-gray-300 -mt-1">Luxury Fragrances</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/products" className="hover:text-luxury-gold transition-colors">
              Fragrances
            </Link>
            <Link to="/products?category=men" className="hover:text-luxury-gold transition-colors">
              Men
            </Link>
            <Link to="/products?category=women" className="hover:text-luxury-gold transition-colors">
              Women
            </Link>
            <Link to="/products?category=gift-sets" className="hover:text-luxury-gold transition-colors">
              Gifts
            </Link>
            <Link to="/about" className="hover:text-luxury-gold transition-colors">
              About
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center bg-luxury-charcoal rounded-full px-4 py-2 flex-1 max-w-md mx-8">
            <Search size={20} className="text-gray-400 mr-3" />
            <input
              type="text"
              placeholder="Search fragrances..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent text-white placeholder-gray-400 flex-1 outline-none"
            />
          </div>

          {/* Action buttons */}
          <div className="flex items-center space-x-4">
            <button className="md:hidden p-2 hover:bg-luxury-charcoal rounded-lg transition-colors">
              <Search size={20} />
            </button>
            
            <Link
              to="/wishlist"
              className="p-2 hover:bg-luxury-charcoal rounded-lg transition-colors"
            >
              <Heart size={20} />
            </Link>

            {isAuthenticated() ? (
              <Link
                to="/profile"
                className="p-2 hover:bg-luxury-charcoal rounded-lg transition-colors"
              >
                <User size={20} />
              </Link>
            ) : (
              <Link
                to="/login"
                className="hidden sm:block px-4 py-2 bg-luxury-gold text-luxury-black rounded-lg hover:bg-luxury-lightGold transition-colors font-medium"
              >
                Sign In
              </Link>
            )}

            <button
              onClick={() => setCartOpen(!isCartOpen)}
              className="relative p-2 hover:bg-luxury-charcoal rounded-lg transition-colors"
            >
              <ShoppingBag size={20} />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-luxury-gold text-luxury-black text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {cartItemsCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden bg-luxury-charcoal mt-2 rounded-lg p-4 space-y-2">
            <Link
              to="/products"
              className="block py-2 hover:text-luxury-gold transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              All Fragrances
            </Link>
            <Link
              to="/products?category=men"
              className="block py-2 hover:text-luxury-gold transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Men's Fragrances
            </Link>
            <Link
              to="/products?category=women"
              className="block py-2 hover:text-luxury-gold transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Women's Fragrances
            </Link>
            <Link
              to="/products?category=gift-sets"
              className="block py-2 hover:text-luxury-gold transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Gift Sets
            </Link>
            <Link
              to="/about"
              className="block py-2 hover:text-luxury-gold transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            {!isAuthenticated() && (
              <Link
                to="/login"
                className="block py-2 px-4 bg-luxury-gold text-luxury-black rounded-lg hover:bg-luxury-lightGold transition-colors font-medium text-center mt-4"
                onClick={() => setMenuOpen(false)}
              >
                Sign In
              </Link>
            )}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;