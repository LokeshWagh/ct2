import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("cart")) ?? [];

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            const itemExists = state.some((item) => item.id === action.payload.id);
            if (!itemExists) {
                state.push(action.payload);
                localStorage.setItem("cart", JSON.stringify(state));
            } else {
                console.warn("Item already exists in cart:", action.payload);
            }
        },
        deleteFromCart(state, action) {
            const updatedCart = state.filter((item) => item.id !== action.payload.id);
            localStorage.setItem("cart", JSON.stringify(updatedCart));
            return updatedCart;
        },
    },
});

export const { addToCart, deleteFromCart } = cartSlice.actions;
export default cartSlice.reducer;
