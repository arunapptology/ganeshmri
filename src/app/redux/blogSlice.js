"use client"; //this is a client side component

import { createAsyncThunk ,  createSlice } from "@reduxjs/toolkit";


export const getBlogData =  createAsyncThunk("getBlogs" , async () => {

     const response = await fetch(`https://www.ganeshmri.com/admin/api/blogs`);
     const result = await response.json();

     return result;
})


const initialState = {
  blogs: [],
  pending:true,
  error:null,
};

export const blogSlice = createSlice({


  name:"getBlogs" ,
  initialState,


  extraReducers: {
    [getBlogData.pending]: (state)=> {
        state.loading = true
    },
    [getBlogData.fulfilled]: (state , action)=> {
        state.loading = false,
        state.blogs = action.payload
    },
    [getBlogData.rejected]: (state , action)=> {
        state.loading = false,
        state.error = action.payload
    }

  },
});

export default blogSlice.reducer;