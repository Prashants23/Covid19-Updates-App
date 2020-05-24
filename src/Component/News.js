import React from 'react';
import {View, Text} from 'react-native';

class Resources extends React.Component {
  render() {
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        }}>
             <Text style={{fontSize: 30, color: 'green'}}>NEWS</Text>
        <Text style={{fontSize: 30, color: 'red'}}>COMING SOON</Text>
      </View>
    );
  }
}

export default Resources;
