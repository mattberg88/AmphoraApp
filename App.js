import React from 'react';
import AmphoraButton from './src/components/AmphoraButton'
import AmphoraList from './src/components/AmphoraList'

import { StyleSheet, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>        
        <AmphoraButton />
        <AmphoraButton />
        <AmphoraButton />

       
        <AmphoraList></AmphoraList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
