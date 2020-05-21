import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Buttons from './atoms/buttons';
import {Actions} from 'react-native-router-flux';

const styles = StyleSheet.create({
  butonStyle: {
    // backgroundColor: 'blue',
    paddingVertical: 10,
    // paddingHorizontal:20,
    width: 150,
    height: 55,
    borderRadius: 12,
    elevation: 4,
    justifyContent: 'center',
    marginHorizontal: 6,
    borderWidth: 2,
    borderColor: '#3e6d80',
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 20,
    color: 'black',
  },
});
class FrontPage extends React.Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Image
          style={{height: 200, width: 200, marginTop: 50}}
          source={require('../assets/covidImage.png')}
        />
        <View
          style={{
            flexDirection: 'row',
            marginTop: 15,
            justifyContent: 'center',
          }}>
          <Text style={{color: 'red', fontSize: 35}}>COVID</Text>
          <Text style={{color: 'green', fontSize: 35}}>PEDIA</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            // marginTop: 15,
            justifyContent: 'center',
          }}>
          <Text style={{textAlign: 'center', fontSize: 18, color: 'red'}}>
            Stay Alert,{' '}
          </Text>
          <Text style={{textAlign: 'center', fontSize: 18, color: 'green'}}>
            Stay Safe
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 70}}>
          <Buttons
            title={"India's Stats"}
            ButtonStyle={styles.butonStyle}
            textStyle={styles.textStyle}
            onsubmit={() => Actions.push('BoxCon')}
          />
          <Buttons
            title={'News'}
            ButtonStyle={styles.butonStyle}
            textStyle={styles.textStyle}
          />
        </View>
        <View style={{marginTop: 10}}>
          <Buttons
            title={'Covid Helpline'}
            ButtonStyle={styles.butonStyle}
            textStyle={styles.textStyle}
            onsubmit={() => Actions.push('helplineNo')}
          />
        </View>
        <View style={{marginTop: 60}}>
          <Text style={{textAlign: 'center'}}>
            All the data on this plateform has been fetched from these
            Resources
          </Text>
        </View>
      </View>
    );
  }
}

export default FrontPage;
