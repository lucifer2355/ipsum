import { ProductSortBy } from "../../../enums/product";
import { Select } from "../../UI/select";
import { useCallback } from "react";

interface SortByProps {
  onSortChange: (value: ProductSortBy) => void;
}

const options = [
  {
    value: ProductSortBy.PriceLowToHigh,
    label: "Price: Low to High",
  },
  {
    value: ProductSortBy.PriceHighToLow,
    label: "Price: High to Low",
  },
  {
    value: ProductSortBy.RatingHighToLow,
    label: "Rating: High to Low",
  },
  {
    value: ProductSortBy.RatingLowToHigh,
    label: "Rating: Low to High",
  },
];

function SortBy({ onSortChange }: SortByProps) {
  const handleChange = useCallback(
    (value: ProductSortBy) => {
      onSortChange(value);
    },
    [onSortChange]
  );

  return (
    <div className='flex items-center space-x-4'>
      <span className='text-base font-semibold text-[#222222]'>Sort By:</span>
      <div className='w-[13.125rem]'>
        <Select
          options={options}
          value={ProductSortBy.PriceHighToLow}
          onChange={(value: ProductSortBy) => handleChange(value)}
        />
      </div>
    </div>
  );
}

export default SortBy;
