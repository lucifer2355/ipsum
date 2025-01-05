import { useCallback, useState } from "react";
import { Minus, Plus } from "lucide-react";

interface FilterProps {
  label: string;
  items: string[];
  handleFilterChange: (filter: string, value: string) => void;
}

function Filter({ label, items, handleFilterChange }: FilterProps) {
  const [isOpen, setIsOpen] = useState(true);

  //* Helper Function */
  const handleItemClick = useCallback(
    (l: string, v: string) => {
      handleFilterChange(l, v);
    },
    [handleFilterChange]
  );

  return (
    <div className='w-full'>
      <div className='border-b border-[#EAEAEA] h-[3.75rem] flex justify-between items-center'>
        <h2 className='text-base font-semibold text-[#222222]'>{label}</h2>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='text-gray-600 focus:outline-none'
        >
          {isOpen ? (
            <Minus className='text-[#13997C]' />
          ) : (
            <Plus className='text-[#13997C]' />
          )}
        </button>
      </div>

      <div
        className={`transition-all duration-300 ease-in-out overflow-y-auto ${
          isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className='gap-[1px]'>
          {items.map((item, index) => (
            <li
              key={index}
              onClick={() => handleItemClick(label, item)}
              className='border-b border-[#EAEAEA] text-sm leading-[1.3125rem] font-normal p-[.625rem] last:border-none cursor-pointer hover:bg-[#F7F7F7]'
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Filter;
