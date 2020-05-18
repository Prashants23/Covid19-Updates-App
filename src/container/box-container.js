import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/index.js';
import States from '../Component/box';
import Buttons from '../Component/atoms/buttons.js';
class BoxCon extends React.Component {
  render() {
    console.log('test', this.props.StateName);
    return (
      <States
        handleClick={this.props.loadColor}
        StateName={this.props.StateName}
      />
      // <Buttons title="test" onsubmit={()=>this.props.loadColor()} />
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
