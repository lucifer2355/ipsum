import { useCallback, useState } from "react";
import { ChevronDownIcon } from "lucide-react";
import { cn } from "../../utils/cs";
import { ProductSortBy } from "../../enums/product";

export interface SelectOption {
  value: string | number;
  label: string;
}

interface SelectProps {
  value: ProductSortBy;
  options: SelectOption[];
  onChange: (value: ProductSortBy) => void;
  className?: string;
}

export function Select({ value, options, onChange, className }: SelectProps) {
  const [selectedValue, setSelectedValue] = useState<ProductSortBy>(value);

  const handleChange = useCallback(
    (option: any) => {
      setSelectedValue(option);
      onChange?.(option);
    },
    [onChange]
  );

  return (
    <div className='space-y-1.5'>
      <div className='relative'>
        <select
          value={selectedValue}
          onChange={(e) => handleChange(e.target.value)}
          className={cn(
            `w-full
            appearance-none
            rounded-sm
            p-4
            text-sm
            font-normal
            transition-colors
            border border-[#C5C5C5]
            focus:outline-none focus:ring-2
            text-[#707070]
            bg-transparent
          `,
            className
          )}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4'>
          <ChevronDownIcon className={`h-5 w-5 text-[#707070]`} />
        </div>
      </div>
    </div>
  );
}
