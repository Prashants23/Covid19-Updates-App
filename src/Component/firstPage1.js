import {
  getDayOfWeek,
  Width,
  Height,
  verticalScale,
} from '../utils/stylesheetawesomeproject';
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  ImageBackground,
  Image,
  Alert,
  BackHandler,
} from 'react-native';
import Buttons from './atoms/buttons';
import {Actions} from 'react-native-router-flux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: '#12394d',
    paddingTop: Platform.OS == 'ios' ? 20 : 0,
  },
  TimeandDateContainer: {
    width: Width - 110,
    marginRight: 30,
    justifyContent: 'center',
    alignItems: 'flex-end',
    borderBottomWidth: 2,
    borderBottomColor: 'white',
    paddingVertical: 10,
  },
  timeText: {
    fontSize: 28,
    color: 'white',
    textAlign: 'center',
  },

  daysText: {
    color: 'white',
    fontSize: 16,
    paddingBottom: 0,
  },
  butonStyleStatsHelpLine: {
    paddingVertical: 10,
    width: 80,
    height: 45,
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
    elevation: 4,
    justifyContent: 'center',
    marginHorizontal: 2,
    borderColor: '#3e6d80',
    backgroundColor: 'white',
  },
  butonStyleNewsInstruction: {
    width: 80,
    height: 45,
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
    // fontSize:18,
    // borderRadius: 6,
    elevation: 4,
    justifyContent: 'center',
    marginHorizontal: 2,
    // borderWidth: 1,
    borderColor: '#3e6d80',
    backgroundColor: 'white',
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 12,
    color: 'black',
  },
  buttoncontainer: {
    width: Width - 120,
    marginRight: 20,
    alignItems: 'flex-end',
    marginTop: 10,
    // backgroundColor:'red'
  },
});

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      currentTime: null,
      currentDay: null,
      date: null,
      month: null,
      year: null,
      hour: null,
      min: null,
      seconds: null,
      am_pm: null,
      currentMonthName: null,
    };

    this.daysArray = [
      'sunday',
      'monday',
      'tuesday',
      'wednesday',
      'thursday',
      'friday',
      'saturday',
      'sunday',
    ];
    this.monthArray = [
      'Jan',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'Sept',
      'Oct',
      'Nov',
      'Dec',
    ];
  }

  componentWillMount() {
    this.getCurrentTime();
    this.getCurrentDate();
  }
  getCurrentDate = () => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    this.setState({date: date, month: month, year: year});
  };
  getCurrentTime = () => {
    let hour = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    let am_pm = 'pm';

    if (minutes < 10) {
      minutes = '0' + minutes;
    }

    if (seconds < 10) {
      seconds = '0' + seconds;
    }

    if (hour > 12) {
      hour = hour - 12;
    }
    if (hour < 10) {
      hour = '0' + hour;
    }

    if (hour == 0) {
      hour = 12;
    }

    if (new Date().getHours() > 12) {
      am_pm = 'p.m';
    }
    if (new Date().getHours() < 12) {
      am_pm = 'a.m';
    }

    this.setState({
      currentTime: hour + ':' + minutes + ':' + seconds + ' ' + am_pm,
      hour: hour,
      min: minutes,
      seconds: seconds,
      am_pm: am_pm,
    });

    this.monthArray.map((item, key) => {
      if (key === this.state.month - 1) {
        this.setState({currentMonthName: item});
      }
    });
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      this.getCurrentTime();
    }, 1000);
  }

  render() {
    // console.log('current Scene', Actions.currentScene);
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/back89.jpg')}
          style={[styles.container, {width: Width}]}>
          <View style={styles.TimeandDateContainer}>
            <Text
              style={[
                styles.timeText,
                {fontSize: 16, width: 270, textAlign: 'right'},
              ]}>
              Welcome to
            </Text>
            <Text
              style={[
                styles.timeText,
                {fontSize: 40, width: 270, textAlign: 'right'},
              ]}>
              Covid Pedia
            </Text>
            <Text style={styles.timeText}>
              {this.state.hour}:{this.state.min}
              {this.state.am_pm}{' '}
            </Text>
            <Text style={styles.daysText}>
              {getDayOfWeek(new Date())}, {this.state.date}
            </Text>
            <Text>
              <Text style={styles.daysText}>
                {this.state.currentMonthName}, {this.state.year}
              </Text>
            </Text>
          </View>
          <View style={styles.buttoncontainer}>
            <View style={{flexDirection: 'row'}}>
              <Buttons
                title={'Stats'}
                ButtonStyle={styles.butonStyleStatsHelpLine}
                textStyle={styles.textStyle}
                onsubmit={() => Actions.push('BoxCon')}
              />
              <Buttons
                title={'News'}
                ButtonStyle={styles.butonStyleNewsInstruction}
                textStyle={styles.textStyle}
                onsubmit={() => Actions.push('News')}
              />
            </View>
            <View style={{marginTop: 10, flexDirection: 'row'}}>
              <Buttons
                title={'Helpline'}
                ButtonStyle={styles.butonStyleStatsHelpLine}
                textStyle={styles.textStyle}
                onsubmit={() => Actions.push('helplineNo')}
              />
              <Buttons
                title={'Instruction'}
                ButtonStyle={styles.butonStyleNewsInstruction}
                textStyle={styles.textStyle}
                onsubmit={() => Actions.push('Instruction')}
              />
            </View>
          </View>
          <View style={{height: 50, justifyContent: 'flex-end'}}>
            {/* <Text
              style={{
                textAlign: 'center',
                color: 'gray',
                fontSize: 12,
                width: 200,
              }}>
              All the data on this platform has been fetched from these */}
            <Text
              onPress={() => Actions.push('Resources')}
              style={{color: 'gray', fontSize: 18, marginRight: 20}}>
              {' '}
              Data Resources{' '}
            </Text>
            {/* </Text> */}
          </View>
        </ImageBackground>
      </View>
    );
  }
}
