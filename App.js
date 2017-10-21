import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Accordion from '@ercpereda/react-native-accordion';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 20,
  },
  contentText: {
    paddingTop: 15,
    paddingRight: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    color: '#fff',
  },
});

const Header = ({ isOpen }) =>
  <View style={{
      paddingTop: 15,
      paddingRight: 15,
      paddingLeft: 15,
      paddingBottom: 15,
      borderBottomWidth: 1,
      borderBottomColor: '#a9a9a9',
      backgroundColor: '#f9f9f9',
    }}>
      <Text>{`${isOpen ? '-' : '+'} Click to Expand`}</Text>
    </View>;

const Content = (
  <ScrollView style={{
      display: 'flex',
      backgroundColor: '#31363D',
      height: 300,
    }}>
      <Text style={styles.contentText}>Item 1</Text> 
      <Text style={styles.contentText}>Item 2</Text> 
      <Text style={styles.contentText}>Item 3</Text> 
      <Text style={styles.contentText}>Item 4</Text> 
      <Text style={styles.contentText}>Item 5</Text> 
      <Text style={styles.contentText}>Item 6</Text> 
      <Text style={styles.contentText}>Item 7</Text> 
      <Text style={styles.contentText}>Item 8</Text> 
      <Text style={styles.contentText}>Item 9</Text> 
      <Text style={styles.contentText}>Item 10</Text> 
      <Text style={styles.contentText}>Item 11</Text> 
      <Text style={styles.contentText}>Item 12</Text> 
      <Text style={styles.contentText}>Item 13</Text> 
      <Text style={styles.contentText}>Item 14</Text> 
      <Text style={styles.contentText}>Item 15</Text> 
      <Text style={styles.contentText}>Item 16</Text> 
      <Text style={styles.contentText}>Item 17</Text> 
      <Text style={styles.contentText}>Item 18</Text> 
      <Text style={styles.contentText}>Item 19</Text> 
      <Text style={styles.contentText}>Item 20</Text> 
    </ScrollView>);

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


