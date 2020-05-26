import React, {Component} from 'react';
//import react in our code.

import {
  StyleSheet,
  ActivityIndicator,
  View,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
//import all the components we are going to use.

import {WebView} from 'react-native-webview';
import {Width} from '../utils/stylesheetawesomeproject';

const styles = StyleSheet.create({
  stylOld: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  styleNew: {
    flex: 1,
  },
  WebViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    // marginTop: 40,
  },
  ActivityIndicatorStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
});

export default class NewsWebView extends Component {
  constructor(props) {
    super(props);
    this.state = {visible: true};
  }

  showSpinner() {
    console.log('Show Spinner');
    this.setState({visible: true});
  }

  hideSpinner() {
    console.log('Hide Spinner');
    this.setState({visible: false});
  }

  render() {
    return (
      <View
        style={this.state.visible === true ? styles.stylOld : styles.styleNew}>
        <View
          style={{
            height: 60,
            backgroundColor: '#12394d',
            width: '100%',
            flexDirection: 'row',
          }}>
          <TouchableOpacity onPress={this.props.closeModal}>
            <View
              style={{
                marginLeft: 10,
                marginVertical: 20,
                flexDirection: 'row',
              }}>
              <Image
                style={{height: 20, width: 20}}
                source={require('../assets/arrowback.png')}
              />
            </View>
          </TouchableOpacity>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              textAlign: 'center',
              marginVertical: 10,
              width: Width - 40,
            }}>
          {this.props.title}
          </Text>
        </View>
        {this.state.visible ? (
          <ActivityIndicator
            color="#009688"
            size="large"
            style={styles.ActivityIndicatorStyle}
          />
        ) : null}

        <WebView
          style={styles.WebViewStyle}
          //Loading URL
          source={{uri: this.props.url}}
          //Enable Javascript support
          javaScriptEnabled={true}
          //For the Cache
          domStorageEnabled={true}
          //View to show while loading the webpage
          //Want to show the view or not
          //startInLoadingState={true}
          onLoadStart={() => this.showSpinner()}
          onLoad={() => this.hideSpinner()}
        />
      </View>
    );
  }
}
