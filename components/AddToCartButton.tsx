import { Product } from '@/sanity.types'
import React from 'react'
import { Button } from './ui/button';

interface Props{
    product: Product;
    className:string;
}

const AddToCartButton = ({product, className} : Props) => {
  return (
    <Button className='rounded-full'>
      Add to Cart
    </Button>
  )
}

export default AddToCartButton
