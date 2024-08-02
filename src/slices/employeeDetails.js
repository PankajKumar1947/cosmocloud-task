import { createSlice } from '@reduxjs/toolkit';

const employeeDetails = createSlice({
    name: 'employeeDetails',
    initialState: {
        employees: null
    },
    reducers: {
        setEmpDetails: (state, action) => {
            state.employees=action.payload;
        },
       
    }
});

export const { 
    setEmpDetails
} = employeeDetails.actions;

export default employeeDetails.reducer;
