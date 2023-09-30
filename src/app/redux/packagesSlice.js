"use client"; //this is a client side component

import { createAsyncThunk ,  createSlice } from "@reduxjs/toolkit";


export const getPackagesData =  createAsyncThunk("getPackages" , async () => {

     const response = await fetch(`https://www.ganeshmri.com/admin/api/packages`);
     const result = await response.json();

     return result;
})


const initialState = {
  packages: [],
  pending:true,
  error:null,
};
 
export const packagesSlice = createSlice({


  name:"getPackages" ,
  initialState,


  extraReducers: {
    [getPackagesData.pending]: (state)=> {
        state.loading = true
    },
    [getPackagesData.fulfilled]: (state , action)=> {
        state.loading = false,
        state.packages = action.payload
    },
    [getPackagesData.rejected]: (state , action)=> {
        state.loading = false,
        state.error = action.payload
    }

  },
});

export default packagesSlice.reducer;