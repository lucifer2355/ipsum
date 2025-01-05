import { ProductSortBy } from "../enums/product";

export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  size: string;
  availabilityStatus: string;
  minimumOrderQuantity: number;
}

export interface ProductFilters {
  page?: number;
  itemsPerPage?: number;
  sortBy?: ProductSortBy;
  brand?: string[];
  size?: string[];
  category?: string[];
}
