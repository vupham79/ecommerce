const defaultState = {
  items: []
};

const BackdropReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        items: [...state.items]
      };
    case "CHECKOUT":
      return {
        ...state,
        open: false
      };
    default:
      return state;
  }
};

export default BackdropReducer;
