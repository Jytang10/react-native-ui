//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PhotoSection from './PhotoSection';

// create a component
class PhotoList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <PhotoSection></PhotoSection>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default PhotoList;
