import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Component1 from './Components/Component1/Component1';
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello World</Text>
        <Component1 />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
