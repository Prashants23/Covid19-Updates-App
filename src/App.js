import React, {useEffect} from 'react';
// import ReactDOM from 'react-dom';
import {
  View,
  BackHandler,
  Alert,
  StatusBar,
  StyleSheet,
  Platform,
} from 'react-native';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import mainReducer from './reducers/index.js';
import BoxCon from './container/box-container.js';
import Navigator from './navigation/Nav';
import {createLogger} from 'redux-logger';
import {Actions} from 'react-native-router-flux';
import SplahScreen from 'react-native-splash-screen';
// import './index.css';
// const store = createStore(
//   mainReducer
//   applyMiddleware(),
// );
const logger = createLogger();
let store = createStore(mainReducer, applyMiddleware(thunk, logger));
const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, {backgroundColor}]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

const styles = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  appBar: {
    backgroundColor: '#79B45D',
    height: APPBAR_HEIGHT,
  },
  content: {
    flex: 1,
    backgroundColor: '#33373B',
  },
});

class App extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    SplahScreen.hide();
  }
  render() {
    // console.log('scenehgjhkjl0+++++++++0', Actions.currentScene);
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          {/* <BoxCon /> */}
          <MyStatusBar backgroundColor={'#12394d'} barStyle="light-content" />
          <Navigator />
        </View>
      </Provider>
    );
  }
}

export default App;
