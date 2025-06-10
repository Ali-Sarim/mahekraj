import React, { useState, useMemo } from 'react';
import { Filter, SlidersHorizontal, Grid3X3, List, X } from 'lucide-react';
import { sampleProducts, fragranceFamilies, categories, sizes, sortOptions } from '../data/products';
import { FilterOptions, SortOption } from '../types';
import ProductCard from '../components/Product/ProductCard';
import { useStore } from '../store/useStore';

const ProductsPage: React.FC = () => {
  const { searchQuery } = useStore();
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [filters, setFilters] = useState<FilterOptions>({
    category: [],
    fragranceFamily: [],
    priceRange: [0, 1000],
    size: [],
    inStock: false,
    featured: false,
    newArrival: false,
    bestseller: false,
  });

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = sampleProducts.filter(product => {
      // Search query filter
      if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
          !product.fragranceFamily.toLowerCase().includes(searchQuery.toLowerCase()) &&
          !product.description.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }

      // Category filter
      if (filters.category && filters.category.length > 0 && !filters.category.includes(product.category)) {
        return false;
      }

      // Fragrance family filter
      if (filters.fragranceFamily && filters.fragranceFamily.length > 0 && 
          !filters.fragranceFamily.includes(product.fragranceFamily)) {
        return false;
      }

      // Price range filter
      const minPrice = Math.min(...product.variants.map(v => v.price));
      const maxPrice = Math.max(...product.variants.map(v => v.price));
      if (filters.priceRange && (maxPrice < filters.priceRange[0] || minPrice > filters.priceRange[1])) {
        return false;
      }

      // Size filter
      if (filters.size && filters.size.length > 0 && 
          !product.variants.some(v => filters.size!.includes(v.size))) {
        return false;
      }

      // Stock filter
      if (filters.inStock && !product.variants.some(v => v.stock > 0)) {
        return false;
      }

      // Feature filters
      if (filters.featured && !product.featured) return false;
      if (filters.newArrival && !product.newArrival) return false;
      if (filters.bestseller && !product.bestseller) return false;

      return true;
    });

    // Sort products
    switch (sortBy) {
      case 'newest':
        filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        break;
      case 'price-low':
        filtered.sort((a, b) => Math.min(...a.variants.map(v => v.price)) - Math.min(...b.variants.map(v => v.price)));
        break;
      case 'price-high':
        filtered.sort((a, b) => Math.max(...b.variants.map(v => v.price)) - Math.max(...a.variants.map(v => v.price)));
        break;
      case 'rating':
        filtered.sort((a, b) => b.ratings.average - a.ratings.average);
        break;
      case 'popular':
        filtered.sort((a, b) => b.ratings.count - a.ratings.count);
        break;
      default: // featured
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return filtered;
  }, [searchQuery, filters, sortBy]);

  const handleFilterChange = (key: keyof FilterOptions, value: any) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({
      category: [],
      fragranceFamily: [],
      priceRange: [0, 1000],
      size: [],
      inStock: false,
      featured: false,
      newArrival: false,
      bestseller: false,
    });
  };

  const activeFiltersCount = Object.values(filters).reduce((count, value) => {
    if (Array.isArray(value) && value.length > 0) return count + value.length;
    if (typeof value === 'boolean' && value) return count + 1;
    return count;
  }, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h1 className="font-display text-3xl font-bold text-gray-900 mb-2">
                Our Fragrance Collection
              </h1>
              <p className="text-gray-600">
                Discover {filteredProducts.length} exquisite fragrances crafted for the discerning connoisseur
              </p>
            </div>
            
            <div className="flex items-center space-x-4 mt-4 lg:mt-0">
              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-luxury-gold"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>

              {/* View Toggle */}
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-white shadow' : ''}`}
                >
                  <Grid3X3 size={20} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-white shadow' : ''}`}
                >
                  <List size={20} />
                </button>
              </div>

              {/* Filter Toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center px-4 py-2 bg-luxury-black text-white rounded-lg hover:bg-luxury-charcoal transition-colors"
              >
                <SlidersHorizontal size={20} className="mr-2" />
                Filters
                {activeFiltersCount > 0 && (
                  <span className="ml-2 bg-luxury-gold text-luxury-black text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {activeFiltersCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:w-80 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-4">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-lg">Filters</h3>
                <button
                  onClick={clearFilters}
                  className="text-sm text-luxury-gold hover:text-luxury-bronze transition-colors"
                >
                  Clear All
                </button>
              </div>

              <div className="space-y-6">
                {/* Category Filter */}
                <div>
                  <h4 className="font-medium mb-3">Category</h4>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <label key={category.value} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={filters.category?.includes(category.value) || false}
                          onChange={(e) => {
                            const current = filters.category || [];
                            if (e.target.checked) {
                              handleFilterChange('category', [...current, category.value]);
                            } else {
                              handleFilterChange('category', current.filter(c => c !== category.value));
                            }
                          }}
                          className="mr-2 text-luxury-gold focus:ring-luxury-gold"
                        />
                        <span className="text-sm">{category.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Fragrance Family Filter */}
                <div>
                  <h4 className="font-medium mb-3">Fragrance Family</h4>
                  <div className="space-y-2 max-h-40 overflow-y-auto">
                    {fragranceFamilies.map(family => (
                      <label key={family} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={filters.fragranceFamily?.includes(family) || false}
                          onChange={(e) => {
                            const current = filters.fragranceFamily || [];
                            if (e.target.checked) {
                              handleFilterChange('fragranceFamily', [...current, family]);
                            } else {
                              handleFilterChange('fragranceFamily', current.filter(f => f !== family));
                            }
                          }}
                          className="mr-2 text-luxury-gold focus:ring-luxury-gold"
                        />
                        <span className="text-sm">{family}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range Filter */}
                <div>
                  <h4 className="font-medium mb-3">Price Range</h4>
                  <div className="space-y-2">
                    <input
                      type="range"
                      min="0"
                      max="1000"
                      value={filters.priceRange?.[1] || 1000}
                      onChange={(e) => handleFilterChange('priceRange', [0, parseInt(e.target.value)])}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>$0</span>
                      <span>${filters.priceRange?.[1] || 1000}</span>
                    </div>
                  </div>
                </div>

                {/* Size Filter */}
                <div>
                  <h4 className="font-medium mb-3">Size</h4>
                  <div className="space-y-2">
                    {sizes.map(size => (
                      <label key={size} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={filters.size?.includes(size) || false}
                          onChange={(e) => {
                            const current = filters.size || [];
                            if (e.target.checked) {
                              handleFilterChange('size', [...current, size]);
                            } else {
                              handleFilterChange('size', current.filter(s => s !== size));
                            }
                          }}
                          className="mr-2 text-luxury-gold focus:ring-luxury-gold"
                        />
                        <span className="text-sm">{size}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Feature Filters */}
                <div>
                  <h4 className="font-medium mb-3">Features</h4>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={filters.inStock || false}
                        onChange={(e) => handleFilterChange('inStock', e.target.checked)}
                        className="mr-2 text-luxury-gold focus:ring-luxury-gold"
                      />
                      <span className="text-sm">In Stock Only</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={filters.featured || false}
                        onChange={(e) => handleFilterChange('featured', e.target.checked)}
                        className="mr-2 text-luxury-gold focus:ring-luxury-gold"
                      />
                      <span className="text-sm">Featured</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={filters.newArrival || false}
                        onChange={(e) => handleFilterChange('newArrival', e.target.checked)}
                        className="mr-2 text-luxury-gold focus:ring-luxury-gold"
                      />
                      <span className="text-sm">New Arrivals</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={filters.bestseller || false}
                        onChange={(e) => handleFilterChange('bestseller', e.target.checked)}
                        className="mr-2 text-luxury-gold focus:ring-luxury-gold"
                      />
                      <span className="text-sm">Bestsellers</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <Filter size={64} className="mx-auto text-gray-300 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600 mb-4">
                  Try adjusting your filters or search query to find what you're looking for.
                </p>
                <button
                  onClick={clearFilters}
                  className="px-6 py-3 bg-luxury-black text-white rounded-lg hover:bg-luxury-charcoal transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
                  : 'grid-cols-1'
              }`}>
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Overlay */}
      {showFilters && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden">
          <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-2xl overflow-y-auto">
            <div className="p-4 border-b flex items-center justify-between">
              <h3 className="font-semibold text-lg">Filters</h3>
              <button
                onClick={() => setShowFilters(false)}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <X size={20} />
              </button>
            </div>
            {/* Filter content would be repeated here for mobile */}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsPage;