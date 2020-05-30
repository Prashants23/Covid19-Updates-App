import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

class DataCards extends React.Component {
  render() {
    const {
      dataContainer,
      CountryDataNo,
      ImageSource,
      cardTitle,
      cardTitleData,
      textStyle,
    } = this.props;
    return (
      <View style={[dataContainer]}>
        <Image
          style={[textStyle, {width: 40, height: 40}]}
          source={ImageSource}
        />
        <Text style={[textStyle, {marginTop: 3}]}>{cardTitle}</Text>
        <Text style={[CountryDataNo]}>{cardTitleData}</Text>
      </View>
    );
  }
}

export default DataCards;
