import React from 'react';
import {connect} from 'react-redux';
import {View, Text, StyleSheet} from 'react-native';
import * as actionCreators from '../actions/index.js';
import States from '../Component/box';
import Buttons from '../Component/atoms/buttons.js';
import {PieChart} from 'react-native-svg-charts';
import {Tooltip} from 'react-native-elements';
import Home from '../Component/Home.js';
import FrontPage from '../Component/FrontPage.js';

const styles = StyleSheet.create({
  mainContainer: {
    // justifyContent:'center',
    alignItems: 'center',
  },
});

class BoxCon extends React.Component {
  render() {
    // console.log('in Box-container', this.props.StateName);
    return (
      <View style={[styles.mainContainer]}>
        <FrontPage />
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
)(BoxCon);
