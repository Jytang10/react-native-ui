import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Heading extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Photos</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor:'#ddd',
    borderBottomWidth:2
  },
  text: {
    fontSize:18,
    fontWeight:'bold',
    textAlign:'center',
    margin:15
  }
});

export default Heading;
