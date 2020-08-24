import {UserActionTypes} from "./user.types"

export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
})

export const toggleUserDropdownHidden = () => ({
    type: UserActionTypes.TOGGLE_USER_DROPDOWN_HIDDEN
})

export const userDropdownClickedOutside = () => ({
    type: UserActionTypes.USER_DROPDOWN_CLICKED_OUTSIDE
})