import { useDispatch, useSelector } from "react-redux";
import { BRANDS, CATEGORIES, SIZES } from "../../data/products";
import ActiveFilters from "./components/active-filters";
import Filter from "./components/filter";
import { RootState } from "../../store/root-reducer";
import {
  onFiltersChange,
  onActiveFiltersChange,
} from "../products/products-slice";
import SortBy from "../products/components/sort-by";
import { ProductSortBy } from "../../enums/product";

interface FiltersPops {
  onSortChange?: (value: ProductSortBy) => void;
  onUpdateURL: (filters: any) => void;
}

const FILTERS = [
  {
    label: "Brand",
    items: BRANDS,
  },
  {
    label: "Category",
    items: CATEGORIES,
  },
  {
    label: "Size",
    items: SIZES,
  },
];

function Filters({ onSortChange, onUpdateURL }: FiltersPops) {
  const dispatch = useDispatch();

  //* Redux States */
  const filters: any = useSelector(
    (state: RootState) => state.products.filters
  );
  const activeFilters = useSelector(
    (state: RootState) => state.products.activeFilters
  );

  //* Helper Functions */
  const handleFilterChange = (filter: string, value: string) => {
    const isAlreadySelected = filters[filter.toLowerCase()].includes(value);
    const newValues = Array.from(
      new Set([...filters[filter.toLowerCase()], value])
    );

    dispatch(
      onFiltersChange({
        ...filters,
        [filter.toLowerCase()]: newValues,
      })
    );
    onUpdateURL({
      ...filters,
      [filter.toLowerCase()]: newValues,
    });

    if (!isAlreadySelected) {
      dispatch(
        onActiveFiltersChange([
          ...activeFilters,
          {
            label: filter,
            value,
          },
        ])
      );
    }
  };

  return (
    <div className='w-full space-y-4 flex-1'>
      <div className='flex justify-between mb-3'>
        <p className=' text-lg leading-[1.6875rem] font-semibold text-[#222222]'>
          <span className='hidden sm:block'>Filters</span>
          <span className='block sm:hidden'>SORT & FILTERS</span>
        </p>
      </div>

      <div className='sm:hidden'>
        <SortBy
          onSortChange={(value: ProductSortBy) => onSortChange?.(value)}
        />
      </div>

      {activeFilters.length > 0 && <ActiveFilters onUpdateURL={onUpdateURL} />}
      {FILTERS.map((filter) => (
        <Filter
          key={filter.label}
          {...filter}
          handleFilterChange={(f, value) => handleFilterChange(f, value)}
        />
      ))}
    </div>
  );
}

export default Filters;
