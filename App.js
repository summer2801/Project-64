import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import HomeScreen from './screens/HomeScreen';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <HomeScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#31A9B8',
  },
});

/* 
#258039 = dark green 
#F5BE41 = yellow
#31A9B8 = blue
#CF3722 = red
#7F843D = weird green

*/
