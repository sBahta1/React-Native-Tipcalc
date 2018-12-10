import React, { Component } from 'react';
import {
  TextInput
} from 'react-native';

class Component1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bill: ''
    };
  }
  render() {
    return (
      <TextInput
        keyboardType='numeric'
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={(bill) => this.setState({ bill })}
        value={this.state.bill}
        placeholder='Enter Amount'
      />
    )
  }
}//end class 

export default Component1;