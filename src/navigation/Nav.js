import {Router, Scene, Stack} from 'react-native-router-flux';
import React from 'react';
// import {Text, View, StyleSheet} from 'react-native';
import FrontPageCon from '../container/FrontPageContainer';
import BoxCon from '../container/box-container';
import HelplineNumbersCon from '../container/HelplineNumberCon';
import News from '../Component/News';
// import States from '../Component/box';
import StatesCon from '../container/statesContainer';
import Resources from '../Component/Resources';

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
            titleStyle={{marginLeft: 55, fontSize: 16, color: '#164057'}}
            // hideNavBar={true}
          />
          <Scene
            key="News"
            component={News}
            title={'News'}
            titleStyle={{fontSize: 16, color: '#164057'}}
            // hideNavBar={true}
          />

          <Scene
            key="Resources"
            component={Resources}
            title={'Resources'}
            titleStyle={{fontSize: 16, color: '#164057'}}
          />
        </Stack>
      </Router>
    );
  }
}
export default Navigator;
