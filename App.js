import React from 'react';
import {
  TouchableWithoutFeedback,
  StyleSheet,
  Text,
  View,
  TextInput,
  Keyboard,
  Picker,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bill: null,
      tipPercentage: 15,
      tipAmount: null,
      total: null,
    };
  }
  render() {
    return (
      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
        accessible={false}>
        <View style={styles.container}>
          <View>
            <Text>Hello World</Text>
            <TextInput
              keyboardType='numeric'
              style={styles.billInput}
              onChangeText={(bill) => this.setState({ bill })}
              value={this.state.bill}
              placeholder='Enter Amount'
              returnKeyType='done'
            />
          </View >
          <View>
            <Text>Select A Tip Pecentage</Text>
            <Picker
                selectedValue={this.state.tipPercentage}
                style={{ height: 50, width: 100 }}
                onValueChange={(itemValue, itemIndex) => this.setState({ tipPercentage: itemValue })}>
                <Picker.Item label="15%" value="15" />
                <Picker.Item label="18%" value="18" />
                <Picker.Item label="20%" value="20" />
              </Picker>
          </View>
          <View>
            <Text>Bill Amount: ${this.state.bill}</Text>
            <View>
             
            </View>
            <Text>Tip Percentage: {this.state.tipPercentage}%</Text>
          </View>
        </View>
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
  billInput: {
    height: 40,
    width: 100,
    borderColor: 'gray',
    borderBottomWidth: 1,
  },
  pCentSelect: {
    height: 40,
    width: 40,
    backgroundColor: 'purple',

  }
});
