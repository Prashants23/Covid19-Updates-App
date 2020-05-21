let defaultState = {
  StateName: [],
  TotalCases: [],
  NumbersData: [],
};

const mainReducer = (state = defaultState, action) => {
  // console.log(action.StateName)

  // if (action.type === 'CHANGE_STATE') {
  //   return {
  //     ...state,
  //     StateName: action.StateName,
  //   };
  // } else {
  //   return {
  //     ...state,
  //   };
  // }
  switch (action.type) {
    case 'CHANGE_STATE':
      return {
        ...state,
        StateName: action.StateName,
      };
    case 'TOTAL_CASES':
      return {
        ...state,
        TotalCases: action.TotalCases,
      };
    case 'HELPLINE_NO':
      return {
        ...state,
        NumbersData: action.NumbersData,
      };
    default:
      return state;
  }
};

export default mainReducer;
