import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Modal,
} from 'react-native';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
import StatesCon from '../container/statesContainer';
import {Actions} from 'react-native-router-flux';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#f0f0f0',
    // alignItems:'center',
    // backgroundColor:'#181b2e',
    height: Height,
  },
  header: {
    backgroundColor: '#12394d',
    height: 75,
    // backgroundColor:'#1f2638',
    // borderBottomLeftRadius: Width,
    // borderBottomRightRadius: Width,
    width: Width,
    flexDirection: 'row',
  },
  headerImage: {
    height: 55,
    width: 55,
    // marginLeft: Width - 280,
    marginRight: 40,
    // /marginTop: 5,
    // alignItems:'center'
    // justifyContent:'center'
  },
  headerCoronaText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    // marginLeft: 30,
    // fontStyle:'none',
    lineHeight: 32,
  },
  situationTextContainer: {
    backgroundColor: '#ff2930',
    height: 25,
    flexDirection: 'row',
    alignItems: 'center',
    // marginTop:1
  },
  situationText: {
    fontSize: 16,
    color: 'white',
    marginLeft: 10,
  },
  lastUpdatedContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  lastUpdatedText: {
    fontSize: 12,
    color: 'gray',
    letterSpacing: 0.5,
  },

  dataContaner: {
    width: 100,
    paddingVertical: 10,
    backgroundColor: 'white',
    elevation: 3,
    marginRight: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statesDataContainer: {
    marginTop: 20,
    height: Height-340,
    width: Width - 30,
    backgroundColor: 'white',
    elevation: 3,
    borderRadius: 8,
  },
  statesHeaderTextContainer: {
    flexDirection: 'row',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    // height: 60,
    paddingVertical: 10,
    // paddingLeft: 10,
    alignItems: 'center',
  },
  StatesHeaderText: {
    textAlign: 'center',
    fontSize: 15,
    color: '#5c5454',
    // width: 75,
    fontWeight: 'bold',
    // backgroundColor:'red'
  },
  statesContainer: {
    flexDirection: 'row',
    borderBottomColor: '#cfcccc',
    borderBottomWidth: 1,
    // width: Width - 30,
    // height: 60,
    paddingVertical: 10,
    // justifyContent:'center'
    alignItems: 'center',
    marginLeft: 10,
  },
  dataStateNameTextStyles: {
    width: '32%',
    textAlign: 'center',
    fontSize: 16,
    letterSpacing: 0.5,
  },
  casesTextStyle: {
    width: '24.5%',
    textAlign: 'center',
    letterSpacing: 0.5,
    // backgroundColor:'red',
    // marginLeft:1
  },
  CountryDataNo: {
    marginTop: 6,
  },
});

