const defaultState = {
  open: false
};

const BackdropReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SHOW_BACKDROP":
      return {
        ...state,
        open: true
      };
    case "HIDE_BACKDROP":
      return {
        ...state,
        open: false
      };
    default:
      return state;
  }
};

export default BackdropReducer;
