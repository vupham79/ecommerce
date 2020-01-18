import { combineReducers } from "redux";
import Order from "./Order";
import Backdrop from "./Backdrop";
import Customer from "./Customer";
import Category from "./Category";

export default combineReducers({
  Order,
  Backdrop,
  Customer,
  Category
});
