import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';

class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Profile Screen</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  text: {
    color: 'rgb(59,108,212)',
    fontSize: 42,
    fontWeight: '100',
    textAlign: 'center',
  },
});

export default ProfileScreen;
