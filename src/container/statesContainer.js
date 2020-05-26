import React from 'react';
import {connect} from 'react-redux';
import {View, Text, StyleSheet} from 'react-native';
import * as actionCreators from '../actions/index.js';
import States from '../Component/box';

const styles = StyleSheet.create({
  mainContainer: {
    // justifyContent:'center',
    alignItems: 'center',
  },
});

class StatesCon extends React.Component {
  render() {
    // console.log('in Box-container', this.props.StateName);
    return (
      <View style={[styles.mainContainer]}>
        <States
          handleClick={this.props.loadColor}
          StateName={this.props.StateName}
          selectedStateName={this.props.selectedStateName}
          DistrictFuncClick={this.props.DistrictData}
          DistrictTotalData={this.props.DistrictTotalData}
          DistrictNames={this.props.DistrictNames}
          CallClearData={this.props.CallClearData}
          backButton={this.props.backButton}
        />
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
)(StatesCon);
