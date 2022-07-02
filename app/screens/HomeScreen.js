import React from 'react';
import {ScrollView, StyleSheet, View, Text, Button, Image, useWindowDimensions} from 'react-native';
import Logo from '../assets/Logo.png';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../components/CustomButton';



class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <View style={styles.container}>
         <Image
          source={Logo}
          style={[styles.logo]}
          resizeMode="contain"
        />
        <Text style={styles.text}>Home Screen</Text>
        <Text>Hello, world!</Text>
        <Text> It is {this.state.date.toLocaleTimeString()}.</Text>
        <CustomButton
          text="Logout?"
          onPress={() => this.props.navigation.navigate('LoginScreen')}
          type="TERTIARY"
        />
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

export default HomeScreen;
