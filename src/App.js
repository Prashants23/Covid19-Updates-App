import React from 'react';
// import ReactDOM from 'react-dom';
import {View} from 'react-native';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import mainReducer from "./reducers/index.js";
import BoxCon from './container/box-container.js';
// import './index.css';

let store = createStore(mainReducer, applyMiddleware(thunk))

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View>
        <Provider store={store}>
          <BoxCon />
        </Provider>
      </View>
    );
  }
}

export default App;
