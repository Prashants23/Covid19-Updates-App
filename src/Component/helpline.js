import React from 'react';
import {connect} from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Dimensions,
} from 'react-native';
// import * as actionCreators from '../actions/index';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  Container: {
    alignItems: 'center',
    height: Height,
    width: Width,
    // justifyContent: 'center',
    // backgroundColor: '#c7e1f0',
    // backgroundColor: 'red',
  },
  InputBoxStyle: {
    width: 300,
    // borderColor: 'black',
    paddingLeft: 20,
    borderRadius: 15,
    marginVertical: 25,
    borderWidth: 0,
    // backgroundColor: '#d5e2f5',
    elevation: 3,
  },
  pagetitle: {
    fontSize: 25,
    fontWeight: 'bold',
    letterSpacing: 1,
    color: 'red',
    marginTop: 28,
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
    marginLeft: 10,
    // paddingRight: 10,
    height: 110,
    paddingTop: 10,
    borderRadius: 10,
    borderWidth: 1,
    elevation: 4,
    alignItems: 'center',
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
});
class HelplineNumbers extends React.Component {
  constructor() {
    super();
    this.state = {
      NumbersData: [],
      inputedState: '',
    };
  }
  componentDidMount() {
    this.props.HelpLineNo();
    this.setNumbersData();
  }
  setNumbersData = () => {
    this.setState({NumbersData: this.props.NumbersData});
  };
  callApi = () => {
    this.props.HelpLineNo();
    this.setNumbersData();
  };
  renderListItem(data) {
    return (
      <View style={styles.statesContainer}>
        <Text style={{fontSize: 25, color: '#256978'}}>{data.state_or_UT}</Text>
        <Text style={{fontSize: 20, color: '#7a1729', marginTop: 10}}>
          Helpline Number: {data.helpline_number}
        </Text>
      </View>
    );
  }
  onInputChange = event => {
    this.setState({inputedState: event, ifSubmitButton: false});
  };

  render() {
    console.log(
      'helpline props _______________----------------------',
      this.props,
    );
    const filteredStates = this.props.NumbersData.filter(State => {
      return State.state_or_UT
        .toLowerCase()
        .includes(this.state.inputedState.toLowerCase());
    });
    // const helplineData = this.props.NumbersData;
    return (
      <View style={styles.Container}>
        <Text style={styles.pagetitle}>Helpline Numbers</Text>
        <TextInput
          style={styles.InputBoxStyle}
          placeholder="Enter State"
          onChangeText={event => this.onInputChange(event)}
        />
        <View
          style={{alignItems: 'center', width: Width, height: Height - 190}}>
          {this.props.NumbersData.length === 0 ? (
            <Text onPress={this.callApi}>Refresh</Text>
          ) : (
            // <View style={{marginTop: 20,alignItems:'center',width:"100%"}}>
            <FlatList
              keyExtractor={item => item.state_or_UT}
              data={filteredStates}
              // contentContainerStyle={{alignItems:'center',width:"90%",}}
              numColumns={1}
              showsVerticalScrollIndicator={false}
              renderItem={({item}) => this.renderListItem(item)}
            />
            // </View>
          )}
        </View>
      </View>
    );
  }
}

export default HelplineNumbers;
