import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <h1 className="text-2xl font-bold text-center underline mt-2">
        <NavLink to={"/"}>  Employees Management (CRUD) </NavLink>
      </h1>
      <div className='max-w-[95vw] sm:max-w-[70vw] md:max-w-[50vw] mx-auto mt-6 text-sm sm:text-base'>
        <Outlet />
      </div>
    </>
  )
}

export default Layout