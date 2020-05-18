import React from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';
import * as actionCreators from '../actions/index.js';
import States from '../Component/box';
import Buttons from '../Component/atoms/buttons.js';
class BoxCon extends React.Component {
  render() {
    console.log('In box container Total Cases', this.props.TotalCases.active_cases);
    // console.log('in Box-container', this.props.StateName);
    return (
      <View>
        <Text>{this.props.TotalCases.active_cases}</Text>

        <Buttons title="test" onsubmit={() => this.props.totalCasesIndia()} />
      </View>
      // <States
      //   handleClick={this.props.loadColor}
      //   StateName={this.props.StateName}
      // />
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
