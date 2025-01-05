import { useSelector, useDispatch } from "react-redux";
import { X } from "lucide-react";
import { RootState } from "../../../store/root-reducer";
import {
  clearFilters,
  onActiveFiltersChange,
  onFiltersChange,
} from "../../products/products-slice";

interface ActiveFiltersProps {
  onUpdateURL: (filters: any) => void;
}

function ActiveFilters({ onUpdateURL }: ActiveFiltersProps) {
  const dispatch = useDispatch();

  //* Redux State */
  const filters: any = useSelector(
    (state: RootState) => state.products.filters
  );
  const activeFilters = useSelector(
    (state: RootState) => state.products.activeFilters
  );

  //* Helper Functions */
  const handleClearAll = () => {
    onUpdateURL({
      ...filters,
      brand: [],
      category: [],
      size: [],
    });
    dispatch(clearFilters());
  };

  const removeFilter = (filter: { label: string; value: string }) => {
    const newActiveFilters = activeFilters.filter(
      (activeFilter) => activeFilter.value !== filter.value
    );
    const removeFilter = filters[filter.label.toLowerCase()].filter(
      (value: string) => value !== filter.value
    );

    dispatch(onActiveFiltersChange(newActiveFilters));
    dispatch(
      onFiltersChange({
        ...filters,
        [filter.label.toLowerCase()]: removeFilter,
      })
    );
  };

  return (
    <div className='w-full'>
      <div className='h-[3.75rem] flex justify-between items-center'>
        <h2 className='text-base font-semibold text-[#222222]'>
          Active Filters ({activeFilters.length})
        </h2>
        <button
          onClick={handleClearAll}
          className='text-gray-600 focus:outline-none'
        >
          <span className='text-sm leading-[1.3125rem] font-normal text-[#CC3333]'>
            Clear All
          </span>
        </button>
      </div>

      <div className='flex flex-wrap gap-2 overflow-y-auto max-h-48 opacity-100'>
        {activeFilters.map((filter) => (
          <div
            key={filter.value}
            className='flex gap-1 items-center border border-[#EBEBEB] rounded-sm py-2 px-3 bg-gray-300'
          >
            <p className='text-sm leading-[1.3125rem] font-normal'>
              {filter.value}
            </p>
            <X
              width={14}
              height={14}
              onClick={() => removeFilter(filter)}
              className='text-[#222222] cursor-pointer'
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActiveFilters;