class IndiaStats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ifStateModal: false,
      statename: '',
    };
  }
  componentDidMount() {
    this.props.handleClick();
    this.props.countryDataClick();
  }
  openStatesModal = name => {
    this.setState({ifStateModal: true, statename: name});
  };
  CloseStateModal = () => {
    this.setState({ifStateModal: false});
    // this.props.DistrictTotalData = [];
    this.props.CallClearData();
  };

  renderListItem(item) {
    return (
      <TouchableOpacity
        onPress={() => this.openStatesModal(item.state)}
        style={{width: Width - 10, alignItems: 'center', flexDirection: 'row'}}>
        <View style={[styles.statesContainer]}>
          <Text style={[styles.dataStateNameTextStyles]}>{item.state}</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={[styles.casesTextStyle]}>{item.confirmed}</Text>
            <Text style={[styles.casesTextStyle, {color: '#f00707'}]}>
              {item.deaths}
            </Text>
            <Text style={[styles.casesTextStyle, {color: 'green'}]}>
              {item.recovered}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        {this.props.StateName.length > 0 ? (
          <View>
            <View style={styles.header}>
              <TouchableOpacity onPress={() => Actions.pop('BoxCon')}>
                <View style={{marginLeft: 5, marginVertical: 15}}>
                  <Image
                    style={{height: 15, width: 15}}
                    source={require('../assets/arrowback.png')}
                  />
                  {/* <Text onPress={() => Actions.pop('News')}>test</Text> */}
                </View>
              </TouchableOpacity>
              <View style={{marginTop: 10, width: '58%', marginLeft: 10}}>
                <Text style={styles.headerCoronaText}>CORONAVIRUS</Text>
                <Text style={{fontSize: 25, color: 'white', lineHeight: 30}}>
                  PEDIA
                </Text>
              </View>

              <View
                style={{
                  width: '40%',
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                }}>
                <View>
                  <Image
                    style={styles.headerImage}
                    source={require('../assets/covidImage.png')}
                  />
                </View>
              </View>
            </View>
            <View style={styles.situationTextContainer}>
              <Text style={styles.situationText}>Situation in India</Text>
              <View
                style={{
                  width: '50%',
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                }}>
                <Image
                  style={{width: 20, height: 18, opacity: 0.35}}
                  source={require('../assets/india2.png')}
                />
              </View>
            </View>
            <View style={styles.lastUpdatedContainer}>
              <Text style={styles.lastUpdatedText}>
                Last Updated: {this.props.countryData.last_updated}{' '}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 15,
              }}>
              <View style={styles.dataContaner}>
                <Image
                  style={{width: 40, height: 40}}
                  source={require('../assets/scan.png')}
                />
                <Text style={{marginTop: 3, color: 'red'}}>Total Cases</Text>
                <Text style={[styles.CountryDataNo, {color: 'red'}]}>
                  {this.props.countryData.confirmed_cases}
                </Text>
              </View>
              <View style={styles.dataContaner}>
                <Image
                  style={{width: 40, height: 40}}
                  source={require('../assets/heartbeat.png')}
                />
                <Text style={{marginTop: 3}}>Death</Text>
                <Text style={styles.CountryDataNo}>
                  {this.props.countryData.death_cases}
                </Text>
              </View>
              <View style={[styles.dataContaner, {marginRight: 0}]}>
                <Image
                  style={{width: 40, height: 40}}
                  source={require('../assets/patient.png')}
                />
                <Text style={{marginTop: 3, color: 'green'}}>Recovered</Text>
                <Text style={[styles.CountryDataNo, {color: 'green'}]}>
                  {this.props.countryData.recovered_cases}
                </Text>
              </View>
            </View>
            <Text style={{marginTop: 20, textAlign: 'center'}}>
              Click on the states to view state details
            </Text>
            <View
              style={{
                width: Width,
                marginTop: 5,
                alignItems: 'center',
                height: Height - 90,
              }}>
              <View style={styles.statesDataContainer}>
                <View style={styles.statesHeaderTextContainer}>
                  <Text style={[styles.StatesHeaderText, {width: '32%'}]}>
                    State/UT
                  </Text>
                  <Text style={[styles.StatesHeaderText, {width: '22.5%'}]}>
                    Total Cases
                  </Text>
                  <Text style={[styles.StatesHeaderText, {width: '22.5%'}]}>
                    Death
                  </Text>
                  <Text style={[styles.StatesHeaderText, {width: '22.5%'}]}>
                    Recovered
                  </Text>
                </View>
                <View style={{height: Height - 420}}>
                  <FlatList
                    keyExtractor={item => item.id}
                    data={this.props.StateName}
                    numColumns={1}
                    persistentScrollbar={true}
                    showsVerticalScrollIndicator={true}
                    renderItem={({item}) => this.renderListItem(item)}
                  />
                </View>
              </View>
            </View>
          </View>
        ) : (
          <View
            style={{width: Width, height: Height, justifyContent: 'center'}}>
            <Text style={{textAlign: 'center', fontSize: 16}}>Loading....</Text>
          </View>
        )}
        <Modal
          visible={this.state.ifStateModal}
          onRequestClose={this.CloseStateModal}
          animationType="fade">
          <StatesCon
            selectedStateName={this.state.statename}
            backButton={this.CloseStateModal}
          />
        </Modal>
      </View>
    );
  }
}

export default IndiaStats;
