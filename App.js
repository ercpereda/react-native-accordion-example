import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Accordion from '@ercpereda/react-native-accordion';

const Header = () =>
  <View style={{
      paddingTop: 15,
      paddingRight: 15,
      paddingLeft: 15,
      paddingBottom: 15,
      borderBottomWidth: 1,
      borderBottomColor: '#a9a9a9',
      backgroundColor: '#f9f9f9',
    }}>
      <Text>Click to Expand</Text>
    </View>;

const Content = (
  <View style={{
      backgroundColor: '#31363D'
    }}>
      <Text style={{
        paddingTop: 15,
        paddingRight: 15,
        paddingBottom: 15,
        paddingLeft: 15,
        color: '#fff',
      }}>
        This content is hidden in the accordion
      </Text>
    </View>);

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Accordion
          header={Header}
          content={Content}
          duration={300}
          easing="easeOutCubic"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
