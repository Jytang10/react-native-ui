import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Heading extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Photos</Text>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Heading;
