import React from 'react';
import {connect} from 'react-redux';
import {View, Text, StyleSheet} from 'react-native';
import * as actionCreators from '../actions/index.js';
import FrontPage from '../Component/FrontPage.js';

const styles = StyleSheet.create({
  mainContainer: {
    // justifyContent:'center',
    alignItems: 'center',
  },
});

class FrontPageCon extends React.Component {
  render() {
    // console.log('in Box-container', this.props.StateName);
    return (
      <View style={[styles.mainContainer]}>
        <FrontPage />
        {/* <Text>uygkhlk</Text> */}
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
)(FrontPageCon);
