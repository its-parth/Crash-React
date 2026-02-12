import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    cartItems: []
}
export const cartSlice = createSlice({
    name: 'cart', 
    initialState,
    reducers: {
        addToCart : (state, action) => {
            if(!state.cartItems.some(item => item === action.payload.id))
            state.cartItems.push(action.payload)
        },
        removeFromCart : (state, action) => {
            state.cartItems = state.cartItems.filter(product => product.id != action.payload.id)
        },
        resetCart : (state) => {
            state.cartItems.length = 0;
        }
    }
});

export const selectIsInCart = (state, productId) => {
    return state.cart.cartItems.some(
        item => item.id === productId
    )
}   

export const { addToCart, removeFromCart, resetCart } = cartSlice.actions;
export default cartSlice.reducer;