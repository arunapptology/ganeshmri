"use client"; //this is a client side component
import { createSlice } from "@reduxjs/toolkit";


  
export const cartSlice = createSlice({

    name: 'cart',
    initialState:{
        CartItems: [],
        cartTotalQuantity:0,
        cartTotalAmount:0
    },

    reducers: {

        addcart(state , action){

          const itemIndex =  state.CartItems.findIndex( 

            (item) => item.id === action.payload.id

            );
            

            if(itemIndex >= 0 ){

                state.CartItems[itemIndex].cartQuantity += 1

            }else{
                const tempItems ={...action.payload ,cartQuantity:1}
                state.CartItems.push(tempItems)
            }
       
    
        } ,
    remove(state , action){

            return state.filter((item)=>{
                item.id!==action.payload
            })
        },
  
    }

});

export const { addcart , remove } = cartSlice.actions

export default cartSlice.reducer;