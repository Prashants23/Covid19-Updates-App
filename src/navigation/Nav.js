import {Router, Scene, Stack, Actions} from 'react-native-router-flux';
import React from 'react';

import {Text, View, StyleSheet, BackHandler} from 'react-native';
import FrontPageCon from '../container/FrontPageContainer';
import BoxCon from '../container/box-container';
import HelplineNumbersCon from '../container/HelplineNumberCon';
// import News from '../Component/News';
// import States from '../Component/box';
// import StatesCon from '../container/statesContainer';
import Resources from '../Component/Resources';
import NewsContainer from '../container/NewsContainer';
import Instructions from '../Component/CovidInstructions';
import FirstPage from '../Component/firstPage1';

class Navigator extends React.Component {
  // componentDidMount(){}
  _backAndroidHandler = () => {
    const scene = Actions.currentScene;
    // alert(scene)
    if (scene === 'firstPage') {
      BackHandler.exitApp();
      return true;
    }
    Actions.pop();
    return true;
  };
  render() {
    return (
      // <View>
      //   <Text>tfjygkhj</Text>
      // </View>S

      <Router backAndroidHandler={this._backAndroidHandler}>
        <Stack key="root" navigationBarStyle={{backgroundColor: '#164057'}}>
          {/* <Scene
            initial
            key="FrontPage"
            component={FrontPageCon}
            hideNavBar={true}
            style
          /> */}
          <Scene
            initial
            key="firstPage"
            component={FirstPage}
            hideNavBar={true}
          />
          <Scene key="BoxCon" component={BoxCon} hideNavBar={true} />
          {/* <Scene
            key="State"
            component={StatesCon}
            title={'Covid19 States Data'}
            titleStyle={{marginLeft: 55, fontSize: 16, color: '#164057'}}
          /> */}
          <Scene
            key="helplineNo"
            component={HelplineNumbersCon}
            title="Helpline Numbers"
            titleStyle={{marginLeft: 55, fontSize: 16, color: 'white'}}
            // hideNavBar={true}
          />
          <Scene
            key="News"
            component={NewsContainer}
            title={'News'}
            titleStyle={{fontSize: 16, color: 'white'}}
            hideNavBar={true}
          />
          <Scene
            key="Instruction"
            component={Instructions}
            // title={'Resources'}
            titleStyle={{fontSize: 16, color: '#164057'}}
            hideNavBar={true}
          />
          <Scene
            key="Resources"
            component={Resources}
            title={'Resources'}
            titleStyle={{fontSize: 16, color: 'white'}}
          />
        </Stack>
      </Router>
    );
  }
}
export default Navigator;
