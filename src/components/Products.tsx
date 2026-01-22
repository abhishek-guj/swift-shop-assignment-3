import React from 'react'
import { ProductList } from './ProductList'
import SearchFilter from './SearchFilter'

const Products = () => {
  return (
    <div className="w-3/6 flex flex-col">
        <SearchFilter/>
        <ProductList/>
    </div>
  )
}

export default Products