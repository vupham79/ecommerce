export const orderAddItem = dispatch => {
  dispatch({
    type: "ADD_ITEM"
  });
};

export const orderConfirm = dispatch => {
  dispatch({
    type: "TOGGLE_CONFIRM"
  });
};

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};
