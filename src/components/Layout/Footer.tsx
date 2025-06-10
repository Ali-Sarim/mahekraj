import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-luxury-black text-white">
      {/* Newsletter Section */}
      <div className="bg-luxury-charcoal py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="font-display text-2xl font-bold mb-4">Stay in the Loop</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Be the first to discover new fragrances, exclusive collections, and special offers.
            Join our newsletter for insider access to the world of luxury perfumes.
          </p>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 bg-luxury-black text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-luxury-gold"
            />
            <button className="px-6 py-3 bg-luxury-gold text-luxury-black font-medium rounded-r-lg hover:bg-luxury-lightGold transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-luxury-gold to-luxury-bronze rounded-full flex items-center justify-center">
                <span className="text-luxury-black font-bold text-xl">M</span>
              </div>
              <div>
                <h1 className="font-display text-xl font-bold text-luxury-gold">Mahekraj</h1>
                <p className="text-xs text-gray-300 -mt-1">Luxury Fragrances</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Crafting exceptional fragrances since 1995. Every bottle tells a story of elegance, 
              sophistication, and the finest ingredients sourced from around the world.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-luxury-charcoal rounded-lg hover:bg-luxury-gold hover:text-luxury-black transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 bg-luxury-charcoal rounded-lg hover:bg-luxury-gold hover:text-luxury-black transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 bg-luxury-charcoal rounded-lg hover:bg-luxury-gold hover:text-luxury-black transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/products" className="text-gray-300 hover:text-luxury-gold transition-colors">All Fragrances</Link></li>
              <li><Link to="/products?category=men" className="text-gray-300 hover:text-luxury-gold transition-colors">Men's Collection</Link></li>
              <li><Link to="/products?category=women" className="text-gray-300 hover:text-luxury-gold transition-colors">Women's Collection</Link></li>
              <li><Link to="/products?category=gift-sets" className="text-gray-300 hover:text-luxury-gold transition-colors">Gift Sets</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-luxury-gold transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-luxury-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Customer Service</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/shipping" className="text-gray-300 hover:text-luxury-gold transition-colors">Shipping Info</Link></li>
              <li><Link to="/returns" className="text-gray-300 hover:text-luxury-gold transition-colors">Returns & Exchanges</Link></li>
              <li><Link to="/size-guide" className="text-gray-300 hover:text-luxury-gold transition-colors">Size Guide</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-luxury-gold transition-colors">FAQ</Link></li>
              <li><Link to="/track-order" className="text-gray-300 hover:text-luxury-gold transition-colors">Track Your Order</Link></li>
              <li><Link to="/support" className="text-gray-300 hover:text-luxury-gold transition-colors">Support Center</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Get in Touch</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-luxury-gold mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>123 Fragrance Avenue</p>
                  <p>Luxury District, NY 10001</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-luxury-gold flex-shrink-0" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-luxury-gold flex-shrink-0" />
                <span className="text-gray-300">hello@mahekraj.com</span>
              </div>
            </div>
            <div className="mt-6 p-4 bg-luxury-charcoal rounded-lg">
              <p className="text-xs text-gray-300 mb-2">Customer Service Hours:</p>
              <p className="text-sm text-white">Mon-Fri: 9AM-7PM EST</p>
              <p className="text-sm text-white">Sat-Sun: 10AM-6PM EST</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-luxury-charcoal py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-300">
              © 2024 Mahekraj Luxury Fragrances. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-300 hover:text-luxury-gold transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-300 hover:text-luxury-gold transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-300 hover:text-luxury-gold transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;