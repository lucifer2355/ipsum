import { useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const handlePrevious = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = useCallback(() => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  }, [currentPage, onPageChange, totalPages]);

  return (
    <div className='flex items-center border border-[#D4D4D4] rounded-sm'>
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className={`px-3 py-[.375rem] text-gray-500 border-r border-[#A2AAAD] h-full ${
          currentPage === 1
            ? "cursor-not-allowed opacity-50"
            : "hover:text-black"
        }`}
      >
        <ChevronLeft width={20} height={20} className='text-[#696969]' />
      </button>
      <p className='px-3 py-[.375rem] text-sm leading-[1.3125rem] font-medium text-[#696969]'>
        Page {currentPage} of {totalPages}
      </p>
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`px-3 py-[.375rem] text-gray-500 border-l border-[#A2AAAD] h-full ${
          currentPage === totalPages
            ? "cursor-not-allowed opacity-50"
            : "hover:text-black"
        }`}
      >
        <ChevronRight width={20} height={20} className='text-[#696969]' />
      </button>
    </div>
  );
}

export default Pagination;
