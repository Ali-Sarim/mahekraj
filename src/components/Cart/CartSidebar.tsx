import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useStore } from '../../store/useStore';

const CartSidebar: React.FC = () => {
  const {
    isCartOpen,
    setCartOpen,
    cartItems,
    updateQuantity,
    removeFromCart,
    getCartTotal,
    getCartItemsCount
  } = useStore();

  const total = getCartTotal();
  const itemsCount = getCartItemsCount();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity"
        onClick={() => setCartOpen(false)}
      />

      {/* Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-2xl transform transition-transform">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-xl font-semibold flex items-center">
              <ShoppingBag className="mr-2" size={20} />
              Shopping Bag ({itemsCount})
            </h2>
            <button
              onClick={() => setCartOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cartItems.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingBag size={64} className="mx-auto text-gray-300 mb-4" />
                <p className="text-gray-500 mb-4">Your shopping bag is empty</p>
                <Link
                  to="/products"
                  onClick={() => setCartOpen(false)}
                  className="inline-block px-6 py-3 bg-luxury-black text-white rounded-lg hover:bg-luxury-charcoal transition-colors"
                >
                  Start Shopping
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={`${item.productId}-${item.variantId}`} className="flex space-x-4 bg-gray-50 rounded-lg p-4">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-sm text-gray-900 truncate">
                        {item.product.name}
                      </h3>
                      <p className="text-xs text-gray-500 mb-2">{item.variant.size}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateQuantity(item.productId, item.variantId, item.quantity - 1)}
                            className="p-1 hover:bg-gray-200 rounded"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.productId, item.variantId, item.quantity + 1)}
                            className="p-1 hover:bg-gray-200 rounded"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-sm">${(item.variant.price * item.quantity).toFixed(2)}</p>
                          {item.variant.originalPrice && (
                            <p className="text-xs text-gray-500 line-through">
                              ${(item.variant.originalPrice * item.quantity).toFixed(2)}
                            </p>
                          )}
                        </div>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.productId, item.variantId)}
                        className="text-xs text-red-500 hover:text-red-700 mt-2"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="border-t p-6 space-y-4">
              <div className="flex justify-between text-lg font-semibold">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="space-y-2">
                <Link
                  to="/checkout"
                  onClick={() => setCartOpen(false)}
                  className="block w-full py-3 bg-luxury-black text-white text-center rounded-lg hover:bg-luxury-charcoal transition-colors font-medium"
                >
                  Checkout
                </Link>
                <Link
                  to="/cart"
                  onClick={() => setCartOpen(false)}
                  className="block w-full py-3 bg-gray-100 text-gray-900 text-center rounded-lg hover:bg-gray-200 transition-colors"
                >
                  View Cart
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartSidebar;