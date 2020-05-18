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
    return axios
      .get('http://covid19-india-adhikansh.herokuapp.com/states')
      .then(response => {
        console.log(response.data.state);
        dispatch(changeState(response.data.state));
      })
      .catch(err => {
        console.log("this is error message",err.message);
      });
  };
}

export function changeState(StateName) {
  return {
    type: 'CHANGE_STATE',
    StateName: StateName,
  };
}
