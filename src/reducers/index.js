let defaultState = {
  StateName: [],
};

const mainReducer = (state = defaultState, action) => {
    // console.log(action.StateName)
  if (action.type === 'CHANGE_STATE') {
    return {
      ...state,
      StateName: action.StateName,
    };
  } else {
    return {
      ...state,
    };
  }
};

export default mainReducer;
