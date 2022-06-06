import React, {useState, useEffect} from 'react';
import {
    View, 
    Text, 
    StyleSheet, 
    ScrollView, 
    SafeAreaView,
    TextInput,
    TouchableHighlight
} from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/core';
import {useForm} from 'react-hook-form';

// import {
//     Container,
//     Header,
//     Content,
//     Item,
//     Input,
//     Form,
//     Label,
//     Button,
//     Picker,
//     Thumbnail,
//     Segment
//   } from 'native-base';

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const RegisterScreen = () => {
  const {control, handleSubmit, watch} = useForm();
  const pwd = watch('password');
  const navigation = useNavigation();

  const onRegisterPressed = () => {
    navigation.navigate('Home');
  };

  const onLoginPress = () => {
    navigation.navigate('Login');
  };

  const onTermsOfUsePressed = () => {
    console.warn('onTermsOfUsePressed');
  };

  const onPrivacyPressed = () => {
    console.warn('onPrivacyPressed');
  };

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  //push data
  const handleClick = e => {
    e.preventDefault();
    const post = {title, description};
    console.log(post);
    fetch('http://192.168.1.9:8080/post/add', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post),
    }).catch(() => {
      console.log('New Post added');
    });
  };

  //call data
  useEffect(() => {
    fetch('http://192.168.1.9:8080/post/getAll')
      .then(res => res.json())
      .catch(result => {
        setUsers(result);
      });
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text>Create Post</Text>

        {/* <CustomInput
          name="username"
          control={control}
          placeholder="Username"
          onChangeText={value => setUsername(value)}
          value={username}
          rules={{
            required: 'Username is required',
            minLength: {
              value: 3,
              message: 'Username should be at least 3 characters long',
            },
            maxLength: {
              value: 24,
              message: 'Username should be max 24 characters long',
            },
          }}
        />
        <CustomInput
          name="email"
          control={control}
          placeholder="Email"
          onChangeText={value => setEmail(value)}
          value={email}
          rules={{
            required: 'Email is required',
            pattern: {value: EMAIL_REGEX, message: 'Email is invalid'},
          }}
        />
        <CustomInput
          name="password"
          control={control}
          placeholder="Password"
          onChangeText={value => setPassword(value)}
          value={password}
          secureTextEntry
          rules={{
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password should be at least 8 characters long',
            },
          }}
        />
        <CustomInput
          name="password-repeat"
          control={control}
          placeholder="Repeat Password"
          secureTextEntry
          rules={{
            validate: value => value === pwd || 'Password do not match',
          }}
        /> */}

        <SafeAreaView>
          <TextInput
            onChangeText={value => setTitle(value)}
            value={title}
            placeholder="Title"
            placeholderTextColor="#808080"
          />
          <TextInput
            onChangeText={value => setDescription(value)}
            value={description}
            placeholder="Description"
            placeholderTextColor="#808080"
            multiline
            numberOfLines={10}
          />
        </SafeAreaView>

        <CustomButton text="Create Post" onPress={handleClick} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
  LoginLayout: {
    flex: 1,
    padding: 20
},
LogoLayout: {
    alignItems: "center",
    padding: 20
},
inputLayout: {
    paddingBottom: 20,
},
input: {
    width: "90%",
        height: 40,
        borderWidth: 0.5,
        alignSelf: 'center',
        marginBottom: "3%",
        borderRadius: 7,
        borderColor: "#bfbfbf",
        paddingLeft: 5,
        color: "#000", 
        placeholderTextColor: "#808080" 
},
textDanger: {
    color: "#dc3545"
}
});

export default RegisterScreen;
