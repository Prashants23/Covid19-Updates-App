import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import Buttons from '../Component/atoms/buttons';
import DataCards from './atoms/DataCards';
import _ from 'lodash';
import {ScrollView} from 'react-native-gesture-handler';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  Container: {
    alignItems: 'center',
    height: Height,
    backgroundColor: '#f0f0f0',
    width: Width,
    justifyContent: 'center',
    // backgroundColor: '#c7e1f0',
    // backgroundColor: '#c44b1b',
  },
  statesContainer: {
    width: '95%',
    // marginLeft: 10,
    // backgroundColor: '#12354d',
    // backgroundColor: '#091933',
    // backgroundColor: '#63cdf7',
    backgroundColor: 'white',
    marginVertical: 5,
    paddingLeft: 12,
    paddingRight: 10,
    height: 130,
    paddingTop: 10,
    borderRadius: 10,
    borderWidth: 1,
    elevation: 6,
  },
  dataContainer: {
    marginVertical: 15,
  },
  dataStateNameTextStyles: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#3f8596',
    paddingTop: 2,
  },
  casesTextStyle: {
    fontSize: 17,
    letterSpacing: 0.5,
    color: 'red',
    marginVertical: 1,
    fontWeight: 'bold',
  },

  dataContaner: {
    width: 90,
    height: 100,
    backgroundColor: 'white',
    elevation: 3,
    marginRight: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  CountryDataNo: {
    marginTop: 6,
  },

  DistrictDataContainer: {
    // backgroundColor: '#243e4a',
    backgroundColor: 'white',
    width: Width - 10,
    height: Height,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    // backgroundColor: '#c7e1f0',
    elevation: 6,
    marginTop: 20,
  },
  districtData: {
    width: 75,
    // height: 30,
    fontSize: 16,
    textAlign: 'center',
    letterSpacing: 1,
    // backgroundColor:'red',
    // marginHorizontal:2
    marginLeft: 1,
    // flex:0.20,
  },
  statesHeaderTextContainer: {
    flexDirection: 'row',
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    height: 40,
    // paddingLeft: 10,
    alignItems: 'center',
    // backgroundColor: '#c44b1b',
  },
  StatesHeaderText: {
    width: '22%',
    // alignItems: 'center',
    textAlign: 'center',
    fontSize: 16,
    color: '#5c5454',
  },
  situationTextContainer: {
    backgroundColor: '#ff2930',
    height: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  situationText: {
    fontSize: 16,
    color: 'white',
    marginLeft: 10,
    width: '60%',
  },
});
class States extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      StateNames: [],
      ifSubmitButton: true,
      inputedState: '',
      districtData: [],
    };
    this.props.DistrictFuncClick(this.props.selectedStateName);
  }

  componentDidMount() {
    this.props.handleClick();
    this.setState({StateNames: this.props.StateName});
    // this.props.DistrictFuncClick(this.props.selectedStateName);
    this.setStateNames();
  }
  setStateNames = () => {
    this.setState({
      StateNames: this.props.StateName,
      districtData: this.props.DistrictTotalData,
    });
    // console.log("hbjghuh iiiiiiiii")
  };

  onInputChange = event => {
    this.setState({inputedState: event, ifSubmitButton: false});
  };
  clearData = () => {
    this.props.backButton();
    this.props.CallClearData();
  };
  renderListStateData(item) {
    // const randomColor = () =>
    //   ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(
    //     0,
    //     7,
    //   );

    return (
      <View style={{height: 380}}>
        <View
          style={{
            backgroundColor: '#12394d',
            width: Width,
            flexDirection: 'row',
            // justifyContent:'center'
          }}>
          <TouchableOpacity onPress={this.props.backButton}>
            <View
              style={{
                marginVertical: 22,
                width: 30,
                marginLeft: 5,
                alignItems: 'flex-start',
                justifyContent: 'center',
              }}>
              <Image
                style={{height: 15, width: 15}}
                source={require('../assets/arrowback.png')}
              />
              {/* <Text onPress={() => Actions.pop('News')}>test</Text> */}
            </View>
          </TouchableOpacity>
          <View style={{width: Width - 40}}>
            <Text
              style={{
                fontSize: 20,
                textAlign: 'center',
                color: 'white',
                marginVertical: 20,
              }}>
              Covid19 Data of {item.state}
            </Text>
          </View>
        </View>
        <View style={styles.situationTextContainer}>
          <Text style={styles.situationText}>Situation in {item.state}</Text>
          <View
            style={{
              width: '50%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{width: 20, height: 18, opacity: 0.35}}
              source={require('../assets/india2.png')}
            />
          </View>
        </View>
        <View style={{height: 300}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 15,
            }}>
            <DataCards
              dataContainer={styles.dataContaner}
              CountryDataNo={styles.CountryDataNo}
              ImageSource={require('../assets/scan.png')}
              cardTitle="Total Cases"
              cardTitleData={item.confirmed}
              textColor={'#3d748f'}
            />
            <DataCards
              dataContainer={styles.dataContaner}
              CountryDataNo={styles.CountryDataNo}
              ImageSource={require('../assets/heartbeat.png')}
              cardTitle="Death"
              cardTitleData={item.deaths}
            />
            <DataCards
              dataContainer={styles.dataContaner}
              CountryDataNo={styles.CountryDataNo}
              ImageSource={require('../assets/patient.png')}
              cardTitle="Recovered"
              cardTitleData={item.recovered}
              textColor={'green'}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 15,
            }}>
            <DataCards
              dataContainer={styles.dataContaner}
              CountryDataNo={styles.CountryDataNo}
              ImageSource={require('../assets/covidImage.png')}
              cardTitle="Active Cases"
              cardTitleData={item.active}
              textColor={'red'}
            />
            <DataCards
              dataContainer={styles.dataContaner}
              CountryDataNo={styles.CountryDataNo}
              ImageSource={require('../assets/Covid.png')}
              cardTitle="Active Rate"
              cardTitleData={item.active_rate}
            />
            <DataCards
              dataContainer={styles.dataContaner}
              CountryDataNo={styles.CountryDataNo}
              ImageSource={require('../assets/patient.png')}
              cardTitle="Recovery Rate"
              cardTitleData={item.recovered_rate}
              textColor={'green'}
            />
          </View>
        </View>
        {/* <Buttons
          title={'Test'}
          onsubmit={() => this.props.DistrictFuncClick(item.state)}
        /> */}
      </View>
    );
  }
  renderDistrictName(item) {
    return (
      <View
        style={{
          borderBottomWidth: 1,
          color: 'gray',
          height: 50,

          // width:150,
          // alignItems: 'center',
          justifyContent: 'center',
          // marginLeft: 10,
          // backgroundColor:'red'
        }}>
        <Text
          style={{
            fontSize: 17,
            letterSpacing: 0.5,
            // textAlign:'center'
            width: 100,
            marginLeft: 10,
          }}>
          {item}
        </Text>
      </View>
    );
  }
  renderDistrictData(item) {
    return (
      <View
        style={{
          flexDirection: 'row',
          borderBottomWidth: 1,
          marginRight: 20,
          justifyContent: 'center',
          alignItems: 'center',
          width: 250,
          height: 50,
          marginRight: 10,
        }}>
        <Text style={[styles.districtData, {color: 'red'}]}>{item.active}</Text>
        <Text style={[styles.districtData, {color: 'black'}]}>
          {item.deceased}
        </Text>
        <Text style={[styles.districtData, {color: 'green'}]}>
          {item.recovered}
        </Text>
      </View>
    );
  }
  render() {
    // console.log(
    //   'this is state name from box component +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++',
    //   this.props.DistrictTotalData,
    // );
    const Values = Object.values(this.props.DistrictTotalData);
    // console.log(Values);
    const filteredStates = this.props.StateName.filter(State => {
      return State.state
        .toLowerCase()
        .includes(this.props.selectedStateName.toLowerCase());
    });
    return (
      <View style={styles.Container}>
        {/* <Buttons title="back" onsubmit={this.clearData} /> */}
        <ScrollView nestedScrollEnabled={true}>
          <View style={{height: 340}}>
            {this.props.StateName.length === 0 ? (
              <Text>loading....</Text>
            ) : (
              <View>
                <FlatList
                  keyExtractor={item => item.id}
                  data={filteredStates}
                  numColumns={1}
                  showsVerticalScrollIndicator={false}
                  renderItem={({item}) => this.renderListStateData(item)}
                />
              </View>
            )}
          </View>
          <View
            style={{
              backgroundColor: '#f0f0f0',
              height: Height - 0,
              width: Width,
              alignItems: 'center',
            }}>
            <View style={styles.DistrictDataContainer}>
              <Text
                style={{
                  marginTop: 10,
                  color: 'blue',
                  fontSize: 20,
                  textAlign: 'center',
                }}>
                District Data
              </Text>
              <View style={{height: Height - 100}}>
                <View style={styles.statesHeaderTextContainer}>
                  <Text style={[styles.StatesHeaderText, {width: 110}]}>
                    State/UT
                  </Text>
                  <Text style={styles.StatesHeaderText}>Total Cases</Text>
                  <Text style={styles.StatesHeaderText}>Death</Text>
                  <Text style={styles.StatesHeaderText}>Recovered</Text>
                </View>
                <ScrollView nestedScrollEnabled={true}>
                  <View style={{flexDirection: 'row'}}>
                    <FlatList
                      data={this.props.DistrictNames}
                      keyExtractor={item => item.id}
                      showsVerticalScrollIndicator={false}
                      renderItem={({item}) => this.renderDistrictName(item)}
                      contentContainerStyle={{
                        padding: 0,
                        margin: 0,
                        width: 120,
                      }}
                    />
                    <FlatList
                      data={Values}
                      keyExtractor={item => item.id}
                      showsVerticalScrollIndicator={false}
                      renderItem={({item}) => this.renderDistrictData(item)}
                      contentContainerStyle={{padding: 0, margin: 0}}
                    />
                  </View>
                </ScrollView>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default States;
