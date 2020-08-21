import {combineReducers} from "redux";
import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import categoryListReducer from "./categoryList/categoryList.reducer";
import shopReducer from "./shop/shop.reducer";

const persistConfig = {
    key: "root", 
    storage,
    whiteList : ["cart"]
}

const rootReducer = combineReducers({
    user:userReducer,
    cart: cartReducer,
    categoryList: categoryListReducer,
    shop: shopReducer

})
export default persistReducer(persistConfig, rootReducer)