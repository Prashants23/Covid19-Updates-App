import React from 'react';
import {View, Text, Image, StyleSheet,Dimensions} from 'react-native';
import Buttons from './atoms/buttons';
import {Actions} from 'react-native-router-flux';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
const styles = StyleSheet.create({
  butonStyle: {
    // backgroundColor: 'blue',
    paddingVertical: 10,
    // paddingHorizontal:20,
    width: 125,
    // height: 45,
    borderRadius: 12,
    elevation: 3,
    justifyContent: 'center',
    marginHorizontal: 6,
    borderWidth: 1,
    borderColor: '#3e6d80',
    backgroundColor: 'white',
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
            onsubmit={() => Actions.push('News')}
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
          <Text style={{textAlign: 'center', width: 200}}>
            All the data on this platform has been fetched from these
            <Text
              onPress={() => Actions.push('Resources')}
              style={{color: 'blue', fontSize: 18}}>
              {' '}
              Resources{' '}
            </Text>
          </Text>
        </View>






        {/* <View style={{backgroundColor:'#326d8c',height:"40%",width:Width}}>
          <View style={{backgroundColor:'white',height:'100%',width:"100%",borderBottomRightRadius:80,flexDirection:'row'}}>
          <Image
          style={{height: 200, width: 150, marginTop: 20}}
          source={require('../assets/Covid.png')}
        />
         <Image
          style={{height: 100, width: 250, marginTop: 50}}
          source={require('../assets/Logo5.png')}
        />
        </View>
        </View>
        <View style={{backgroundColor:'white',height:"60%",width:Width}}>
          <View style={{backgroundColor:'#326d8c',height:'100%',width:"100%",borderTopLeftRadius:80}}>
          <Image
          style={{height: 200, width: 200, marginTop: 50}}
          source={require('../assets/Logo4.png')}
        />
        </View>
        </View> */}
      </View>
    );
  }
}

export default FrontPage;
