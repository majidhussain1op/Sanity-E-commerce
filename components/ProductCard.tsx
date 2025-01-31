import { Product } from '@/sanity.types'
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import ProductCartBar from './ProductCartBar';
import {LuStar} from "react-icons/lu"
import PriceView from './PriceView';
import AddToCartButton from './AddToCartButton';

interface Props {
    product : Product;
}



const ProductCard = ({product}: Props) => {
    const isStock = product?.stock !==0;
  return (
    <div className='border border-gray-500 rounded-lg overflow-hidden group text-sm transition-shadow hover:shadow-lg'>
      <div className='border border-b-gray-300 relative'>
        {product?.image && (
            <Link href={`/product/${product?.slug?.current}`}>
            <Image
            src={urlFor(product.image).url() || "/fallback-image.png"}
            alt={product?.name || "product.image"}
            width={500}
            height={500}
            loading='lazy'
            className={`w-full max-h-96 object-cover overflow-hidden transition-transform duration-500 ${product?.stock !== 0 ? "group-hover:scale-105" : ""}`}
            />
            </Link>
        )}
       {product?.stock === 0 && (
           <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white font-bold text-lg'>
            <p> Out of Stock </p>
           </div> 
        )}
        {product?.status && product?.stock !== 0 && (
            <div className='absolute left-1 top-1 y-10 flex flex-col items-center space-y-1 group-hover:opacity-0 transition-opacity duration-300'>
                {product?.status.split (``).map((char,index) =>(
                    <span key={index} className='text-semibold uppercase'>{char}</span>
                ))}
            </div>
        )}
        {isStock && (
            <div className='absolute bottom-0 left-0 w-full translate-y-12 group-hover:translate-y-4 hoverEffect'>
                <ProductCartBar/>
            </div>
        )}
       </div>
       <div className='p-5'>{product?.name || "product Description"}

       </div>
       <div className="flex items-center text-gray-500 gap-1">
        {Array.from({length: 5 }).map((_,index) => {
          const isLastStar = index === 4;
          return <LuStar fill={!isLastStar ? "#fca99b" : "transparent"} key={index} className={`${isLastStar ? "text-gray-500" : "text-lightOrange"}`}/>;
        })}
      </div>
      <div className='p-5 flex flex-col gap-2'>
        <p className='text-base text-gray-500 -tracking-wide font-semibold line-clamp-1 capitalize'>{product?.name}</p>
        <PriceView price={product?.price} discount={product?.discount} label={product?.label}/>
        <AddToCartButton product={product}/>
      </div>
    </div>
  )
}

export default ProductCard
