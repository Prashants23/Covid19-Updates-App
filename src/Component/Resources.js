import React from 'react';
import {View, Text} from 'react-native';

class Resources extends React.Component {
  render() {
    return (
      <View>
        <Text>Resources</Text>
        <Text>Postman Api's</Text>
        <Text>
          Helpline Api:
          https://covid-19india-api.herokuapp.com/v2.0/helpline_numbers
        </Text>
        <Text>
          States Data Api:
          https://covid-19india-api.herokuapp.com/v2.0/state_data
        </Text>
        <Text>
          Country data Api:
          https://covid-19india-api.herokuapp.com/v2.0/helpline_numbers
        </Text>
        <Text>
          District Data APi:
          https://api.covid19india.org/state_district_wise.json
        </Text>
      </View>
    );
  }
}

export default Resources;
