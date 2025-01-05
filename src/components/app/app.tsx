import { useEffect } from "react";
import { useSearchParams } from "react-router";
import { useDispatch } from "react-redux";
import Filters from "../filters";
import Products from "../products";
import {
  onActiveFiltersChange,
  onFiltersChange,
} from "../products/products-slice";

function App() {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  // Update URL on filter change
  const updateURL = (newFilters: any) => {
    const newParams = new URLSearchParams();

    // Convert array to comma-separated string
    if (newFilters.brand.length > 0) {
      newParams.set("brand", newFilters.brand.join(","));
    }

    if (newFilters.category.length > 0) {
      newParams.set("category", newFilters.category.join(","));
    }

    if (newFilters.size.length > 0) {
      newParams.set("size", newFilters.size.join(","));
    }

    // Handle other filters
    if (newFilters.sortBy) newParams.set("sortBy", newFilters.sortBy);
    if (newFilters.page) newParams.set("page", newFilters.page);

    setSearchParams(newParams);
  };

  const transformSearchToActiveFilters = (f: any) => {
    const activeFilters: { label: string; value: string }[] = [];

    for (const key in f) {
      if (f[key].length > 0 && key !== "page" && key !== "sortBy") {
        f[key]?.forEach((value: string) => {
          if (value.length > 0) {
            activeFilters.push({ label: key, value });
          }
        });
      }
    }

    return activeFilters;
  };

  //* useEffect */
  useEffect(() => {
    const brand = searchParams.get("brand")?.split(",") || [];
    const category = searchParams.get("category")?.split(",") || [];
    const size = searchParams.get("size")?.split(",") || [];
    const sortBy = searchParams.get("sortBy") || "relevance";
    const page = parseInt(searchParams.get("page") || "1");

    const appliedFilters = {
      brand,
      category,
      size,
      sortBy,
      page,
    };
    const getActiveFilters = transformSearchToActiveFilters(appliedFilters);

    dispatch(onFiltersChange(appliedFilters));
    dispatch(onActiveFiltersChange(getActiveFilters));
  }, []);

  return (
    <div className='flex gap-6 justify-between p-4 sm:p-6'>
      <div className='hidden sm:flex sm:w-full'>
        <Filters onUpdateURL={(filters: any) => updateURL(filters)} />
      </div>
      <Products onUpdateURL={(filters: any) => updateURL(filters)} />
    </div>
  );
}

export default App;
