import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Buttons from './atoms/buttons';
const styles = StyleSheet.create({
  butonStyle: {
    // backgroundColor: 'blue',
    paddingVertical: 10,
    // paddingHorizontal:20,
    width: 200,
    height: 55,
    borderRadius: 12,
    elevation: 4,
    justifyContent: 'center',
    marginHorizontal: 6,
    borderWidth: 2,
    borderColor:'#3e6d80'
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
          style={{height: 230, width: 230, marginTop: 100}}
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
        <View style={{flexDirection: 'row', marginTop: 100}}>
          <Buttons
            title={"India's Stats"}
            ButtonStyle={styles.butonStyle}
            textStyle={styles.textStyle}
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
          />
        </View>
        <View style={{marginTop:60}}><Text style={{textAlign:'center'}}>All the data on this plateform has been fetched from these Reasources</Text></View>
      </View>
    );
  }
}

export default FrontPage;
