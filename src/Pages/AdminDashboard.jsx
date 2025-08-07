import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/core/Admin/Sidebar'

const AdminDashboard = () => {
  return (
    <div className="flex min-h-screen w-full ">
        <Sidebar />
        <div className='w-full overflow-auto' >
            <div className='mx-auto h-full w-11/12 max-w-[1000px]' >
                <Outlet />
            </div>
        </div>

    </div>
  )
}

export default AdminDashboard