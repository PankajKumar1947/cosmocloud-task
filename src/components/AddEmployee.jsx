import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addEmployee as addEmployeeFunction } from '../slices/employeeSlice';

const AddEmployee = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [address, setAddress] = useState({
    line1: '',
    city: '',
    country: '',
    zip: ''
  });
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const employee = { 
      name, 
      address, 
      contacts: [
        { contact_method: 'email', value: email },
        { contact_method: 'phone', value: contact }
      ]
    };
    dispatch(addEmployeeFunction(employee));
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className='font-bold'>Add Employee</h1>
      <div className='flex flex-col mt-2'>
        <label className='italic font-semibold'>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className='border-[1px] rounded-md border-black flex-1 p-1 px-2'
        />
      </div>

      <h2 className='italic font-semibold mt-4'>Address</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-2'>
        <div className='flex justify-between gap-x-10 sm:gap-x-10'>
          <label>Line1</label>
          <input
            type="text"
            value={address.line1}
            onChange={(e) => setAddress({ ...address, line1: e.target.value })}
            required
            className='border-[1px] rounded-md border-black p-1 px-2 flex-1'
          />
        </div>
        <div className='flex justify-between gap-x-12 sm:gap-x-5'>
          <label>City</label>
          <input
            type="text"
            value={address.city}
            onChange={(e) => setAddress({ ...address, city: e.target.value })}
            required
            className='border-[1px] rounded-md border-black p-1 px-2 flex-1'
          />
        </div>

        <div className='flex justify-between gap-x-5'>
          <label>Country</label>
          <input
            type="text"
            value={address.country}
            onChange={(e) => setAddress({ ...address, country: e.target.value })}
            required
            className='border-[1px] rounded-md border-black p-1 px-2 flex-1'
          />
        </div>

        <div className='flex justify-between gap-x-12 sm:gap-x-5'>
          <label>Zip</label>
          <input
            type="number"
            value={address.zip}
            onChange={(e) => setAddress({ ...address, zip: e.target.value })}
            required
            className='border-[1px] rounded-md border-black p-1 px-2 flex-1'
          />
        </div>
      </div>

      <h2 className='italic font-semibold mt-4'>Contacts</h2>
      <div className='flex gap-2 w-full justify-between'>
        <div className='flex gap-2 gap-x-4'>
          <div className='flex-1'>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className='border-[1px] rounded-md border-black p-1 px-2 w-full'
            />
          </div>
        </div>
        <div className='flex gap-2 gap-x-4'>
          <div className='flex-1'>
            <label>Contact (Phone)</label>
            <input
              type="number"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              required
              className='border-[1px] rounded-md border-black p-1 px-2 w-full'
            />
          </div>
        </div>
      </div>

      <div className='flex justify-center mt-5'>
        <button
          type="submit"
          className='bg-green-500 text-white px-4 font-semibold rounded-md py-1'
        >
          Add Employee
        </button>
      </div>
    </form>
  );
}

export default AddEmployee;
