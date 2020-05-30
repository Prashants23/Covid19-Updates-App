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
        <Text>
          News APi:
          'http://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey=16b19fa967824908bcb304a5a11ddeb7'
        </Text>
        <Text>Instruction: 'WHO' official Website'</Text>

        <Text style={{marginTop: 20}}>
          The data displayed in this application is completely based on above
          provided Api's, we do not have any right or control over updation of
          the data in any way.
        </Text>
      </View>
    );
  }
}

export default Resources;
