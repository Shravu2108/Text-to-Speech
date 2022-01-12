import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

export default class SoundButton extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pressedButtonIndex:""
    }
  }

  playSound = async sound => {
    console.log(sound);
    var soundLink =
      'https://s3-whitehatjrcontent.whjr.online/phones/' +
      sound +
      '.mp3';
    await Audio.Sound.createAsync(
      {
        uri: soundLink,
      },
      { shouldPlay: true }
    );
  };
  render() {
    return (
      <TouchableOpacity
        style={
          this.props.buttonIndex === this.state.pressedButtonIndex
          ?[styles.Button,{backgroundColor:"blue"}]
          :[styles.Button,{backgroundColor:"red"}]
        }
        onPress={() => {
          this.setState({
            pressedButtonIndex: this.props.buttonIndex
          })
          this.playSound(this.props.sound);
        }}>
        <Text style={
           this.props.buttonIndex === this.state.pressedButtonIndex
          ?[styles.displayText,{color:"white"}]
          :[styles.displayText,{color:"white"}]
        }>{this.props.word}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  displayText: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white'
  },
  Button:{
    width: '60%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    margin: 5,
    backgroundColor: 'red'
  }
});