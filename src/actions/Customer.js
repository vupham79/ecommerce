export const updateFullname = data => {
  return dispatch => {
    dispatch({
      type: "UPDATE_FULLNAME",
      data
    });
  };
};

export const updateEmail = data => {
  return dispatch => {
    dispatch({
      type: "UPDATE_EMAIL",
      data
    });
  };
};

export const updatePhone = data => {
  return dispatch => {
    dispatch({
      type: "UPDATE_PHONE",
      data
    });
  };
};

export const updateCity = data => {
  return dispatch => {
    dispatch({
      type: "UPDATE_CITY",
      data
    });
  };
};

export const updateDistrict = data => {
  return dispatch => {
    dispatch({
      type: "UPDATE_DISTRICT",
      data
    });
  };
};

export const updateNote = data => {
  return dispatch => {
    dispatch({
      type: "UPDATE_NOTE",
      data
    });
  };
};

export const updateAddress = data => {
  return dispatch => {
    dispatch({
      type: "UPDATE_ADDRESS",
      data
    });
  };
};
