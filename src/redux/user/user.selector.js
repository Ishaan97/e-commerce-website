import {createSelector} from "reselect";

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
    [selectUser],
    (user) => user.currentUser
)

export const selectUserDropdownHidden = createSelector(
    [selectUser],
    (user) => user.hidden
)

export const selectShowUserInformation = createSelector(
    [selectUser],
    (user) => user.showUserInformtion
)

export const selectShowResetPassword = createSelector(
    [selectUser],
    (user) => user.showResetPassword
)

export const selectShowOrderHistory = createSelector(
    [selectUser],
    (user) => user.showOrderHistory
)