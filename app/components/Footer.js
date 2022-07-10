import * as React from 'react';
import {Text, View, ScrollView, Image} from 'react-native';
import Logo from '../assets/Logo.png';
import StyleSheet from '../Styles/Style';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

const Footer = () => {

  const navigation = useNavigation();

  const homeIcon = <Icon name="home" size={30} color="#18A4E0" />;
  const profileIcon = <Icon name="user" size={30} color="#18A4E0" />;
  const createPostIcon = <Icon name="plus-circle" size={30} color="#18A4E0" />;
  const settingsIcon = <Icon name="gear" size={30} color="#18A4E0" />;

  const onHomeIconPress = () => {
    navigation.navigate('HomeScreen');
  };
  const onProfileIconPress = () => {
    navigation.navigate('ProfileScreen');
  };
  const onCreatePostIconPress = () => {
    navigation.navigate('CreatePostScreen');
  };
  const onSettingsIconPress = () => {
    navigation.navigate('SettingsScreen');
  };

  return (
    <>
      {/* <View style={{flex: 1}}> */}
        <View style={StyleSheet.footer}>
          <View style={{flexDirection: 'row'}}>
            <Text onPress={onHomeIconPress}>{homeIcon}</Text>
            <Text onPress={onProfileIconPress}>{profileIcon}</Text>
            <Text onPress={onCreatePostIconPress}>{createPostIcon}</Text>
            <Text onPress={onSettingsIconPress}>{settingsIcon}</Text>
          </View>
        </View>
      {/* </View> */}
    </>
  );
};
export default Footer;
