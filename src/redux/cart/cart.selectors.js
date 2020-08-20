import {createSelector} from "reselect";

const selectCart = (state) => {
    return state.cart;
}

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => (cart.cartItems)
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((accumlator, cartItem)=>{
        return accumlator + cartItem.quantity
    }, 0)
)

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((accumlator, cartItem)=>{
        return accumlator + cartItem.quantity*cartItem.price
    }, 0)

)