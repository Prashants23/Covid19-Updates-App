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
          console.log(
            'NEW API ---------------------------------------------------------------------',
            response.data[1].state_data,
          );
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
  return dispatch => {
    return axios
      .get('https://covid-19india-api.herokuapp.com/v2.0/country_data')
      .then(response => {
        // console.log(response.data[1]);
        dispatch(totalCases(response.data[1]));
      })
      .catch(err => {
        console.log('this is error message', err.message);
      });
  };
}

export function totalCases(Cases) {
  return {
    type: 'TOTAL_CASES',
    TotalCases: Cases,
  };
}


// Helpline Number

export function HelpLineNo() {
  // console.log("caleed ghm")
  return dispatch => {
    return axios
      .get('https://covid-19india-api.herokuapp.com/v2.0/helpline_numbers')
      .then(response => {
        console.log(response.data[1].contact_details);
        dispatch(helplineNos(response.data[1].contact_details));
      })
      .catch(err => {
        console.log('this is error message', err.message);
      });
  };
}

export function helplineNos(Numbers) {
  return {
    type: 'HELPLINE_NO',
    NumbersData: Numbers,
  };
}
