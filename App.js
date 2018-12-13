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
      bill: '0.00',
      tipPercentage: 15,
      tipAmount: '0.00',
      total: '0.00',
      buttons: false
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
              placeholder='Enter Amount'
              returnKeyType='done'
              value={this.state.bill}
            />
            <Text>Select A Tip Pecentage</Text>
            <View style={styles.sliderBox}>
              <Slider
                minimumValue={1}
                maximumValue={100}
                step={1}
                value={15}
                onValueChange={(value) => this.setState({ tipPercentage: value })}
              />
            </View>
          </View>
          <View style={styles.dashContainer}>
            <View style={styles.dashBoxA}>
              <Text style={styles.dashText}>Bill Amount: </Text>
              <Text style={styles.dashText}>Tip Percentage: </Text>
              <Text style={styles.dashText}>Tip Amount: </Text>
              <Text style={styles.dashText}>Total: </Text>
            </View>
            <View style={styles.dashBoxB}>
              <Text style={styles.dashText}>${this.state.bill}</Text>
              <Text style={styles.dashText}>{this.state.tipPercentage}%</Text>
              <Text style={styles.dashText}>${this.state.tipAmount}</Text>
              <Text style={styles.dashText}>$ {this.state.total}</Text>
            </View>
          </View>
          {this._renderActionButtons()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
  _renderActionButtons() {
    if (this.state.buttons) {
      return (
        <View style={styles.buttonBox}>
          <Button
            onPress={this.clearState}
            title="Clear"
            color='red'
          ></Button>
          <Button
            onPress={this.calulateTip}
            title="Calculate"
          ></Button>
        </View>
      );
    } else {
      return (
        <Button
          onPress={this.calulateTip}
          title="Calculate"
        ></Button>
      )
    }
  }

  clearState = () => {
    this.setState({
      bill: '0.00',
      tipPercentage: 15,
      tipAmount: '0.00',
      total: '0.00',
      buttons: false
    })
  }
  calulateTip = () => {
    this.setState({
      tipAmount: parseFloat((this.state.bill) * ((this.state.tipPercentage) / 100)).toFixed(2),
      buttons: true
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column',

  },
  headerBox: {
    alignItems: 'center',
    justifyContent: 'center',
    // borderColor: 'black',
    // borderBottomWidth: 1,
    width: '100%',
    shadowOffset: { height: 15, },
    shadowColor: 'black',
    shadowOpacity: 0.5,

  },
  header: {
    fontSize: 30,
    color: '#D3E0DF'
  },
  inputBox: {
    width: '85%',
    height: 150,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    zIndex: 5,
    shadowOffset: { height: 6, },
    shadowRadius: 8,
    shadowColor: 'black',
    shadowOpacity: 0.3,
  },
  billInput: {
    height: 40,
    width: 100,
    borderColor: 'gray',
    borderBottomWidth: 1,
  },
  sliderBox: {
    width: '100%',
  },
  dashContainer: {
    flexDirection: 'row',
    height: 200,
    borderRadius: 5,
    backgroundColor: '#fff',
    zIndex: 2,
    shadowOffset: { height: 6, },
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowRadius: 6,
    width: '85%',
  },
  dashBoxA: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    padding: 10,
  },
  dashBoxB: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    padding: 10
  },
  dashText: {
    fontSize: 18,
  },
  buttonBox: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
});
