import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

export default class AmphoraButton extends React.Component{
  onPress() {
    return 1
  }
 render() {
    return (
     
      <TouchableOpacity
        style={styles.button}
        onPress={this.onPress}
      >
      
        <Text style={styles.whiteFont}> Touch Here </Text>
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
  whiteFont: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18
  }
});
