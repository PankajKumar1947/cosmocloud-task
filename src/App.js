import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import EmployeeTile from "./components/EmployeeTile";

function App() {
  const employee = useSelector((state) => state.employee.employees);
  //console.log(employee);

  return (
    <>
      <h2 className="flex w-full justify-between font-semibold items-center">Add New Employee <NavLink to={"/addemployee"} className="bg-black text-white px-4 font-semibold rounded-md py-1">Add</NavLink></h2>
      <hr />
      <div className="mt-6">
        <h2 className="font-bold">Employees List : </h2>
        <div className="mt-2">
          <ul className="flex justify-between items-center font-semibold text-base p-2 gap-x-2">
            <li className="sm:w-[25%]">emp_id </li>
            <li className="flex-1">emp_name  </li>
            <li> View Details</li>
          </ul>
          <hr />
          {
            employee.length === 0 ? <h1 className="text-semibold text-center mt-2">No Employees in the system</h1> : <div>
              {
                employee.map((emp) => {
                  return (
                    <EmployeeTile emp={emp} key={emp._id}/>
                  )
                })
              }
            </div>
          }
        </div>
      </div>
    </>
  );
}

export default App;
