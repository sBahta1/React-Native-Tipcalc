import React from 'react';
import {
  TouchableWithoutFeedback,
  StyleSheet,
  Text,
  View,
  TextInput,
  Keyboard,
  Button,
  Slider
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
          <View style={styles.headerBox}>
            <Text style={styles.header}>Hello World Technologies</Text>
          </View>
          <View style={styles.inputBox}>
            <TextInput
              keyboardType='numeric'
              style={styles.billInput}
              onChangeText={(bill) => this.setState({ bill })}
              value={this.state.bill}
              placeholder='Enter Amount'
              returnKeyType='done'
            />
          </View >
          <View style={styles.sliderBox}>
            <Text>Select A Tip Pecentage</Text>
            <Slider
              minimumValue={1}
              maximumValue={100}
              step={5}
              value={15}
              onSlidingComplete={(value) => this.setState({ tipPercentage: value })}
            />
          </View>
          <View style={styles.dashBox}>
            <Text>Bill Amount: ${this.state.bill}</Text>
            <Text>Tip Percentage: {this.state.tipPercentage}%</Text>
            <Text>Tip Amaount: {this.state.tipAmount}</Text>
            <Text>Total: $ {this.state.total}</Text>
          </View>
          <Button
            onPress={this.calulateTip}
            title="Calculate"
          ></Button>
        </View>
      </TouchableWithoutFeedback>
    );
  }
  calulateTip = () => {
    this.setState({
      tipAmount: parseFloat(this.state.bill) * ((this.state.tipPercentage) / 100).toFixed(2)
    })
    this.calulateTotal()
  }
  calulateTotal = () => {
    this.setState({ total: ((1 + (this.state.tipPercentage / 100)) * this.state.bill).toFixed(2) }
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  headerBox: {
    flex: 1,
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
  },
  header: {
    fontSize: 30,
  },
  inputBox: {
    borderColor: 'black',
    borderWidth: 1,
    flex: 1,
  },
  billInput: {
    height: 40,
    width: 100,
    borderColor: 'gray',
    borderBottomWidth: 1,
  },
  sliderBox: {
    borderColor: 'black',
    borderWidth: 1,
    flex: 1,
  },
  dashBox:{
    borderColor: 'black',
    borderWidth: 1,
    flex: 1,
  }
});
