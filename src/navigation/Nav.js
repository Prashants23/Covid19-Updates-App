import {Router, Scene, Stack} from 'react-native-router-flux';
import React from 'react';
// import {Text, View, StyleSheet} from 'react-native';
import FrontPageCon from '../container/FrontPageContainer';
import BoxCon from '../container/box-container';
import HelplineNumbersCon from '../container/HelplineNumberCon';

class Navigator extends React.Component {
  render() {
    return (
      // <View>
      //   <Text>tfjygkhj</Text>
      // </View>S

      <Router>
        <Stack key="root">
          <Scene
            initial
            key="FrontPage"
            component={FrontPageCon}
            hideNavBar={true}
          />
          <Scene key="BoxCon" component={BoxCon} hideNavBar={true} />
          <Scene
            key="helplineNo"
            component={HelplineNumbersCon}
            hideNavBar={true}
          />
        </Stack>
      </Router>
    );
  }
}
export default Navigator;
