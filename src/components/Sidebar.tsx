import React from 'react'

const Sidebar = () => {
    return (
        <>
            <aside className='border-r border-gray-500 w-40 h-screen p-4 flex flex-col gap-4'>
                {/* ??? add special css for this buttons */}
                <div>Dashboard</div>
                <hr/>
                <div>Catalog</div>
                <hr/>
            </aside>
        </>
    )
}

export default Sidebar