import React, { useEffect } from 'react'
import type { IFormInput } from './data';


type Props = {
    totalProducts: number,
    lowStock: IFormInput[],
    sellTotal: number,
    buyTotal: number
}



const Dashboard = (props: Props) => {
    const { totalProducts, lowStock, sellTotal, buyTotal } = props;

   

    return (
        <section className='p-4 w-full flex justify-evenly border-b'>
            {/* total count */}
            <div className='bg-gray-200 rounded-md p-4 flex flex-col gap-4 w-1/5 justify-center'>
                <div>Total Products</div>
                <div className=' rounded-md font-bold'>{totalProducts}</div>
            </div>
            {/* list of low stock */}
            <div className='bg-gray-200 rounded-md p-4 flex flex-col gap-4 w-1/5 justify-center'>
                <div>Low Stock</div>
                <div className='flex flex-col gap-0 border bg-white'>

                    {lowStock.map((p, idx) => {
                        return <div key={idx} className=' rounded-md'>{p.prodName} | {p.stock}</div>
                    })}
                </div>
            </div>
            {/* total value */}
            <div className='bg-gray-200 rounded-md p-4 flex flex-col gap-4 w-1/5 justify-center'>
                <div>Total Inventory Value</div>
                <div className=' rounded-md font-bold'>Rs. {buyTotal}</div>
            </div>
            <div className='bg-gray-200 rounded-md p-4 flex flex-col gap-4 w-1/5 justify-center'>
                <div>Total Sell Value</div>
                <div className=' rounded-md font-bold'>Rs. {sellTotal}</div>
            </div>
        </section>
    )
}

export default Dashboard