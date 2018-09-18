import React from 'react';
import { Image, TouchableOpacity, StyleSheet, Text } from 'react-native';


export default class AmphoraButton extends React.Component{
  onPress() {
    return 1
  }
  
 render() {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={this.onPress}
      ><Image style={styles.img}
        source={require('../img/amphora-icon.png')}
        />
        <Text style={styles.whiteFont}> Amphora </Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    
    backgroundColor: "#841584",
    padding: 20,
    alignItems: 'center',
    borderWidth: 0,
    borderRadius: 8,
  },
  img:{
    width: 60,
    height: 60
  },
  whiteFont: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  }
});
