import React from 'react';
import {connect} from 'react-redux';
import {View, Text, StyleSheet, ScrollView, Modal} from 'react-native';
import * as actionCreators from '../actions/index.js';
import States from '../Component/box';
import Buttons from '../Component/atoms/buttons.js';
import {PieChart} from 'react-native-svg-charts';
import {Tooltip} from 'react-native-elements';

const styles = StyleSheet.create({
  mainContainer: {
    // justifyContent:'center',
    alignItems: 'center',
    // backgroundColor: '#323E41',
    backgroundColor: '#d9eefa',
    width: '100%',
    height: '100%',
  },
  header: {
    fontSize: 30,
    color: '#142e3d',
    fontWeight: 'bold',
    marginTop: 20,
  },

  dataContainer: {
    height: 15,
    width: 15,
    borderRadius: 2,
    backgroundColor: 'red',
    marginTop: 4,
  },
  mainDataTextStyles: {
    // marginTop:10,
    marginLeft: 10,
    fontSize: 14,
    color: '#5c5a57',
    letterSpacing: 1,
  },
  dataTextStyles: {
    marginTop: 10,
    // marginLeft: 20,
    fontSize: 16,
    color: '#142e3d',
    letterSpacing: 1.5,
  },
  moreDetails: {
    //   justifyContent:'center',
    //   alignItems:'center',
    marginTop: 20,
    // borderWidth: 2,
    // borderColor: '#bd780f',
    width: '100%',
    paddingLeft: 25,
    paddingVertical: 10,
    backgroundColor: '#b2d6eb',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    elevation: 6,
    borderRadius: 20,
    paddingBottom: 20,
  },
  buttonStyle: {
    width: 180,
    height: 50,
    // textAlign: 'center',
    alignItems: 'center',
    backgroundColor: '#142e3d',
    justifyContent: 'center',
    borderRadius: 12,
    marginHorizontal: 12,
    elevation: 6,
  },
  ButtonTextStyle: {
    color: 'white',
    letterSpacing: 0.4,
    fontSize: 18,
  },
});

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      ifStateModal: false,
    };
  }
  componentDidMount() {
    this.props.totalCasesIndia();
  }
  openCloseStateModal = () => {
    this.setState({ifStateModal: !this.state.ifStateModal});
  };
  colors = index => {
    const colors = ['#cf1c00', '#ff9514', '#0aab58', '#2e2b27'];
    return colors[index];
  };
  render() {
    console.log(
      'In box container Total Cases',
      this.props.TotalCases.active_cases,
    );
    const data = [
      this.props.TotalCases.active_cases,
      this.props.TotalCases.confirmed_cases,
      this.props.TotalCases.recovered_cases,
      //   this.props.TotalCases.last_total_active_cases,
      this.props.TotalCases.death_cases,
    ];

    const pieData = data
      .filter(value => value > 0)
      .map((value, index) => ({
        value,
        svg: {
          fill: this.colors(index),
          onPress: () => (
            <Tooltip popover={<Text>{value}</Text>}>
              <Text>text</Text>
            </Tooltip>
          ),
        },
        key: `pie-${index}`,
      }));
    // console.log('in Box-container', this.props.StateName);
    return (
      <View style={[styles.mainContainer]}>
        <Text style={[styles.header]}>COVID19 UPDATES INDIA</Text>
        <Text style={{fontSize: 14, marginVertical: 10}}>
          Lasted Updated On : {this.props.TotalCases.last_updated}
        </Text>
        <ScrollView style={{width: '98%'}}>
          <View style={{flexDirection: 'row', marginTop: 40}}>
            <PieChart
              style={{height: 150, width: 150, marginRight: 15, marginLeft: 10}}
              outerRadius={75}
              innerRadius={0}
              padAngle={0}
              data={pieData}
            />
            <View
              style={{
                marginTop: 5,
                backgroundColor: 'yellow',
                width: 240,
                paddingLeft: 20,
                borderRadius: 15,
              }}>
              <View style={{flexDirection: 'row', marginVertical: 7}}>
                <View
                  style={[styles.dataContainer, {backgroundColor: '#cf1c00'}]}
                />
                <Text style={styles.mainDataTextStyles}>
                  Active Cases: {this.props.TotalCases.active_cases}
                </Text>
              </View>
              <View style={{flexDirection: 'row', marginVertical: 7}}>
                <View
                  style={[styles.dataContainer, {backgroundColor: '#0aab58'}]}
                />
                <Text style={styles.mainDataTextStyles}>
                  Recovered Cases: {this.props.TotalCases.recovered_cases}
                </Text>
              </View>

              <View style={{flexDirection: 'row', marginVertical: 7}}>
                <View
                  style={[styles.dataContainer, {backgroundColor: '#ff9514'}]}
                />
                <Text style={styles.mainDataTextStyles}>
                  Confirmed Cases: {this.props.TotalCases.confirmed_cases}
                </Text>
              </View>
              <View style={{flexDirection: 'row', marginVertical: 7}}>
                <View
                  style={[styles.dataContainer, {backgroundColor: '#2e2b27'}]}
                />
                <Text style={styles.mainDataTextStyles}>
                  Death Cases: {this.props.TotalCases.death_cases}
                </Text>
              </View>
            </View>
            {/* <Buttons title="test" onsubmit={() => this.props.totalCasesIndia()} /> */}
          </View>

          <View style={[styles.moreDetails]}>
            <Text style={{fontSize: 20, color: '#093b57', marginBottom: 5}}>
              More Details
            </Text>
            <View style={{height: 2, width: '90%', backgroundColor: 'white'}} />
            <View>
              <Text style={[styles.dataTextStyles]}>
                Active Cases: {this.props.TotalCases.active_cases}
              </Text>
              <Text style={[styles.dataTextStyles]}>
                Active Rate: {this.props.TotalCases.active_rate}
              </Text>
              <Text style={[styles.dataTextStyles]}>
                Confirmed_cases: {this.props.TotalCases.confirmed_cases}
              </Text>
              <Text style={[styles.dataTextStyles]}>
                Recovered Cases: {this.props.TotalCases.recovered_cases}
              </Text>
              <Text style={[styles.dataTextStyles]}>
                Recovery Rate: {this.props.TotalCases.recovered_rate}
              </Text>
              <Text style={[styles.dataTextStyles]}>
                Death Cases: {this.props.TotalCases.death_cases}
              </Text>
              <Text style={[styles.dataTextStyles]}>
                Death Rate: {this.props.TotalCases.death_rate}
              </Text>

              <Text style={[styles.dataTextStyles]}>
                Daily Change Active Cases:{' '}
                {this.props.TotalCases.delta_change_active_cases}
              </Text>
              {/* <Text style={[styles.dataTextStyles]}>
                Daily Change in Death Rate:
                {this.props.TotalCases.delta_change_death_cases}
              </Text> */}
              <Text style={[styles.dataTextStyles]}>
                Daily Change in Recovered Cases:
                {this.props.TotalCases.delta_change_recovered_cases}
              </Text>
              {/* <Text style={[styles.dataTextStyles]}>
                Last Total Active Cases:{' '}
                {this.props.TotalCases.last_total_active_cases}
              </Text>
              <Text style={[styles.dataTextStyles]}>
                Last Total Death Cases:{' '}
                {this.props.TotalCases.last_total_death_cases}
              </Text>
              <Text style={[styles.dataTextStyles]}>
                Last Total Recovered Cases:{' '}
                {this.props.TotalCases.last_total_recovered_cases}
              </Text> */}
              <Text style={[styles.dataTextStyles]}>
                Passengers Screened: {this.props.TotalCases.passengers_screened}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: 30,
              justifyContent: 'center',
            }}>
            <Buttons
              title={'State Wise Data'}
              ButtonStyle={[styles.buttonStyle]}
              textStyle={[styles.ButtonTextStyle]}
              onsubmit={this.openCloseStateModal}
            />
            <Buttons
              title={'District Wise Data'}
              ButtonStyle={[styles.buttonStyle]}
              textStyle={[styles.ButtonTextStyle]}
            />
          </View>
        </ScrollView>
        <Modal
          visible={this.state.ifStateModal}
          onRequestClose={this.openCloseStateModal}
          animationType="fade">
          <States
            handleClick={this.props.loadColor}
            StateName={this.props.StateName}
          />
        </Modal>
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
