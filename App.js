import React from 'react';
import AmphoraNavigator from './src/components/AmphoraNavigator'
import AmphoraContent from './src/components/AmphoraContent'
import { StyleSheet, ScrollView, View } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
      return(
        <View>
          <AmphoraNavigator />
        <ScrollView style={styles.scroll}>
          <AmphoraContent />
        </ScrollView>
        </View>
      ); 
  }
}

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: '#fff',
    height:500

  },
});
