let defaultState = {
  StateName: [],
  TotalCases: [],
  NumbersData: [],
  DistrictTotalData: [{test: {Test: 'ghjh,'}}],
  DistrictNames: [],
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
    case 'TOTAL_DISTRICT_CASES':
      return {
        ...state,
        DistrictTotalData: action.DistrictTotalData,
        DistrictNames: action.DistrictNames,
      };
    default:
      return state;
  }
};

export default mainReducer;
