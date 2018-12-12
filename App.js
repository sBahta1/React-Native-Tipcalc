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
          
            <Text style={styles.dashText}>Bill Amount: ${this.state.bill}</Text>
            <Text style={styles.dashText}>Tip Percentage: {this.state.tipPercentage}%</Text>
            <Text style={styles.dashText}>Tip Amount: ${this.state.tipAmount}</Text>
            <Text style={styles.dashText}>Total: $ {this.state.total}</Text>
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
      tipAmount: parseFloat((this.state.bill) * ((this.state.tipPercentage) / 100)).toFixed(2)
    })
    this.calulateTotal()
  }
  calulateTotal = () => {
    this.setState({
      total: ((1 + (this.state.tipPercentage / 100)) * this.state.bill).toFixed(2)
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C5C73',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column',

  },
  headerBox: {
    alignItems: 'center',
    justifyContent: 'center',
    // borderColor: 'black',
    // borderWidth: 1,
    width: '100%'
  },
  header: {
    fontSize: 30,
    color: '#D3E0DF'
  },
  inputBox: {
    //borderColor: 'black',
    //borderWidth: 1,
    width: '85%',
    justifyContent: 'space-around',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    zIndex: 5,
    shadowOffset: { height: 5, },
    shadowColor: 'black',
    shadowOpacity: 0.5,
  },
  billInput: {
    height: 40,
    width: 100,
    borderColor: 'gray',
    borderBottomWidth: 1,

  },
  dashBox: {
    flexDirection: 'column',
    justifyContent:'space-around',
    width: '85%',
    height:200,
    borderRadius: 5,
    padding: 20,
    backgroundColor: '#fff',
    zIndex: 2,
    shadowOffset: { width: 2, height: 5, },
    shadowColor: 'black',
    shadowOpacity: 0.5,
  },
  dashText:{
    fontSize:18,
  }
});
