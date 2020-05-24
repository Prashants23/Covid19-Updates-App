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
      textColor
    } = this.props;
    return (
      <View style={[dataContainer]}>
        <Image style={{width: 40, height: 40}} source={ImageSource} />
        <Text style={{marginTop: 3, color: textColor}}>{cardTitle}</Text>
        <Text style={[CountryDataNo, {color: textColor}]}>{cardTitleData}</Text>
      </View>
    );
  }
}

export default DataCards;
