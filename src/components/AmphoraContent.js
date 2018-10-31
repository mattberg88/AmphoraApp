import React from 'react';
import AmphoraButtonsRow from './AmphoraButtonsRow'
import AmphoraText from './AmphoraText'
import { Text, StyleSheet, View, ScrollView } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      view: 'menu'
    }
  }
  handleButtonClick = (view) => {
    console.log(view)
    switch (view) {
      case 'menu':
        this.setState({ view: 'menu' }, () => { });
      case 'intro':
        this.setState({ view: 'intro' }, () => { });
    }
  }

  render() {
    switch (this.state.view) {
      case 'menu':
        return (
        <View>
            <Text style={styles.titleSection}>About</Text>
            <AmphoraButtonsRow onButtonClick={this.handleButtonClick} />
        </View>
        );
      case 'intro':
        return (
          <View>
            <AmphoraText type='intro' onClick={() => this.setState({ view: 'menu' })} />
          </View>
        );
    }
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

  },
  titleSection: {
    padding: 10,
    paddingTop: 15,
    fontWeight: 'bold'
  }
});
