import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import EmployeeDetails from './components/EmployeeDetails';
import AddEmployee from './components/AddEmployee';
import Layout from './components/Layout';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import employeeReducer from './slices/employeeSlice';
import empDetailsReducer from './slices/employeeDetails'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <App />
      },
      {
        path: "employedetails",
        element: <EmployeeDetails />
      },
      {
        path: "addemployee",
        element: <AddEmployee />
      }
    ]
  },
  {
    path: "*",
    element: <div>Page not Found</div>
  }
]);

const store = configureStore({
  reducer: {
    employee: employeeReducer,
    empDetails: empDetailsReducer
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
