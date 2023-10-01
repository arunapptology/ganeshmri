"use client"; //this is a client side component

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const postApis =  createApi({

    reducerPath :"postApis",

    baseQuery:fetchBaseQuery({
        baseUrl:'https://www.ganeshmri.com/admin/api/'
    }),
    endpoints: (builder) => ({
        
        getCategoryData: builder.query({
          query: () => `category`,
            }),

        getBranchesData: builder.query({
            query: () => `branches`,
            }),

        getDepartmentData: builder.query({
            query: (slug) => `departmentList/${slug}`,
            }),

    getDepartmentDetails: builder.query({
                query: (slug) => `departmentDetail/${slug}`,
                }),

    getSearchResult: builder.query({
        query: (slug) => `searchList/${slug}`,
        }),


    getBlogResult: builder.query({
        query: () => `blogs`,
        }),
        

    getPackageResult: builder.query({
        query: (slug) => `packages/${slug}`,
        }),

            


      }),
  

});
  
  
export const { 
    useGetCategoryDataQuery ,
     useGetBranchesDataQuery,
     useGetDepartmentDataQuery,
     useGetDepartmentDetailsQuery,
     useGetSearchResultQuery,
     useGetBlogResultQuery,
     useGetPackageResultQuery
    } = postApis;
