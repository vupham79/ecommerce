export const hideBackdrop = () => {
  return dispatch => {
    dispatch({
      type: "HIDE_BACKDROP"
    });
  };
};

export const showBackdrop = () => {
  return dispatch => {
    dispatch({
      type: "SHOW_BACKDROP"
    });
  };
};
