import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import PhotoSection from './PhotoSection';
import data from '../data';

class PhotoList extends Component {

  state = {
    data: data
  }

  getPhotos = () => {
    return this.state.data.map(data => {
      return <PhotoSection detail={data} key={data.id}></PhotoSection>
    })
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {this.getPhotos()}
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
