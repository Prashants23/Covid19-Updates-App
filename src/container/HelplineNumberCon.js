import React from 'react';
import {connect} from 'react-redux';
import {View, Text, StyleSheet} from 'react-native';
import * as actionCreators from '../actions/index.js';
import HelplineNumbers from '../Component/helpline.js';

const styles = StyleSheet.create({
  mainContainer: {
    // justifyContent:'center',
    alignItems: 'center',
  },
});

class HelplineNumbersCon extends React.Component {
  // componentDidMount() {
  //   this.props.HelpLineNo();
  // }
  render() {
    // console.log('in Box-container', this.props.NumbersData);
    return (
      <View style={[styles.mainContainer]}>
        <HelplineNumbers
          NumbersData={this.props.NumbersData}
          HelpLineNo={this.props.HelpLineNo}
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
)(HelplineNumbersCon);
