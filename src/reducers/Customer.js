const defaultState = {
  fullname: "",
  email: "",
  phone: "",
  city: "",
  district: "",
  address: "",
  note: ""
};

const CustomerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "UPDATE_FULLNAME":
      return {
        ...state,
        fullname: action.data
      };
    case "UPDATE_EMAIL":
      return {
        ...state,
        email: action.data
      };
    case "UPDATE_PHONE":
      return {
        ...state,
        phone: action.data
      };
    case "UPDATE_CITY":
      return {
        ...state,
        city: action.data
      };
    case "UPDATE_DISTRICT":
      return {
        ...state,
        district: action.data
      };
    case "UPDATE_ADDRESS":
      return {
        ...state,
        address: action.data
      };
    case "UPDATE_NOTE":
      return {
        ...state,
        note: action.data
      };
    default:
      return state;
  }
};

export default CustomerReducer;
