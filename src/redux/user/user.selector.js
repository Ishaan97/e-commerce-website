import {createSelector} from "reselect";

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
    [selectUser],
    (user) => user.currentUser
)

export const selectOrderHistory = createSelector(
    [selectCurrentUser],
    (currentUser) => currentUser.orderHistory
)

export const selectUserDropdownHidden = createSelector(
    [selectUser],
    (user) => user.hidden
)

export const selectShowUserInformation = createSelector(
    [selectUser],
    (user) => user.showUserInformtion
)

export const selectShowOrderHistory = createSelector(
    [selectUser],
    (user) => user.showOrderHistory
)