import {getDayOfWeek, Width, Height} from '../utils/stylesheetawesomeproject';
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  ImageBackground,
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
    backgroundColor: '#383838',
    paddingTop: Platform.OS == 'ios' ? 20 : 0,
  },
  TimeandDateContainer: {
    width: Width - 120,
    marginRight: 30,
    justifyContent: 'center',
    // backgroundColor:'red',
    alignItems: 'flex-end',
    borderBottomWidth: 2,
    borderBottomColor: 'white',
    paddingVertical: 10,
  },
  timeText: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
  },

  daysText: {
    color: 'white',
    fontSize: 18,
    paddingBottom: 0,
  },
  butonStyleStatsHelpLine: {
    // backgroundColor: 'blue',
    paddingVertical: 10,
    // paddingHorizontal:20,
    width: 65,
    height: 45,
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
    // borderRadius: 6,
    elevation: 4,
    justifyContent: 'center',
    marginHorizontal: 2,
    borderWidth: 1,
    borderColor: '#3e6d80',
    backgroundColor: 'white',
  },
  butonStyleNewsInstruction: {
    // backgroundColor: 'blue',
    paddingVertical: 10,
    // paddingHorizontal:20,
    width: 65,
    height: 45,
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
    // borderRadius: 6,
    elevation: 4,
    justifyContent: 'center',
    marginHorizontal: 2,
    borderWidth: 1,
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
    // // BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    // this.setActionsScreen();
    this.timer = setInterval(() => {
      this.getCurrentTime();
    }, 1000);
  }
  // setActionsScreen=()=>{
  //   this.setState({Screen:Actions.currentScene})
  // }
  // handleBackButton = () => {
  //   console.log('current Scene', Actions.currentScene);
  //   switch (Actions.currentScene) {
  //     case 'firstPage':
  //       BackHandler.exitApp();
  //       break;

  //     default:
  //       Actions.pop();
  //   }
  //   // Alert.alert('Hold on!', 'Are you sure you want to go back?', [
  //   //   {
  //   //     text: 'Cancel',
  //   //     onPress: () => null,
  //   //     style: 'cancel',
  //   //   },
  //   //   {text: 'YES', onPress: () => BackHandler.exitApp()},
  //   // ]);
  //   return true;
  // };

  // componentWillUnmount() {
  //   clearInterval(this.timer);
  //   // BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  // }

  render() {
    // console.log('current Scene', Actions.currentScene);
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/back3.jpg')}
          style={[styles.container, {width: Width}]}>
          <View style={styles.TimeandDateContainer}>
            <Text style={[styles.timeText, {fontSize: 50}]}>
              {/* {this.state.seconds} */}Covid Pedia
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
        </ImageBackground>
      </View>
    );
  }
}
