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
        <View>
          <Image style={{width:null, height:250, borderRadius:15}} source={{uri:"https://images.unsplash.com/photo-1553174241-0b28d763cafa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"}}></Image>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    margin:10
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
