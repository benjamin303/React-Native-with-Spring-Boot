import React from 'react';

import {Text, Button} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// import Home from './HomeScreen';
// import Profile from './ProfileScreen';
// import Post from './PostScreen';

import BottomTab from '../navigation/BottomTab';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text>Welcome user </Text>

      <Button
        title="Go to Benjamin's profile"
        onPress={() => navigation.navigate('Profile', {name: 'Benjamin'})}
      />
      <Button
        title="Go to Login page"
        onPress={() => navigation.navigate('Login')}
      />

      <Button
        title="Go to Add Post page"
        onPress={() => navigation.navigate('AddPost')}
      />
      <Button
        title="Go to  Post page"
        onPress={() => navigation.navigate('Post')}
      />
      <Button
        title="Go to  User List Screen"
        onPress={() => navigation.navigate('UserList')}
      />
      {/* <BottomTab /> */}
    </SafeAreaView>
  );
};

export default HomeScreen;
