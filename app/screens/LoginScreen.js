import React, {useState} from 'react';
import {
  View,
  Image,
  useWindowDimensions,
  ScrollView,
  Text,
  Button,
} from 'react-native';
import Logo from '../assets/Logo.png';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import StyleSheet from '../Styles/Style';
import { TextInput } from 'react-native-paper';


const LoginScreen = () => {
  const {height} = useWindowDimensions();
  const navigation = useNavigation();
  const [password, setPassword] = useState('');


  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSignInPressed = data => {
    console.log(data);
    // validate user
    navigation.navigate('HomeScreen');
  };

  const onForgotPasswordPressed = () => {
    navigation.navigate('ForgotPassword');
  };

  const onSignUpPress = () => {
    navigation.navigate('RegisterScreen');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={StyleSheet.root}>
        <Image
          source={Logo}
          style={[StyleSheet.logo, {height: height * 0.2}]}
          resizeMode="contain"
        />

        
          <CustomInput
            name="username"
            placeholder="Username"
            control={control}
            rules={{required: 'Username is required'}}
          />

          <CustomInput
            name="password"
            placeholder="Password"
            secureTextEntry
            control={control}
            rules={{
              required: 'Password is required',
              minLength: {
                value: 3,
                message: 'Password should be minimum 3 characters long',
              },
            }}
          />

          <CustomButton
            text="Log In"
            onPress={handleSubmit(onSignInPressed)}
          />

        <CustomButton
          text="Forgot password?"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />
<Button
  onPress={onSignUpPress}
  title="Learn More"
  color="blue"
  accessibilityLabel="Learn more about this purple button"
/>
        <CustomButton
          text="Don't have an account? Create on"
          onPress={onSignUpPress}
          type="TERTIARY"
          />
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
