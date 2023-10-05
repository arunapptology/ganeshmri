
"use client";
import { combineReducers, configureStore  } from "@reduxjs/toolkit";


import counterReducer from "./counterSlice";
import blogReducer from "./blogSlice";
import packagesReducer from "./packagesSlice";
import { postApis } from "./services/postApis";

import cartReducer from "./cartSlice";

import { setupListeners } from "@reduxjs/toolkit/dist/query";



import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web


const rootReducer = combineReducers({

    [postApis.reducerPath]: postApis.reducer,
  
    counter: counterReducer,
    blog: blogReducer,
    package : packagesReducer,
    carts:cartReducer,
})
 
const persistConfig = {
  key: 'cartItemsPersist',
  storage,
}
 
const persistedReducer = persistReducer(persistConfig , rootReducer)



export const store = configureStore({

reducer:persistedReducer ,
middleware: (getDefaultMiddleware) =>
getDefaultMiddleware().concat(postApis.middleware),



 }); 

 setupListeners(store.dispatch)
