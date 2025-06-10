import React, { useState } from 'react';
import { User, MapPin, Heart, Package, Settings, Edit3, Plus, Trash2 } from 'lucide-react';
import { useStore } from '../store/useStore';
import { Link } from 'react-router-dom';

const ProfilePage: React.FC = () => {
  const { user, wishlist, cartItems } = useStore();
  const [activeTab, setActiveTab] = useState('profile');

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Please sign in to view your profile</h2>
          <Link
            to="/login"
            className="px-6 py-3 bg-luxury-black text-white rounded-lg hover:bg-luxury-charcoal transition-colors"
          >
            Sign In
          </Link>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'addresses', label: 'Addresses', icon: MapPin },
    { id: 'orders', label: 'Orders', icon: Package },
    { id: 'wishlist', label: 'Wishlist', icon: Heart },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const mockOrders = [
    {
      id: '1',
      orderNumber: 'MRJ-2024-001',
      date: '2024-01-15',
      status: 'delivered',
      total: 299.00,
      items: 2
    },
    {
      id: '2',
      orderNumber: 'MRJ-2024-002',
      date: '2024-01-20',
      status: 'shipped',
      total: 149.00,
      items: 1
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center space-x-6">
              <div className="w-20 h-20 bg-gradient-to-br from-luxury-gold to-luxury-bronze rounded-full flex items-center justify-center">
                <span className="text-luxury-black font-bold text-2xl">
                  {user.firstName.charAt(0)}{user.lastName.charAt(0)}
                </span>
              </div>
              <div>
                <h1 className="font-display text-3xl font-bold text-gray-900">
                  {user.firstName} {user.lastName}
                </h1>
                <p className="text-gray-600">{user.email}</p>
                <p className="text-sm text-gray-500">Member since {new Date(user.createdAt).getFullYear()}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <nav className="space-y-2">
                  {tabs.map((tab) => {
                    const Icon = tab.icon;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                          activeTab === tab.id
                            ? 'bg-luxury-gold text-luxury-black'
                            : 'text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        <Icon size={20} />
                        <span>{tab.label}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                {activeTab === 'profile' && (
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="font-display text-2xl font-bold text-gray-900">Profile Information</h2>
                      <button className="flex items-center space-x-2 px-4 py-2 bg-luxury-black text-white rounded-lg hover:bg-luxury-charcoal transition-colors">
                        <Edit3 size={16} />
                        <span>Edit</span>
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                        <input
                          type="text"
                          value={user.firstName}
                          readOnly
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                        <input
                          type="text"
                          value={user.lastName}
                          readOnly
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <input
                          type="email"
                          value={user.email}
                          readOnly
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                        <input
                          type="tel"
                          value={user.phone || 'Not provided'}
                          readOnly
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'addresses' && (
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="font-display text-2xl font-bold text-gray-900">Saved Addresses</h2>
                      <button className="flex items-center space-x-2 px-4 py-2 bg-luxury-black text-white rounded-lg hover:bg-luxury-charcoal transition-colors">
                        <Plus size={16} />
                        <span>Add Address</span>
                      </button>
                    </div>

                    {user.addresses.length === 0 ? (
                      <div className="text-center py-12">
                        <MapPin size={64} className="mx-auto text-gray-300 mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">No addresses saved</h3>
                        <p className="text-gray-600 mb-4">Add your first address to make checkout faster</p>
                        <button className="px-6 py-3 bg-luxury-black text-white rounded-lg hover:bg-luxury-charcoal transition-colors">
                          Add Address
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {user.addresses.map((address) => (
                          <div key={address.id} className="border border-gray-200 rounded-lg p-4">
                            <div className="flex items-start justify-between">
                              <div>
                                <div className="flex items-center space-x-2 mb-2">
                                  <h3 className="font-semibold">{address.type.charAt(0).toUpperCase() + address.type.slice(1)}</h3>
                                  {address.isDefault && (
                                    <span className="px-2 py-1 bg-luxury-gold text-luxury-black text-xs rounded-full">
                                      Default
                                    </span>
                                  )}
                                </div>
                                <p className="text-gray-600">
                                  {address.firstName} {address.lastName}
                                </p>
                                <p className="text-gray-600">{address.street}</p>
                                <p className="text-gray-600">
                                  {address.city}, {address.state} {address.zipCode}
                                </p>
                                <p className="text-gray-600">{address.country}</p>
                              </div>
                              <div className="flex space-x-2">
                                <button className="p-2 text-gray-400 hover:text-gray-600">
                                  <Edit3 size={16} />
                                </button>
                                <button className="p-2 text-gray-400 hover:text-red-600">
                                  <Trash2 size={16} />
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {activeTab === 'orders' && (
                  <div>
                    <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">Order History</h2>

                    <div className="space-y-4">
                      {mockOrders.map((order) => (
                        <div key={order.id} className="border border-gray-200 rounded-lg p-6">
                          <div className="flex items-center justify-between mb-4">
                            <div>
                              <h3 className="font-semibold text-lg">Order #{order.orderNumber}</h3>
                              <p className="text-gray-600">Placed on {new Date(order.date).toLocaleDateString()}</p>
                            </div>
                            <div className="text-right">
                              <p className="font-semibold text-lg">${order.total.toFixed(2)}</p>
                              <span className={`px-3 py-1 rounded-full text-sm ${
                                order.status === 'delivered'
                                  ? 'bg-green-100 text-green-800'
                                  : order.status === 'shipped'
                                  ? 'bg-blue-100 text-blue-800'
                                  : 'bg-yellow-100 text-yellow-800'
                              }`}>
                                {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <p className="text-gray-600">{order.items} item{order.items > 1 ? 's' : ''}</p>
                            <div className="space-x-2">
                              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                                View Details
                              </button>
                              <button className="px-4 py-2 bg-luxury-black text-white rounded-lg hover:bg-luxury-charcoal transition-colors">
                                Reorder
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'wishlist' && (
                  <div>
                    <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">My Wishlist</h2>

                    {wishlist.length === 0 ? (
                      <div className="text-center py-12">
                        <Heart size={64} className="mx-auto text-gray-300 mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Your wishlist is empty</h3>
                        <p className="text-gray-600 mb-4">Save your favorite fragrances to buy them later</p>
                        <Link
                          to="/products"
                          className="px-6 py-3 bg-luxury-black text-white rounded-lg hover:bg-luxury-charcoal transition-colors"
                        >
                          Browse Products
                        </Link>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Wishlist items would be rendered here */}
                        <p className="text-gray-600">You have {wishlist.length} item{wishlist.length > 1 ? 's' : ''} in your wishlist</p>
                      </div>
                    )}
                  </div>
                )}

                {activeTab === 'settings' && (
                  <div>
                    <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">Account Settings</h2>

                    <div className="space-y-6">
                      <div className="border-b border-gray-200 pb-6">
                        <h3 className="font-semibold text-lg mb-4">Notifications</h3>
                        <div className="space-y-3">
                          <label className="flex items-center justify-between">
                            <span>Email notifications for orders</span>
                            <input type="checkbox" defaultChecked className="h-4 w-4 text-luxury-gold focus:ring-luxury-gold border-gray-300 rounded" />
                          </label>
                          <label className="flex items-center justify-between">
                            <span>Marketing emails</span>
                            <input type="checkbox" defaultChecked className="h-4 w-4 text-luxury-gold focus:ring-luxury-gold border-gray-300 rounded" />
                          </label>
                          <label className="flex items-center justify-between">
                            <span>SMS notifications</span>
                            <input type="checkbox" className="h-4 w-4 text-luxury-gold focus:ring-luxury-gold border-gray-300 rounded" />
                          </label>
                        </div>
                      </div>

                      <div className="border-b border-gray-200 pb-6">
                        <h3 className="font-semibold text-lg mb-4">Privacy</h3>
                        <div className="space-y-3">
                          <label className="flex items-center justify-between">
                            <span>Make profile public</span>
                            <input type="checkbox" className="h-4 w-4 text-luxury-gold focus:ring-luxury-gold border-gray-300 rounded" />
                          </label>
                          <label className="flex items-center justify-between">
                            <span>Allow data collection for recommendations</span>
                            <input type="checkbox" defaultChecked className="h-4 w-4 text-luxury-gold focus:ring-luxury-gold border-gray-300 rounded" />
                          </label>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-semibold text-lg mb-4">Account Actions</h3>
                        <div className="space-y-3">
                          <button className="w-full text-left px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                            Change Password
                          </button>
                          <button className="w-full text-left px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                            Download My Data
                          </button>
                          <button className="w-full text-left px-4 py-3 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition-colors">
                            Delete Account
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;