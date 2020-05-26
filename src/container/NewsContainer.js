import React from 'react';
import {connect} from 'react-redux';
import {View, Text, StyleSheet} from 'react-native';
import * as actionCreators from '../actions/index.js';
import News from '../Component/News.js';
import Buttons from '../Component/atoms/buttons.js';

const styles = StyleSheet.create({
  mainContainer: {
    // justifyContent:'center',
    alignItems: 'center',
  },
});

class NewsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      NewsData: [],
    };
  }
  componentDidMount() {
    this.props.NewsApi();
  }
  onClickDemo = () => {
    this.props.NewsApi();
  };
  render() {
    // console.log('in Box-container', this.props.NumbersData);
    return (
      <View style={[styles.mainContainer]}>
        {/* <Buttons onsubmit={this.onClickDemo} title={"test"} /> */}
        <News
          callNewsApi={this.props.NewsApi}
          NewsDataArray={this.props.NewsDataArray}
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
)(NewsContainer);
