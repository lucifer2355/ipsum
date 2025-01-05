import type { Product } from "../../../types/product";
import Button from "../../UI/button";
import { Card } from "../../UI/card";

function Product(product: Product) {
  return (
    <Card className='lg:max-w-[21.25rem] xl:max-w-[21.25rem]'>
      <Card.Body>
        {/* Image */}
        <div className='w-[18rem] h-[13.0625rem] bg-gray-300' />

        <div className='flex flex-col gap-[.875rem]'>
          <div className='pt-3 gap-[.625rem] h-[8.625rem]'>
            <p className='text-sm font-semibold text-[#0F172A]'>
              {product?.brand}
            </p>
            <p className='text-2xl font-bold leading-9 text-[#0F172A] flex flex-wrap'>
              {product?.title}
            </p>
          </div>

          <div className='flex gap-[.625rem]'>
            <span className='text-base font-normal text-[#939393]'>
              SKU: {product?.sku}
            </span>
            <span className='text-base font-normal text-[#13997C]'>
              Multiple Sizes Available
            </span>
          </div>

          <div>
            <p className='text-lg leading-[1.6875rem] font-normal text-[#0F172A]'>
              From
            </p>
            <p className='text-3xl leading-[2.875rem] font-semibold text-[#222222]'>
              ${product?.price}
            </p>
          </div>
        </div>

        <Button
          onClick={() => console.log("view product")}
          classNames='mt-1 w-full'
        >
          VIEW PRODUCT
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Product;
