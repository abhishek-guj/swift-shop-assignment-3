import React, { type ReactComponentElement } from 'react'
import type { IFormInput } from './data'

type Props = {
    productData: IFormInput
    updateForm: Function
}

const imagePaths = {
    "Electronics":"gadgets.png",
    "Appliances":"home-appliance.png",
    "KitchenWare" :"kitchen.png",
}

const ProductCard = ({ productData, updateForm }: Props) => {
    // ??? do prop destructuring 
    const handleClick=(e)=>{
        updateForm(productData)
    }

    return (
        <div className='rounded-md border p-4 w-48 text-sm justify-start' onClick={handleClick}>
            <div className='rounded-sm'>
                <img  className='rounded-sm w-40 h-30' src={`/src/assets/${imagePaths[productData.prodCategory]}`} alt="image" />
            </div>
            <div className='truncate'>
                {productData.prodName}
            </div>
            <div className='flex justify-between items-center'>
                <div>{productData.prodCategory}</div>
                <div className='text-xs items-center'>Rs. {productData.price}</div>
                <div className='text-xs items-center'>Rs. {productData.buyPrice}</div>
            </div>
            <div className='h-10 truncate'>{productData.description}</div>
            <div className=''>{productData.stock}</div>
        </div>
    )
}

export default ProductCard