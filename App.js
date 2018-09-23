import React from 'react';
import AmphoraButton from './src/components/AmphoraButton'
import AmphoraList from './src/components/AmphoraList'
import AmphoraNavigator from './src/components/AmphoraNavigator'

import { StyleSheet, View, ScrollView } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <ScrollView style={styles.scroll}> 
      <AmphoraNavigator />
      <View style={styles.buttonRow}>      
        <AmphoraButton text='Amphora' photo='amphora'/>
        <AmphoraButton text='Aroma' photo='aroma'/>
        <AmphoraButton text='Astro' photo='astro'/>
       </View>
        <View style={styles.buttonRow}>
          <AmphoraButton text='Amphora' photo='amphora' />
          <AmphoraButton text='Aroma' photo='aroma' />
          <AmphoraButton text='Astro' photo='astro' />
        </View>
        <View style={styles.buttonRow}>
          <AmphoraButton text='Amphora' photo='amphora' />
          <AmphoraButton text='Aroma' photo='aroma' />
          <AmphoraButton text='Astro' photo='astro' />
        </View>
        
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DA70D6',
  
  },
  buttonRow: {
    flexDirection: 'row',

  },
  scroll: {
    backgroundColor: '#fff',

  }
});
