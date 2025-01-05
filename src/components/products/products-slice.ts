import { createSlice } from "@reduxjs/toolkit";
import { Product, ProductFilters } from "../../types/product";
import { getFilteredData } from "../../data/products";
import { ProductSortBy } from "../../enums/product";

const initialFilters = {
  page: 1,
  itemsPerPage: 12,
  sortBy: ProductSortBy.PriceHighToLow,
  brand: [],
  size: [],
  category: [],
};

interface State {
  products: Product[];
  filters: ProductFilters;
  totalProducts: number;
  totalPages: number;
  activeFilters: { label: string; value: string }[];
}

const initialState: State = {
  products: getFilteredData({})?.products || [],
  filters: initialFilters,
  totalProducts: getFilteredData({})?.totalProducts || 0,
  totalPages: getFilteredData({})?.totalPages || 12,
  activeFilters: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    onFiltersChange(state, action) {
      state.filters = action.payload;
      state.products = getFilteredData({ ...action.payload }).products;
      state.totalProducts = getFilteredData({
        ...action.payload,
      }).totalProducts;
      state.totalPages = getFilteredData({
        ...action.payload,
      }).totalPages;
    },
    onActiveFiltersChange(state, action) {
      state.activeFilters = action.payload;
    },
    clearFilters(state) {
      state.filters = initialState.filters;
      state.activeFilters = initialState.activeFilters;
      state.products = getFilteredData({}).products;
      state.totalProducts = getFilteredData({}).totalProducts;
      state.totalPages = getFilteredData({}).totalPages;
    },
  },
});

export const { onFiltersChange, onActiveFiltersChange, clearFilters } =
  productsSlice.actions;
export default productsSlice.reducer;
