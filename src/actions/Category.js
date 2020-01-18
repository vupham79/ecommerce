import axios from "../utils/axios";
import { GET_ALL_CATEGORY_SUCCESS } from "../constant/redux";
export const addCategory = async dispatch => {
  dispatch({
    type: "ADD_ITEM"
  });
};

export const getAllCategory = () => {
  return async dispatch => {
    console.log("1233");
    const categories = await axios({
      url: "/category"
    });
    dispatch({
      type: GET_ALL_CATEGORY_SUCCESS,
      payload: categories.data
    });
  };
};
