// import axios from 'axios';

// export function loadColor() {
// //   console.log('I am getting called');
//   return (dispatch) => {
//     return (
//       axios
//         //   .get('https://api.covid19india.org/state_district_wise.json')
//         .get('http://covid19-india-adhikansh.herokuapp.com/states')
//         .then(response => {
//           console.log(response.data);
//           dispatch(changeState(response.data));
//         })
//     );
//   };
// }

// export function changeState(StateName) {
//   return {
//     type: 'CHANGE_STATE',
//     StateName: StateName,
//   };
// }

import axios from 'axios';

export function loadColor() {
  // console.log("caleed ghm")
  return dispatch => {
    return (
      axios
        // .get('http://covid19-india-adhikansh.herokuapp.com/states')
        .get('https://covid-19india-api.herokuapp.com/v2.0/state_data')
        .then(response => {
          // console.log(
          //   'NEW API ---------------------------------------------------------------------',
          //   response.data[1].state_data,
          // );
          dispatch(changeState(response.data[1].state_data));
        })
        .catch(err => {
          console.log('this is error message', err.message);
        })
    );
  };
}

export function changeState(StateName) {
  return {
    type: 'CHANGE_STATE',
    StateName: StateName,
  };
}

export function totalCasesIndia() {
  // console.log("caleed ghm")
  return async dispatch => {
    try {
      const response = await axios.get(
        'https://covid-19india-api.herokuapp.com/v2.0/country_data',
      );
      // console.log(response.data[1]);
      dispatch(totalCases(response.data[1]));
    } catch (err) {
      console.log('this is error message', err.message);
    }
  };
}

export function totalCases(Cases) {
  return {
    type: 'TOTAL_CASES',
    TotalCases: Cases,
  };
}
// District Data

export function DistrictData(data) {
  // console.log("caleed ghm")
  return async dispatch => {
    try {
      const response = await axios.get(
        'https://api.covid19india.org/state_district_wise.json',
      );
      const x = response.data[data];
      console.log(x);
      dispatch(districtCases(Object.keys(x.districtData), x.districtData));
    } catch (err) {
      console.log('this is error message', err.message);
    }
  };
}

export function districtCases(districtNames, districtData) {
  return {
    type: 'TOTAL_DISTRICT_CASES',
    DistrictTotalData: districtData,
    DistrictNames: districtNames,
  };
}

// Helpline Number

export function HelpLineNo() {
  // console.log("caleed ghm")
  return async dispatch => {
    try {
      const response = await axios.get(
        'https://covid-19india-api.herokuapp.com/v2.0/helpline_numbers',
      );
      console.log(response.data[1].contact_details);
      dispatch(helplineNos(response.data[1].contact_details));
    } catch (err) {
      console.log('this is error message', err.message);
    }
  };
}

export function helplineNos(Numbers) {
  return {
    type: 'HELPLINE_NO',
    NumbersData: Numbers,
  };
}

// NEWS API

export function NewsApi() {
  // console.log("caleed ghm")
  return async dispatch => {
    try {
      const response = await axios.get(
        'http://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey=16b19fa967824908bcb304a5a11ddeb7',
      );
      // console.log(response.data["articles"]);
      dispatch(NewsData(response.data.articles));
    } catch (err) {
      console.log('this is error message', err.message);
    }
  };
}

export function NewsData(Data) {
  return {
    type: 'NEWS_DATA',
    NewsDataArray: Data,
  };
}

// Clear Data

export function CallClearData() {
  // console.log("caleed ghm")
  return async dispatch => {
    dispatch(ClearData());
  };
}
export function ClearData(Data) {
  return {
    type: 'CLEAR_DATA',
  };
}
