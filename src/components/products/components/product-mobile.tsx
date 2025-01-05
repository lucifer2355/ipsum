import type { Product as ProductMobile } from "../../../types/product";
import Button from "../../UI/button";
import { Card } from "../../UI/card";

function ProductMobile(product: ProductMobile) {
  return (
    <Card className='max-w-[10.75rem]'>
      <Card.Body>
        {/* Image */}
        <div className='pt-3 gap-[.625rem] h-[8.625rem]'>
          <p className='text-xs font-semibold text-[#0F172A]'>
            {product?.brand}
          </p>
          <p className='text-base font-bold text-[#0F172A] flex flex-wrap'>
            {product?.title}
          </p>
        </div>

        <div className='flex flex-col gap-[.875rem]'>
          <div className='w-[7.9375rem] h-[5.75rem] bg-gray-300' />

          <div className='flex gap-[.625rem]'>
            <span className='text-sm font-normal text-[#939393]'>
              SKU: {product?.sku}
            </span>
            <span className='text-sm font-normal text-[#13997C]'>
              Multiple Sizes Available
            </span>
          </div>

          <div className='flex flex-col'>
            <p className='text-base font-normal text-[#0F172A]'>From</p>
            <p className='text-[1.375rem] leading-[2.0625rem] font-semibold text-[#222222]'>
              ${product?.price}
            </p>
          </div>
        </div>

        <Button
          onClick={() => console.log("view product")}
          classNames='mt-1 w-full'
        >
          VIEW
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductMobile;
