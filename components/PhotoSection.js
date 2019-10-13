import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class PhotoSection extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.thumbnailSection}>
          <Image source={{uri:"http://i.pravatar.cc/400?img=3"}} style={styles.thumbnail}></Image>
          <Text style={styles.headUserName}>PhotoSection</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

  },
  thumbnailSection: {
    flexDirection:'row',
    padding:5,
    alignItems:'center'
  },
  thumbnail: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  headUserName: {
    fontWeight:'bold',
    fontSize:19,
    marginLeft:10
  }
});

export default PhotoSection;
