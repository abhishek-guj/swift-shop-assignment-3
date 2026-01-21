import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'

const useProduct = () => {
  const context = useContext(ProductContext)
    if(!context) throw new Error("useProduct must be used in productContext provider");
    return context
}

export default useProduct