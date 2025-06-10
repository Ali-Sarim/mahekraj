import { Product } from '../types';

export const sampleProducts: Product[] = [
  {
    id: '1',
    name: 'Royal Oud Supreme',
    brand: 'Mahekraj',
    category: 'unisex',
    subcategory: 'Luxury Collection',
    fragranceFamily: 'Oriental',
    description: 'An exquisite blend of rare oud wood and precious spices, Royal Oud Supreme is the epitome of luxury fragrance. This masterpiece combines traditional Middle Eastern perfumery with contemporary sophistication.',
    fragranceNotes: {
      top: ['Bergamot', 'Saffron', 'Pink Pepper'],
      middle: ['Rose', 'Oud Wood', 'Jasmine'],
      base: ['Amber', 'Musk', 'Sandalwood']
    },
    variants: [
      { id: '1-50', size: '50ml', price: 299, originalPrice: 349, sku: 'MRJ-ROS-50', stock: 15 },
      { id: '1-100', size: '100ml', price: 499, originalPrice: 599, sku: 'MRJ-ROS-100', stock: 8 }
    ],
    images: [
      'https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    ratings: { average: 4.8, count: 127 },
    tags: ['luxury', 'oud', 'oriental', 'premium'],
    featured: true,
    bestseller: true,
    newArrival: false,
    active: true,
    createdAt: '2024-01-15T10:30:00Z'
  },
  {
    id: '2',
    name: 'Elegant Rose Garden',
    brand: 'Mahekraj',
    category: 'women',
    subcategory: 'Floral Collection',
    fragranceFamily: 'Floral',
    description: 'A romantic symphony of blooming roses and delicate florals. Elegant Rose Garden captures the essence of a pristine garden in full bloom, perfect for the sophisticated woman.',
    fragranceNotes: {
      top: ['Lemon', 'Peach', 'Green Leaves'],
      middle: ['Rose Petals', 'Peony', 'Lily of the Valley'],
      base: ['White Musk', 'Cedar', 'Vanilla']
    },
    variants: [
      { id: '2-30', size: '30ml', price: 149, sku: 'MRJ-ERG-30', stock: 22 },
      { id: '2-50', size: '50ml', price: 229, sku: 'MRJ-ERG-50', stock: 18 },
      { id: '2-100', size: '100ml', price: 389, sku: 'MRJ-ERG-100', stock: 12 }
    ],
    images: [
      'https://images.pexels.com/photos/3018845/pexels-photo-3018845.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    ratings: { average: 4.6, count: 89 },
    tags: ['floral', 'romantic', 'feminine', 'roses'],
    featured: true,
    bestseller: false,
    newArrival: true,
    active: true,
    createdAt: '2024-02-01T14:20:00Z'
  },
  {
    id: '3',
    name: 'Midnight Intensity',
    brand: 'Mahekraj',
    category: 'men',
    subcategory: 'Signature Collection',
    fragranceFamily: 'Woody',
    description: 'Bold and mysterious, Midnight Intensity is crafted for the modern gentleman. This sophisticated fragrance combines woody notes with spicy undertones for an unforgettable presence.',
    fragranceNotes: {
      top: ['Black Pepper', 'Cardamom', 'Grapefruit'],
      middle: ['Vetiver', 'Cedarwood', 'Lavender'],
      base: ['Patchouli', 'Leather', 'Dark Chocolate']
    },
    variants: [
      { id: '3-50', size: '50ml', price: 199, sku: 'MRJ-MIT-50', stock: 25 },
      { id: '3-100', size: '100ml', price: 329, sku: 'MRJ-MIT-100', stock: 19 }
    ],
    images: [
      'https://images.pexels.com/photos/887751/pexels-photo-887751.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    ratings: { average: 4.7, count: 156 },
    tags: ['woody', 'masculine', 'intense', 'evening'],
    featured: false,
    bestseller: true,
    newArrival: false,
    active: true,
    createdAt: '2024-01-20T09:15:00Z'
  },
  {
    id: '4',
    name: 'Fresh Ocean Breeze',
    brand: 'Mahekraj',
    category: 'unisex',
    subcategory: 'Fresh Collection',
    fragranceFamily: 'Fresh',
    description: 'Experience the invigorating essence of the ocean with Fresh Ocean Breeze. This refreshing fragrance captures the purity of sea air and coastal winds.',
    fragranceNotes: {
      top: ['Sea Salt', 'Mint', 'Citrus Zest'],
      middle: ['Marine Accord', 'Eucalyptus', 'Sage'],
      base: ['Driftwood', 'Ambergris', 'White Tea']
    },
    variants: [
      { id: '4-50', size: '50ml', price: 179, sku: 'MRJ-FOB-50', stock: 30 },
      { id: '4-100', size: '100ml', price: 299, sku: 'MRJ-FOB-100', stock: 20 }
    ],
    images: [
      'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    ratings: { average: 4.4, count: 73 },
    tags: ['fresh', 'marine', 'clean', 'unisex'],
    featured: false,
    bestseller: false,
    newArrival: true,
    active: true,
    createdAt: '2024-02-10T11:45:00Z'
  },
  {
    id: '5',
    name: 'Golden Amber Elixir',
    brand: 'Mahekraj',
    category: 'women',
    subcategory: 'Premium Collection',
    fragranceFamily: 'Oriental',
    description: 'A warm and sensual fragrance that embodies luxury and sophistication. Golden Amber Elixir is a rich composition of precious amber and exotic spices.',
    fragranceNotes: {
      top: ['Orange Blossom', 'Cinnamon', 'Star Anise'],
      middle: ['Golden Amber', 'Honey', 'Turkish Rose'],
      base: ['Benzoin', 'Vanilla', 'Incense']
    },
    variants: [
      { id: '5-30', size: '30ml', price: 189, sku: 'MRJ-GAE-30', stock: 16 },
      { id: '5-50', size: '50ml', price: 279, sku: 'MRJ-GAE-50', stock: 14 }
    ],
    images: [
      'https://images.pexels.com/photos/6794896/pexels-photo-6794896.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    ratings: { average: 4.9, count: 94 },
    tags: ['amber', 'warm', 'sensual', 'oriental'],
    featured: true,
    bestseller: false,
    newArrival: false,
    active: true,
    createdAt: '2024-01-10T16:30:00Z'
  },
  {
    id: '6',
    name: 'Discovery Gift Set',
    brand: 'Mahekraj',
    category: 'gift-sets',
    subcategory: 'Gift Collections',
    fragranceFamily: 'Mixed',
    description: 'Perfect for exploring the world of Mahekraj fragrances. This curated set includes five 10ml samples of our most popular scents in an elegant presentation box.',
    fragranceNotes: {
      top: ['Various'],
      middle: ['Various'],
      base: ['Various']
    },
    variants: [
      { id: '6-set', size: '5x10ml', price: 99, sku: 'MRJ-DGS-SET', stock: 35 }
    ],
    images: [
      'https://images.pexels.com/photos/7319337/pexels-photo-7319337.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    ratings: { average: 4.5, count: 45 },
    tags: ['gift', 'sampler', 'variety', 'discovery'],
    featured: false,
    bestseller: false,
    newArrival: true,
    active: true,
    createdAt: '2024-02-15T13:20:00Z'
  }
];

export const fragranceFamilies = [
  'Oriental',
  'Floral',
  'Woody',
  'Fresh',
  'Citrus',
  'Gourmand',
  'Chypre',
  'Fougere'
];

export const categories = [
  { value: 'men', label: "Men's Fragrances" },
  { value: 'women', label: "Women's Fragrances" },
  { value: 'unisex', label: 'Unisex Fragrances' },
  { value: 'gift-sets', label: 'Gift Sets' },
  { value: 'samples', label: 'Samples' }
];

export const sizes = ['10ml', '30ml', '50ml', '100ml', 'Set'];

export const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'newest', label: 'Newest' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'popular', label: 'Most Popular' }
];