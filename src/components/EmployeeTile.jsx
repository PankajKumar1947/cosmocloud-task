import React from 'react'
import { useDispatch} from "react-redux";
import {  useNavigate } from "react-router-dom";
import { setEmpDetails } from "../slices/employeeDetails";
import { deleteEmployee } from "../slices/employeeSlice";

const EmployeeTile = ({ emp }) => {
  const navigate=useNavigate();
  const dispatch=useDispatch();

  const viewHandler=(emp)=>{
    dispatch(setEmpDetails(emp))
    navigate("/employedetails");
  }
  return (
    <ul
      key={emp._id}
      className="flex justify-between items-center border-[1px] rounded-lg px-2 py-1 gap-x-2">
      <li className="sm:w-[25%]">{emp._id}</li>
      <li className="flex-1">{emp.name}</li>
      <li className="flex gap-x-2 justify-center w-[12%]">
        <button
          onClick={() => viewHandler(emp)}
          className="bg-black text-white px-4 font-semibold text-base rounded-md py-1">View</button></li>
      <button
        onClick={() => dispatch(deleteEmployee(emp._id))}
        className="bg-red-500 text-white px-4 font-semibold text-base rounded-md py-1">delete</button>
    </ul>
  )
}

export default EmployeeTile