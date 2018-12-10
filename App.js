import React from 'react';
import {
  TouchableWithoutFeedback,
  StyleSheet,
  Text,
  View,
  TextInput,
  Keyboard
} from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bill: ''
    };
  }
  render() {
    return (
      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
        accessible={false}>
        <View style={styles.container}
          onPress={() => {
            Keyboard.dismiss();
          }}>
          <Text>Hello World</Text>
          <TextInput
            keyboardType='numeric'
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={(bill) => this.setState({ bill })}
            value={this.state.bill}
            placeholder='Enter Amount'
          />
        </View >
      </TouchableWithoutFeedback>
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
