import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Buttons from '../Component/atoms/buttons';

const styles = StyleSheet.create({
  Container: {
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    backgroundColor: '#c7e1f0',
  },
  buttonStyle: {
    width: 200,
    height: 40,
    // textAlign: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    justifyContent: 'center',
    borderRadius: 8,
  },
  ButtonTExtStyle: {
    color: 'white',
    letterSpacing: 0.5,
    fontSize: 16,
  },
  InputBoxStyle: {
    width: 300,
    // borderColor: 'black',
    paddingLeft: 20,
    borderRadius: 15,
    marginVertical: 25,
    borderWidth: 0,
    backgroundColor: '#d5e2f5',
    elevation: 8,
  },
  pagetitle: {
    fontSize: 25,
    fontWeight: 'bold',
    letterSpacing: 1,
    color: 'red',
    marginTop: 28,
  },
  statesContainer: {
    width: '47%',
    marginLeft: 10,
    // backgroundColor: '#12354d',
    // backgroundColor: '#091933',
    backgroundColor:"#63cdf7",
    marginVertical: 5,
    paddingLeft: 12,
    paddingRight: 10,
    height: 160,
    paddingTop: 10,
    borderRadius: 10,
    elevation: 6,
  },
  dataContainer: {
    marginVertical: 5,
  },
  dataStateNameTextStyles: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#3f8596',
    paddingTop:2
  },
  casesTextStyle: {
    fontSize: 17,
    letterSpacing: 0.5,
    color: 'red',
    marginVertical: 1,
    fontWeight:'bold'
  },
});
class States extends React.Component {
  constructor() {
    super();
    this.state = {
      StateNames: [],
      ifSubmitButton: true,
      inputedState: '',
    };
  }

  componentDidMount() {
    this.props.handleClick();
    this.setStateNames();
  }
  setStateNames = () => {
    this.setState({StateNames: this.props.StateName});
    // console.log("hbjghuh iiiiiiiii")
  };

  //   onSubmit = () => {
  //     console.log(this.state.data);
  //   };
  onInputChange = event => {
    this.setState({inputedState: event, ifSubmitButton: false});
  };
  renderListItem(item) {
    // const randomColor = () =>
    //   ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(
    //     0,
    //     7,
    //   );

    return (
      <TouchableOpacity
        style={[styles.statesContainer]}
        onPress={this.props.testClick}>
        <Text style={[styles.dataStateNameTextStyles]}>{item.state}</Text>
        <View style={[styles.dataContainer]}>
          <Text style={[styles.casesTextStyle, {color: 'green',fontSize:20}]}>
            Recovered : {item.recovered}
          </Text>
          <Text style={[styles.casesTextStyle, {color: '#f00707'}]}>
            Active Cases: {item.active}
          </Text>
          <Text style={[styles.casesTextStyle]}>
            Confirmed Cases: {item.confirmed}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
  render() {
    console.log('this is state name from box component', this.props.StateName);
    const filteredStates = this.state.StateNames.filter(State => {
      return State.state
        .toLowerCase()
        .includes(this.state.inputedState.toLowerCase());
    });
    return (
      <View style={styles.Container}>
        <Text style={styles.pagetitle}>COVID 19 Updates</Text>
        <View />
        <TextInput
          style={styles.InputBoxStyle}
          placeholder="Enter State"
          onChangeText={event => this.onInputChange(event)}
        />
        {/* <Buttons
          title={'Search'}
          ButtonStyle={[styles.buttonStyle]}
          onsubmit={() => this.props.handleClick()}
          textStyle={styles.ButtonTExtStyle}
          // enable={this.state.ifSubmitButton}
        /> */}
        <FlatList
          keyExtractor={item => item.id}
          data={filteredStates}
          // style={{height:300}}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => this.renderListItem(item)}
        />
      </View>
    );
  }
}

export default States;
