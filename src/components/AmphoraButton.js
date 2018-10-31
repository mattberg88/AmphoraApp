import React from 'react';
import { Image, TouchableOpacity, StyleSheet, Text, View } from 'react-native';


export default class AmphoraButton extends React.Component{
  constructor(props) {
    super(props);
    console.log(props.photo)
  }
  onPress = () => {
    this.props.onClick();
  }
  renderButtonIcon() {
    switch(this.props.photo){
    case 'amphora' :
    return require('../img/amphora-icon.png')
    case 'aroma' :
    return require('../img/aroma-icon.png')
    case 'astro' :
    return require('../img/astro-icon.png')
    default:  
    return null;
    }
  }

 
  render() {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={this.onPress}
      ><Image style={styles.img}
        source={this.renderButtonIcon()}
        />
        <View style={styles.panel}>
        <Text style={styles.font}>
         {this.props.text} 
        </Text>
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    width:120,
    backgroundColor: "#DDA0DD",
    padding: 20,
    margin: 2,
    alignItems: 'center',
    borderWidth: 0,
    borderRadius: 3,
    
  },
  img:{
    width: 60,
    height: 60
  },
  font: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16
  },
  panel:{
    alignItems: "center",
    width:118,
    bottom:-19,
    height:28,
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: "#fff"
  }
});
