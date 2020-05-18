import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import Buttons from '../atoms/buttons';
import {connect} from 'react-redux';
import * as actionCreators from '../../Redux/Action/index';

const styles = StyleSheet.create({
  Container: {
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
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
    borderWidth: 1,
    borderColor: 'black',
    paddingLeft: 20,
    borderRadius: 8,
    marginVertical: 25,
  },
  pagetitle: {
    fontSize: 25,
    fontWeight: 'bold',
    letterSpacing: 1,
    color: 'red',
  },
});
class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {},
    };
  }

//   componentDidMount() {
//     this.setState({data: this.props.covidData()});
//   }
//   onSubmit = () => {
//     console.log(this.state.data);
//   };
  render() {
    return (
      <View style={styles.Container}>
        <View>
          <Text style={styles.pagetitle}>COVID 19 Updates</Text>
        </View>
        <TextInput
          style={styles.InputBoxStyle}
          placeholder="EnterCountry"
          // onChangeText={event => this.onInputChange(event)}
        />
        <Buttons
          title={'Search'}
          ButtonStyle={[styles.buttonStyle]}
          onsubmit={this.onSubmit}
          textStyle={styles.ButtonTExtStyle}
          // enable={this.state.ifSubmitButton}
        />
        {/* {this.renderCountrylDetailsModal()} */}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  actionCreators,
)(Home);
