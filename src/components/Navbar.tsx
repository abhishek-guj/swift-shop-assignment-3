import React from 'react'
import { IoIosNotifications } from "react-icons/io";
import { RiAccountCircleFill } from "react-icons/ri";



const Navbar = () => {
    return (
        <nav className='h-10 fixed top-0 flex justify-between w-full border-b border-gray-500 bg-black text-white z-50'>
            <div className='flex items-center'>
                <div className='w-40 border-r border-gray-500 font-black text-2xl'>SS</div>
                <div className='px-4'>Good Morning!</div>
            </div>
            <div className='flex justify-center items-center gap-4 p-4'>
                <IoIosNotifications className='w-6 h-6' />
                <RiAccountCircleFill className='w-6 h-6' />
            </div>
        </nav>
    )
}

export default Navbar