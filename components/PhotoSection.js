import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
class PhotoSection extends Component {

  state = {
    heartIcon: 'ios-heart-empty',
    like: false
  }

  toggleLike = () => {
    this.setState({
      like: !this.state.like
    })

    if(this.state.heartIcon){
      this.setState({
        heartIcon:'ios-heart'
      })
    } else {
      this.setState({
        heartIcon:'ios-heart-empty'
      })
    }
  }

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
        <View style={styles.heartContainer}>
          <TouchableWithoutFeedback onPress={this.toggleLike}>
            <Icon name={this.state.heartIcon} size={32}></Icon>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.imageMeta}>
          <Text style={styles.username}>Alex_1234</Text>
          <Text>#holiday, #Roam</Text>
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
  },
  imageMeta: {
    flexDirection:'row'
  },
  username: {
    fontWeight:'bold',
    paddingRight:10
  },
  heartContainer: {
    paddingVertical:12
  }
});

export default PhotoSection;
