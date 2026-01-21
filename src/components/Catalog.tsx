import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import ProductForm from './ProductForm'
import type { IFormInput } from './data'


type Props = {
    setProductsData: Function,
    productsData: IFormInput[],
}

const Catalog = (props: Props) => {
    const { setProductsData, productsData } = props
    const [filterList, setFilterList] = useState<IFormInput[]>([])

    // if this removed instant changes are not reflected
    // reason: productsData is different and dilterlist is different and as filterlist is used to render i added this useedffect here
    useEffect(()=>{setFilterList(productsData)},[productsData])


    const handleProductClick = (a) => {
        console.log(a)
        setSelectedData(a)
    }

    const handleSearch = (e) => {
        const fList = productsData.filter(pro => pro.prodName.toLowerCase().includes(e.target.value.toLowerCase()))
        setFilterList(fList)
    }

    const handleFilter = (e) => {
        if(e.target.value.toLowerCase()=="all"){
            setFilterList(productsData)
            return
        }
        const fList = productsData.filter(pro => pro.prodCategory.toLowerCase()===e.target.value.toLowerCase())
        setFilterList(fList)
    }

    const [selectedData, setSelectedData] = useState<IFormInput>()

    return (
        <>
            <div className='flex p-4'>
                {/* products */}

                <div className='w-3/6 flex flex-col'>
                    <div className='flex pb-4'>
                        <input placeholder='Search' onChange={handleSearch} />
                        <select onChange={handleFilter} className='border border-gray-400 w-full p-1'>
                            <option value="All">All</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Appliances">Appliances</option>
                            <option value="KitchenWare">KitchenWare</option>
                        </select>
                    </div>
                    <div className='flex flex-wrap h-fit justify-center gap-2'>

                        {filterList.map((prod) => {
                            return <ProductCard key={prod.id} updateForm={handleProductClick} productData={prod} />
                        })}
                    </div>
                </div>
                {/* form */}
                {<div className='flex-1 border-l flex flex-col items-center ml-4 px-4'>
                    <div className='sticky top-14 w-full'>
                        <ProductForm selectedData={selectedData} setSelectedData={setSelectedData} setProductsData={setProductsData} productsData={productsData} />
                    </div>
                </div>}
            </div>
        </>
    )
}

export default Catalog