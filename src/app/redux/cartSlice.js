"use client"; //this is a client side component
import { createSlice } from "@reduxjs/toolkit";

   
  
export const cartSlice = createSlice({

    name: 'cart',
    initialState:{
        CartItems: [],
        totalQuantity: 0,
        totalPrice: 0,
        cartTotal:0
    },

    reducers: {

        addcart(state , action){

          const itemIndex =  state.CartItems.findIndex( 

            (item) => item.id === action.payload.id

            );

            console.log(itemIndex)
            

            if(itemIndex >= 0 ){

                state.CartItems[itemIndex].totalQuantity += 0

            }else{
                const tempItems ={...action.payload ,totalQuantity:1}
                state.CartItems.push(tempItems)


                
         let { totalQuantity, totalPrice } = state.CartItems.reduce((cartTotal, cartItem) => {


            const { txtDiscountedPrice, totalQuantity } = cartItem;
            const itemTotal = txtDiscountedPrice*1;
            cartTotal.totalPrice += itemTotal;
            cartTotal.totalQuantity += 1;
            return cartTotal;
            },
            {
            totalPrice: 0,
            totalQuantity: 0,
            }
        );
        state.totalPrice = parseInt(totalPrice.toFixed(2));
        state.totalQuantity = totalQuantity;
            

            }
       
    
        } ,
    removeCart(state , action){

         state.CartItems = state.CartItems.filter((item) => item.id !== action.payload);


  
         let { totalQuantity, totalPrice } = state.CartItems.reduce((cartTotal, cartItem) => {


            const { txtDiscountedPrice, totalQuantity } = cartItem;
            const itemTotal = txtDiscountedPrice*1;
            cartTotal.totalPrice += itemTotal;
            cartTotal.totalQuantity += 1;
            return cartTotal;
            },
            {
            totalPrice: 0,
            totalQuantity: 0,
            }
        );
        state.totalPrice = parseInt(totalPrice.toFixed(2));
        state.totalQuantity = totalQuantity;
            

        },

    getCartTotal: (state) => {


        let { totalQuantity, totalPrice } = state.CartItems.reduce((cartTotal, cartItem) => {


            const { txtDiscountedPrice, totalQuantity } = cartItem;
            const itemTotal = txtDiscountedPrice * 1;
            cartTotal.totalPrice += itemTotal;
            cartTotal.totalQuantity += 1;
            return cartTotal;
            },
            {
            totalPrice: 0,
            totalQuantity: 0,
            }
        );
        state.totalPrice = parseInt(totalPrice.toFixed(2));
        state.totalQuantity = totalQuantity;
        },
    
    }

});

export const { addcart , removeCart  , getCartTotal} = cartSlice.actions

export default cartSlice.reducer;