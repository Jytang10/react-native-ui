import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import PhotoSection from './PhotoSection';

class PhotoList extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <PhotoSection></PhotoSection>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PhotoList;
