import React from 'react'
import {FaRegEye} from "react-icons/fa"
import {RiShoppingBag4Line} from "react-icons/ri"
import {MdFavoriteBorder} from "react-icons/md"
import {TbArrowsRightLeft} from "react-icons/tb"

const ProductCartBar = () => {
  return (
    <div className='text-gray-500 text-lg flex items-center justify-center gap-2.5'>
        <div className='border shadow-md bg-white p-2 rounded-xl hover:bg-darkBlue hover:text-white hoverEffect'>
        <FaRegEye/>
        </div>
        <div className='border shadow-md bt-white p-2 rounded-xl hover:bg-darkBlue hover:text-white hoverEffect'>
            <RiShoppingBag4Line/>
        </div>
        <div className='border shadow-md bt-white p-2 rounded-xl hover:bg-darkBlue hover:text-white hoverEffect'>
            <MdFavoriteBorder/>
        </div>
        <div className='border shadow-md bt-white p-2 rounded-xl hover:bg-darkBlue hover:text-white hoverEffect'>
            <TbArrowsRightLeft/>
        </div>
        
    </div>
  )
}

export default ProductCartBar
