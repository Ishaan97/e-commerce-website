export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    )

    if (existingCartItem) {
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id ?
            {...cartItem, quantity: cartItem.quantity+1}
            : cartItem
        )
    }
    return [...cartItems, {...cartItemToAdd, quantity: 1}]
}

export const addMultipleItemsToCart = (cartItems, cartItemsToAdd)=>{
    let notInCartItems = []
    cartItemsToAdd.forEach(element => {
        let item = element.item;
        
        let indexToReplace = -1;
        for(let i =0; i <cartItems.length; i++){
            if (cartItems[i].id === item.id){
                indexToReplace = i;
                break;
            }
        }
        if (indexToReplace >=0){
            cartItems.splice(indexToReplace, 0, item);
        }else{
            notInCartItems.push(item);
        }
    });

    return [...cartItems, ...notInCartItems]

}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    )
    if (existingCartItem.quantity === 1){
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }
    return cartItems.map(cartItem =>
        cartItem.id === cartItemToRemove.id ?
        {...cartItem, quantity: cartItem.quantity-1} 
        : cartItem
    )

}