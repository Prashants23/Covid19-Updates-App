import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import {Width, Height} from '../utils/stylesheetawesomeproject';
import {Actions} from 'react-native-router-flux';
import NewsWebView from './NewsWebView';

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#12394d',
    height: 40,
    // borderBottomLeftRadius: Width,
    // borderBottomRightRadius: Width,
    width: Width,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerImage: {
    height: 60,
    width: 60,
    // marginLeft: Width - 280,
    marginRight: 40,
    // /marginTop: 5,
    // alignItems:'center'
    // justifyContent:'center'
  },
  instructionImagesContainer: {
    borderWidth: 2,
    borderColor: 'black',
    width: Width - 36,
    height: Width - 36,
    elevation: 8,
    borderRadius: 8,
    marginVertical: 10,
  },
  instructionImages: {
    width: Width - 40,
    height: Width - 40,
    borderRadius: 6,
  },
  HeadertextStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    width: Width - 40,
  },
});
class Instructions extends React.Component {
  constructor() {
    super();
    this.state = {
      ifMoreDetails: false,
    };
  }

  openModal = () => {
    this.setState({ifMoreDetails: !this.state.ifMoreDetails});
  };
  render() {
    return (
      <View>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => Actions.pop('News')}>
            <View style={{marginLeft: 0}}>
              <Image
                style={{height: 15, width: 15}}
                source={require('../assets/arrowback.png')}
              />
              {/* <Text onPress={() => Actions.pop('News')}>test</Text> */}
            </View>
          </TouchableOpacity>
          <View style={{width: Width - 40, alignItems: 'center'}}>
            <Text style={{color: 'white', fontSize: 20}}>Instructions</Text>
          </View>
        </View>

        <View
          style={{
            alignItems: 'center',
          }}>
          <View
            style={{
              height: Height - 75,
              width: Width - 20,
              alignItems: 'center',
            }}>
            <ScrollView>
              <View style={{marginVertical: 10, alignItems: 'center'}}>
                <Text style={styles.HeadertextStyle}>
                  Protecting yourself and others from the spread COVID-19
                </Text>
                <Text style={{width: Width - 40}}>
                  Listen for instructions from your local government about
                  staying at home.
                </Text>
                <Text style={{width: Width - 40}}>
                  You can reduce your chances of being infected or spreading
                  COVID-19 by taking some simple precautions:
                </Text>
              </View>
              <View style={{alignItems: 'center', width: Width - 20}}>
                <View style={styles.instructionImagesContainer}>
                  <Image
                    source={require('../assets/Instruction/Instuction1.png')}
                    style={styles.instructionImages}
                  />
                </View>
                <View style={styles.instructionImagesContainer}>
                  <Image
                    source={require('../assets/Instruction/Instuction2.png')}
                    style={styles.instructionImages}
                  />
                </View>
                <View style={styles.instructionImagesContainer}>
                  <Image
                    source={require('../assets/Instruction/Instruction3.png')}
                    style={styles.instructionImages}
                  />
                </View>
                <View style={styles.instructionImagesContainer}>
                  <Image
                    source={require('../assets/Instruction/Instruction4.png')}
                    style={styles.instructionImages}
                  />
                </View>
              </View>
              <View
                style={{
                  width: Width - 40,
                  alignItems: 'center',
                  height: 40,
                  justifyContent: 'center',
                }}>
                <Text
                  onPress={this.openModal}
                  style={{fontSize: 18, color: '#243b73'}}>
                  More Instructions
                </Text>
                <Text
                  style={{fontSize: 14, color: 'gray'}}>
                  Source: World Health Organization
                </Text>
              </View>
            </ScrollView>
          </View>
        </View>
        <Modal
          animationType="fade"
          visible={this.state.ifMoreDetails}
          onRequestClose={this.openModal}>
          <NewsWebView
            url={
              'https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public'
            }
            closeModal={this.openModal}
            title="Advice for public"
          />
        </Modal>
      </View>
    );
  }
}

export default Instructions;
