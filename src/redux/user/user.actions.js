import {UserActionTypes} from "./user.types"

export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
})

export const toggleUserDropdownHidden = () => ({
    type: UserActionTypes.TOGGLE_USER_DROPDOWN_HIDDEN
})

export const hideUserDropdown = () => ({
    type: UserActionTypes.USER_DROPDOWN_CLICKED_OUTSIDE
})

export const showUserInformation = () => ({
    type: UserActionTypes.SHOW_USER_INFORMATION
})

export const showResetPassword = () => ({
    type: UserActionTypes.SHOW_RESET_PASSWORD
})

export const showOrderHistory = () => ({
    type: UserActionTypes.SHOW_ORDER_HISTORY
})