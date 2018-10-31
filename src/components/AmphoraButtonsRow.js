import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import AmphoraButton from './AmphoraButton';

export default class AmphoraButtonsRow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }  

  render() {
    return (
        <View style={styles.buttonRow}>
          <AmphoraButton
            text='Intro'
            photo='amphora'
            onClick={() => this.props.onButtonClick('intro')}
          />
          <AmphoraButton text='Aroma' photo='aroma' />
          <AmphoraButton text='Astro' photo='aroma' />
        </View>
      );
  }
} 
const styles = StyleSheet.create({
  buttonRow: {
    flexDirection: 'row',

  },

  titleSection: {
    padding: 10,
    paddingTop: 15,
    fontWeight: 'bold'
  }
});
