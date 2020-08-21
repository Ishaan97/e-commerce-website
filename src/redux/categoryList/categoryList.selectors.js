import {createSelector} from "reselect"

const selectCategoryList = (state) => state.categoryList;

export const selectCategoryListCategory = createSelector(
    [selectCategoryList], 
    categoryList => categoryList.categories
)