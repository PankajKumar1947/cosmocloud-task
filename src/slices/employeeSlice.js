import { createSlice } from '@reduxjs/toolkit';

const employeeSlice = createSlice({
    name: 'employee',
    initialState: {
        employees: []
    },
    reducers: {
        addEmployee: (state, action) => {
            state.employees.push({ ...action.payload, _id: Date.now().toString() });
        },
        deleteEmployee: (state, action) => {
            state.employees = state.employees.filter(employee => employee._id !== action.payload);
        },
    }
});

export const { 
    addEmployee, 
    deleteEmployee
} = employeeSlice.actions;

export default employeeSlice.reducer;
