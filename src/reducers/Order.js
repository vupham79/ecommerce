const defaultState = {
  items: []
};

const OrderReducer = (state = { defaultState }, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        items: [...state.items, action.data]
      };
    case "TOGGLE_CONFIRM_SUCCESS":
      return {
        ...state,
        items: []
      };
    default:
      return state;
  }
};

export default OrderReducer;
