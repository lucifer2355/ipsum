import { Filter, X } from "lucide-react";
import { useSelector } from "react-redux";
import { useState } from "react";
import Filters from "../filters";
import { RootState } from "../../store/root-reducer";
import { ProductSortBy } from "../../enums/product";

interface FilterSidebarProps {
  onSortChange: (value: ProductSortBy) => void;
  updateURL: (filters: any) => void;
}

function FilterSidebar({ onSortChange, updateURL }: FilterSidebarProps) {
  const activeFilters = useSelector(
    (state: RootState) => state.products.activeFilters
  );

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle Sidebar for Mobile
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      {/* Filter Button for Mobile */}
      <div
        onClick={toggleSidebar}
        className='flex items-center gap-3 sm:hidden'
      >
        <Filter width={16} height={16} className='text-[#222222]' />
        <p className='text-sm font-semibold text-[#222222]'>
          Filter ({activeFilters.length})
        </p>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-white shadow-lg transform overflow-y-auto p-4 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 lg:h-auto`}
      >
        <Filters
          onSortChange={(value: ProductSortBy) => onSortChange(value)}
          onUpdateURL={(filters: any) => updateURL(filters)}
        />

        {/* Close Button for Mobile */}
        <button
          className='lg:hidden absolute top-4 right-4 text-gray-600'
          onClick={toggleSidebar}
        >
          <X width={24} height={24} />
        </button>
      </div>
    </div>
  );
}

export default FilterSidebar;
