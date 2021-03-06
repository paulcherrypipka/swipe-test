import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Button } from 'react-native-elements';

import Deck from './src/Deck';
import MoviesFetcher from './src/MoviesFetcher';

import { Tabs } from './src/routes'

const DATA = [
  { id: 1, text: 'Girl #1', uri: 'https://images.pexels.com/photos/160699/girl-dandelion-yellow-flowers-160699.jpeg?w=940&h=650&auto=compress&cs=tinysrgb' },
  { id: 2, text: 'Girl #2', uri: 'https://images.pexels.com/photos/301326/pexels-photo-301326.jpeg?w=940&h=650&auto=compress&cs=tinysrgb' },
  { id: 3, text: 'Girl #3', uri: 'https://images.pexels.com/photos/7307/pexels-photo.jpeg?w=940&h=650&auto=compress&cs=tinysrgb' },
  { id: 4, text: 'Girl #4', uri: 'https://images.pexels.com/photos/237637/pexels-photo-237637.jpeg?w=940&h=650&auto=compress&cs=tinysrgb' },
  { id: 5, text: 'Girl #5', uri: 'https://images.pexels.com/photos/206276/pexels-photo-206276.jpeg?w=940&h=650&auto=compress&cs=tinysrgb' },
  { id: 6, text: 'Girl #6', uri: 'https://images.pexels.com/photos/234883/pexels-photo-234883.jpeg?w=940&h=650&auto=compress&cs=tinysrgb' },
  { id: 7, text: 'Girl #7', uri: 'https://images.pexels.com/photos/292491/pexels-photo-292491.jpeg?w=940&h=650&auto=compress&cs=tinysrgb' },
];

const REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    console.log('constructor');
  }

  componentWillMount() {
    console.log('componentWillMount');

    // DATA = this.fetchMovies(REQUEST_URL);
  }

  componentDidMount() {
    console.log('componentDidMount'); 
  }

  // fetchMovies(url) {
  //   return fetch(url)
  //   .then((response) => {
  //     console.log('response => ', response);
  //     return response.json();
  //   })
  //   .then((responseJson) => {
  //     console.log('responseJson => ', responseJson);
  //   })
  //   .catch((error) => {
  //     console.log('Error again oh my goooosh!!!')
  //   });
  // }

  renderCard(card) {
    return (
      <Card
        key={ card.id }
        title={card.text}
        image={{ uri: card.uri }}>
        <Text style={{ marginBottom: 10 }}>
          The idea with React Native Elements is more about component structure than actual design.
        </Text>
        <Button
          icon={{name: 'code'}}
          backgroundColor='#03A9F4'
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
          title='VIEW NOW' />
      </Card>
    );
  }

  renderOld() {
   console.log('render');
    return (
      <View style={styles.container}>
        <Deck 
          data={DATA}
          renderCard={this.renderCard} 
        />
      </View>
    );
  }

  renderDeck() {
   console.log('render deck');
    return (
      <View style={styles.container}>
        {/*<MoviesFetcher requestUrl={REQUEST_URL} />*/}
        <Deck 
          data={DATA}
          renderCard={this.renderCard} 
        />
      </View>
    );
  }

  render() {
    return (
      <Tabs />
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

Expo.registerRootComponent(App);
