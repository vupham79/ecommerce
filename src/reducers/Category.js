import { GET_ALL_CATEGORY_SUCCESS } from "../constant/redux";

const defaultState = {
  categories: []
};

const CategoryReducer = (state = { defaultState }, action) => {
  switch (action.type) {
    case GET_ALL_CATEGORY_SUCCESS:
      return {
        ...state,
        categories: action.payload
      };
    default:
      return state;
  }
};

export default CategoryReducer;
