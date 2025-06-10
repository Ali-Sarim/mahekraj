export interface Product {
  id: string;
  name: string;
  brand: string;
  category: 'men' | 'women' | 'unisex' | 'gift-sets' | 'samples';
  subcategory: string;
  fragranceFamily: string;
  description: string;
  fragranceNotes: {
    top: string[];
    middle: string[];
    base: string[];
  };
  variants: ProductVariant[];
  images: string[];
  ratings: {
    average: number;
    count: number;
  };
  tags: string[];
  featured: boolean;
  bestseller: boolean;
  newArrival: boolean;
  active: boolean;
  createdAt: string;
}

export interface ProductVariant {
  id: string;
  size: string;
  price: number;
  originalPrice?: number;
  sku: string;
  stock: number;
}

export interface CartItem {
  productId: string;
  variantId: string;
  quantity: number;
  product: Product;
  variant: ProductVariant;
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  addresses: Address[];
  wishlist: string[];
  createdAt: string;
}

export interface Address {
  id: string;
  type: 'home' | 'office' | 'other';
  firstName: string;
  lastName: string;
  company?: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  phone?: string;
  isDefault: boolean;
}

export interface Order {
  id: string;
  orderNumber: string;
  userId: string;
  items: CartItem[];
  shippingAddress: Address;
  billingAddress: Address;
  paymentMethod: string;
  paymentStatus: 'pending' | 'paid' | 'failed' | 'refunded';
  orderStatus: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  subtotal: number;
  tax: number;
  shipping: number;
  discount: number;
  total: number;
  createdAt: string;
  updatedAt: string;
}

export interface FilterOptions {
  category?: string[];
  fragranceFamily?: string[];
  priceRange?: [number, number];
  size?: string[];
  inStock?: boolean;
  featured?: boolean;
  newArrival?: boolean;
  bestseller?: boolean;
}

export interface SortOption {
  value: string;
  label: string;
}