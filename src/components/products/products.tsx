import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Pagination from "./components/pagination";
import Product from "./components/product";
import SortBy from "./components/sort-by";
import { RootState } from "../../store/root-reducer";
import { onFiltersChange } from "./products-slice";
import { PER_PAGE_LIMIT } from "../../data/products";
import { ProductSortBy } from "../../enums/product";
import ProductMobile from "./components/product-mobile";
import FilterSidebar from "../filter-sidebar";

interface ProductsProps {
  onUpdateURL: (filters: any) => void;
}

function Products({ onUpdateURL }: ProductsProps) {
  const dispatch = useDispatch();

  //* Redux States */
  const products = useSelector((state: RootState) => state.products.products);
  const filters = useSelector((state: RootState) => state.products.filters);
  const totalProducts = useSelector(
    (state: RootState) => state.products.totalProducts
  );
  const totalPages = useSelector(
    (state: RootState) => state.products.totalPages
  );

  //* Local States */
  const [currentPage, setCurrentPage] = useState<number>(1);

  //* Helper Functions */

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    dispatch(onFiltersChange({ ...filters, page }));

    onUpdateURL({ ...filters, page });
  };

  const onSortChange = (value: ProductSortBy) => {
    dispatch(onFiltersChange({ ...filters, sortBy: value }));

    onUpdateURL({ ...filters, sortBy: value });
  };

  return (
    <div className='shrink-0'>
      <div className='flex justify-between mb-3'>
        <p className='text-base font-normal text-[#222222]'>
          Showing{" "}
          <span className='font-medium'>{`${
            currentPage * PER_PAGE_LIMIT - (PER_PAGE_LIMIT - 1)
          } - ${
            currentPage * PER_PAGE_LIMIT > totalProducts
              ? totalProducts
              : currentPage * PER_PAGE_LIMIT
          }`}</span>{" "}
          of {totalProducts}
        </p>

        <div className='hidden sm:flex gap-6'>
          <SortBy
            onSortChange={(value: ProductSortBy) => onSortChange(value)}
          />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page: number) => handlePageChange(page)}
          />
        </div>

        <div className='sm:hidden'>
          <FilterSidebar onSortChange={onSortChange} updateURL={onUpdateURL} />
        </div>
      </div>

      {/* Product Grid for Larger Screens */}
      <div className='hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>

      {/* Product Grid for Mobile */}
      <div className='block sm:hidden grid grid-cols-2'>
        {products.map((product) => (
          <ProductMobile key={product.id} {...product} />
        ))}
      </div>

      <div className='flex justify-center w-full mt-8'>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page: number) => handlePageChange(page)}
        />
      </div>
    </div>
  );
}

export default Products;
