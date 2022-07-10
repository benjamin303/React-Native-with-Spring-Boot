import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
  useWindowDimensions,
} from 'react-native';
import Logo from '../assets/Logo.png';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../components/CustomButton';
import Footer from '../components/Footer';
import Header from '../components/Header';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;

import CustomCard from '../components/CustomCard';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Header />
        <ScrollView
          showsVerticalScrollIndicator={false}
          // style={StyleSheet.background}>
          style={{flex: 1}}>
          {/* <View style={StyleSheet.background}> */}
          <View style={{flex: 0.9}}>
            <CustomCard />
            <CustomCard />
            <CustomCard />
          </View>
        </ScrollView>
        <Footer />
      </View>
    );
  }
}

export default HomeScreen;
