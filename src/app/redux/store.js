
"use client";
import { configureStore  } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import blogReducer from "./blogSlice";
import packagesReducer from "./packagesSlice";
import { postApis } from "./services/postApis";

import cartReducer from "./cartSlice";

import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({

 reducer: {
 
  [postApis.reducerPath]: postApis.reducer,

  counter: counterReducer,
  blog: blogReducer,
  package : packagesReducer,
  carts:cartReducer,
},
middleware: (getDefaultMiddleware) =>
getDefaultMiddleware().concat(postApis.middleware),



 }); 

 setupListeners(store.dispatch)
