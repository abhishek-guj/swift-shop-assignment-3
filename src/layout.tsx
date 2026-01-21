import React, { type JSX, type PropsWithChildren } from 'react'
import Navbar from './components/Navbar'

type Props = {
  children: JSX.Element
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <main className='flex flex-col justify-start h-screen'>
        <Navbar />
        {children}
      </main>
    </>
  )
}

export default Layout