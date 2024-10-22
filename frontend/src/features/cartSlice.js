import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

const initialState = {
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {

            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id)

            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1;
                state.cartTotalQuantity++;
                toast.info(`Increased ${action.payload.name} quantity.`, {
                    position: "bottom-left",
                    autoClose: 2000,
                })
            } else {
                const tempProduct = { ...action.payload, cartQuantity: 1 };
                state.cartItems.push(tempProduct);
                state.cartTotalQuantity++;
                toast.success(`Added ${action.payload.name} to cart.`, {
                    position: "bottom-left",
                    autoClose: 2000,
                })
            }

            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
            
        },
        removeFromCart: (state, action) => {
            const nextCartItems = state.cartItems.filter(cartItem => cartItem.id !== action.payload.id);
            state.cartItems = nextCartItems;
            localStorage.setItem("cartItems", JSON.stringify(nextCartItems));
            toast.warn(`Removed ${action.payload.name} from cart.`, {
                position: "bottom-left",
                autoClose: 2000,
            })
        },
        decreaseCart: (state, action) => {
            const itemIndex = state.cartItems.findIndex(cartItem => cartItem.id === action.payload.id);
    
            if(state.cartItems[itemIndex].cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity -= 1;
                toast.warn(`Decreased ${action.payload.name} cart quantity.`, {
                    position: "bottom-left",
                    autoClose: 2000,
                })

            } else if (state.cartItems[itemIndex].cartQuantity === 1) {
                const nextCartItems = state.cartItems.filter(cartItem => cartItem.id !== action.payload.id);
                state.cartItems = nextCartItems;
                toast.warn(`Removed ${action.payload.name} from cart.`, {
                    position: "bottom-left",
                    autoClose: 2000,
                })
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        clearCart: (state, action) => {
            state.cartItems = [];
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            toast.warn(`Cart cleared.`, {
                position: "bottom-left",
                autoClose: 2000,
            })
        },
        getTotals: (state, action) => {
            let { total, quantity } = state.cartItems.reduce(
                (cartTotal, cartItem) => {
                const { price, cartQuantity } = cartItem;
                const itemTotal = price * cartQuantity;

                cartTotal.total += itemTotal;
                cartTotal.quantity += cartQuantity;

                return cartTotal
            }, 
            {
                total: 0,
                quantity: 0
            }
            );
            state.cartTotalAmount = total;
            state.cartTotalQuantity = quantity;
        },
    }
})

export const { addToCart, removeFromCart, decreaseCart, clearCart, getTotals } = cartSlice.actions;
export default cartSlice.reducer;