import { ProductSortBy } from "../enums/product";
import { Product } from "../types/product";

export const PER_PAGE_LIMIT = 12;
export const BRANDS = [
  "Annibale Colombo",
  "IKEA",
  "Ashley Furniture",
  "Wayfair",
  "West Elm",
];
export const CATEGORIES = [
  "furniture",
  "electronics",
  "appliances",
  "home decor",
  "outdoor",
];
const TAG_LIST = [
  ["furniture", "beds"],
  ["electronics", "gadgets"],
  ["appliances", "kitchen"],
  ["decor", "lamps"],
  ["outdoor", "garden"],
];
const AVAILABILITY_STATUSES = [
  "In Stock",
  "Out of Stock",
  "Limited Availability",
];
export const SIZES = [
  "1 Quart",
  "5 Quarts",
  "1 Gallon",
  "Bulk 1 Drum",
  "Bulk 1 Tote",
  "Half-Quart",
];

// Function to generate 194 unique products
export const generateProductData = (): Product[] => {
  const random = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min;
  const generateSKU = () =>
    Math.random().toString(36).substring(2, 8).toUpperCase();

  const products = Array.from({ length: 194 }, (_, i) => ({
    id: i + 1,
    title: `${BRANDS[random(0, BRANDS.length - 1)]} Product ${i + 1}`,
    description: `This is a description for product ${
      i + 1
    }. It is a high-quality item.`,
    category: CATEGORIES[random(0, CATEGORIES.length - 1)],
    price: parseFloat((random(50, 2000) + random(0, 99) / 100).toFixed(2)),
    discountPercentage: parseFloat((random(5, 50) / 100).toFixed(2)),
    rating: parseFloat((random(0, 50) / 10).toFixed(2)),
    stock: random(1, 100),
    tags: TAG_LIST[random(0, TAG_LIST.length - 1)],
    brand: BRANDS[random(0, BRANDS.length - 1)],
    sku: generateSKU(),
    weight: random(1, 10),
    availabilityStatus:
      AVAILABILITY_STATUSES[random(0, AVAILABILITY_STATUSES.length - 1)],
    minimumOrderQuantity: random(1, 5),
    size: SIZES[random(0, SIZES.length - 1)],
  }));

  return products;
};

const PRODUCTS: Product[] = generateProductData();

// Function to get paginated and filtered data
export const getFilteredData = ({
  page = 1,
  itemsPerPage = PER_PAGE_LIMIT,
  sortBy = ProductSortBy.PriceHighToLow,
  brand = [],
  size = [],
  category = [],
}: {
  page?: number;
  itemsPerPage?: number;
  sortBy?: ProductSortBy;
  minRating?: number;
  brand?: string[];
  size?: string[];
  category?: string[];
}): {
  currentPage: number;
  totalPages: number;
  totalProducts: number;
  products: Product[];
} => {
  // Apply filters based on rating, weight, and minimum order quantity
  const filteredProducts = PRODUCTS.filter(
    (product: {
      rating: number;
      weight: number;
      minimumOrderQuantity: number;
      brand: string;
      size: string;
      category: string;
    }) => {
      const brandMatch = brand.length ? brand.includes(product.brand) : true;
      const sizeMatch = size.length ? size.includes(product.size) : true;
      const categoryMatch = category.length
        ? category.includes(product.category)
        : true;

      return brandMatch && sizeMatch && categoryMatch;
    }
  );

  // Apply sorting logic
  if (sortBy === ProductSortBy.PriceLowToHigh) {
    filteredProducts.sort(
      (a: { price: number }, b: { price: number }) => a.price - b.price
    );
  } else if (sortBy === ProductSortBy.PriceHighToLow) {
    filteredProducts.sort(
      (a: { price: number }, b: { price: number }) => b.price - a.price
    );
  } else if (sortBy === ProductSortBy.RatingHighToLow) {
    filteredProducts.sort(
      (a: { rating: number }, b: { rating: number }) => b.rating - a.rating
    );
  } else if (sortBy === ProductSortBy.RatingLowToHigh) {
    filteredProducts.sort(
      (a: { rating: number }, b: { rating: number }) => a.rating - b.rating
    );
  }

  // 📄 Paginate the data
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

  return {
    currentPage: page,
    totalPages: Math.ceil(filteredProducts.length / itemsPerPage),
    totalProducts: filteredProducts.length,
    products: paginatedProducts,
  };
};
