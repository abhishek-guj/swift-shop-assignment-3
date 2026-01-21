import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './layout'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import Catalog from './components/Catalog'
import { DummyData, type IFormInput } from './components/data'
// import {Layout} from "./"

function App() {

  const [productsData, setProductsData] = useState<IFormInput[]>(() => {
    const data = localStorage.getItem("list")
    return data ? JSON.parse(data) : DummyData
  })

  useEffect(()=>{
    // https://www.geeksforgeeks.org/reactjs/managing-local-storage-session-storage-using-react-hooks/
    localStorage.setItem("list",JSON.stringify(productsData))
    setProductsData(productsData)
  },[productsData])

  // sending to dashboard
  const totalProducts = productsData.reduce((a, prod) => a = a + prod.stock, 0)
  const lowStock = productsData.filter(pro => pro.stock < 10)
  const buyTotal = productsData.reduce((a, pro) => a = a + (pro.buyPrice * pro.stock), 0)
  const sellTotal = productsData.reduce((a, pro) => a = a + (pro.price * pro.stock), 0)
  console.log(totalProducts, lowStock)
  // sending to dashboard

  return (
    <div className="mt-10 w-full">
      <Layout>
        <main className='flex flex-col px-4'>
          {/* <Sidebar /> */}
          <Dashboard totalProducts={totalProducts} lowStock={lowStock} sellTotal={sellTotal} buyTotal={buyTotal} />
          <Catalog setProductsData={setProductsData} productsData={productsData} />
        </main>
      </Layout>
    </div>
  )
}

export default App
