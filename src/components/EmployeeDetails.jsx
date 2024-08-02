import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';

const EmployeeDetails = () => {
  const emp=useSelector((state)=>state.empDetails);
  const navigate=useNavigate();
  console.log(emp);
  const employee=emp?.employees; 

  useEffect(()=>{
    if(employee===null)
      navigate("/");
  })
  return (
    <div className='p-4'>
      <h1 className='font-bold text-2xl mb-4'>Employee Details</h1>
      <div className='bg-white shadow rounded-lg p-4'>
        <h2 className='font-semibold text-xl mb-2'>{employee?.name}</h2>

        <div className='bg-gray-100 p-4 rounded-lg mb-4'>
          <h3 className='font-semibold text-lg'>Address</h3>
          <p><strong>Line1:</strong> {employee?.address?.line1}</p>
          <p><strong>City:</strong> {employee?.address?.city}</p>
          <p><strong>Country:</strong> {employee?.address?.country}</p>
          <p><strong>Zip:</strong> {employee?.address?.zip}</p>
        </div>

        <h3 className='font-semibold text-lg mb-2'>Contacts</h3>
        <ul>
          {employee?.contacts?.map((contact, index) => (
            <li key={index}>
              <strong>{contact.contact_method.charAt(0).toUpperCase() + contact.contact_method.slice(1)}:</strong> {contact.value}
            </li>
          ))}
        </ul>
      </div>
      <div className='flex mt-5 justify-center'>
        <NavLink to={"/"} className="px-2 py-1 rounded-full bg-black text-white text-sm font-semibold">Home</NavLink>
      </div>
      
    </div>
  )
}

export default EmployeeDetails