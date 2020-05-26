import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {Height, Width, verticalScale} from '../utils/stylesheetawesomeproject';
import {Actions} from 'react-native-router-flux';
import NewsWebView from './NewsWebView';

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#12394d',
    height: 70,
    // borderBottomLeftRadius: Width,
    // borderBottomRightRadius: Width,
    width: Width,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerImage: {
    height: 60,
    width: 60,
    // marginLeft: Width - 280,
    marginRight: 40,
    // /marginTop: 5,
    // alignItems:'center'
    // justifyContent:'center'
  },
  headerCoronaText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    // marginLeft: 30,
    // fontStyle:'none',
    lineHeight: 34,
  },
});

class News extends React.Component {
  constructor() {
    super();
    this.state = {
      NewsData: [],
      isFetching: false,
      newsUrl: '',
      ifWebViewModal: false,
    };
  }
  componentDidMount() {
    this.props.callNewsApi();
    this.updateNewsState();
  }
  updateNewsState = () => {
    this.setState({NewsData: this.props.NewsDataArray});
  };
  onpenWebViewModal = item => {
    this.setState({newsUrl: item, ifWebViewModal: true});
  };
  onCloseModal = () => {
    this.setState({ifWebViewModal: false});
  };
  renderNewsItem(item) {
    console.log('This is Item In index : ', item);
    return (
      <View
        style={{
          alignItems: 'center',
          width: Width,
          height: Height - 100,
          justifyContent: 'center',
        }}>
        <View
          style={{
            width: Width - 40,
            backgroundColor: '#ededed',
            height: Height - 150,
            alignItems: 'center',
            // justifyContent:'center',
            borderRadius: 10,
            elevation: 6,
          }}>
          <Image
            source={{
              uri: item.item.urlToImage,
              width: Width - 60,
              height: 220,
              // scale: number,
            }}
            style={{marginTop: 10, borderRadius: 10}}
          />
          <View style={{height: verticalScale(200)}}>
            <View
              style={{
                marginTop: 10,
                width: Width - 60,
                backgroundColor: '#fafafa',
                paddingVertical: 10,
                borderRadius: 8,
              }}>
              <Text
                style={{fontSize: 18, fontWeight: 'bold', marginHorizontal: 5}}
                numberOfLines={3}>
                {item.item.title}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  marginTop: 10,
                  lineHeight: 22,
                  marginHorizontal: 8,
                }}
                numberOfLines={6}>
                {item.item.description}
              </Text>
            </View>
          </View>
          <View
            style={{
              width: Width - 60,
              // alignItems: 'flex-end',
              marginTop: 10,
              marginRight: 10,
              flexDirection: 'row',
            }}>
            <View style={{width: '50%', marginLeft: 10}}>
              <Text style={{fontSize: 12, color: 'gray'}}>Published At:</Text>
              <Text style={{fontSize: 12, color: 'gray'}}>
                {' '}
                {item.item.publishedAt}
              </Text>
            </View>
            <View style={{width: '52%', alignItems: 'flex-end'}}>
              <Text
                style={{fontSize: 14, color: '#305bbf'}}
                onPress={() => this.onpenWebViewModal(item.item.url)}>
                Read More..
              </Text>
            </View>
            <View />
          </View>
          <View style={{width: Width - 60, marginTop: 5, marginLeft: 10}}>
            <Text style={{color: 'gray', fontSize: 12}}>
              Published By: {item.item.source.name}
            </Text>
          </View>
        </View>
      </View>
    );
  }

  onRefresh() {
    this.setState({isFetching: true}, () => {
      this.props.callNewsApi();
      this.setState({isFetching: false});
    });
  }

  itemSeparator = () => {
    return <View style={{width: Width, height: 5, backgroundColor: 'blue'}} />;
  };
  render() {
    const {NewsData, isFetching} = this.state;
    // console.log('props data', this.props.NewsDataArray[0].author);
    // console.log('state Data', this.state.NewsData);
    // const filteredArray=NewsData.length>0?NewsData.filter(data)

    return (
      <View>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => Actions.pop('News')}>
            <View style={{marginLeft: 0}}>
              <Image
                style={{height: 15, width: 15}}
                source={require('../assets/arrowback.png')}
              />
              {/* <Text onPress={() => Actions.pop('News')}>test</Text> */}
            </View>
          </TouchableOpacity>
          <View
            style={{
              width: '80%',
              alignItems: 'flex-end',
              justifyContent: 'center',
            }}>
            <View>
              <Image
                style={styles.headerImage}
                source={require('../assets/News.png')}
              />
            </View>
          </View>
        </View>

        {this.props.NewsDataArray.length > 0 ? (
          <View>
            <FlatList
              keyExtractor={item => item.id}
              horizontal={true}
              // ItemSeparatorComponent={this.itemSeparator}
              data={this.props.NewsDataArray}
              pagingEnabled={true}
              onRefresh={() => this.onRefresh()}
              refreshing={isFetching}
              renderItem={(item, index) => this.renderNewsItem(item, index)}
            />
          </View>
        ) : (
          <View
            style={{
              width: Width,
              height: Height,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text> loading..</Text>
          </View>
        )}

        <Modal
          animationType="fade"
          visible={this.state.ifWebViewModal}
          onRequestClose={this.onCloseModal}>
          <NewsWebView
            url={this.state.newsUrl}
            closeModal={this.onCloseModal}
            title="News"
          />
        </Modal>
      </View>
    );
  }
}

export default News;
