import React, { Component } from 'react';
import {
  TextInput
} from 'react-native';

class Component1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Enter Amount'
    };
  }
  render() {
    return (
      <TextInput
        keyboardType='numeric'
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={(text) => this.setState({ text })}
        value={this.state.text}
      />
    )
  }
}//end class 

export default Component1;