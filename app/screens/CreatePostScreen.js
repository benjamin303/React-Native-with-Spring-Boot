import React from 'react';
import {ScrollView, StyleSheet, View, Text, TextInput} from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {useForm, Controller} from 'react-hook-form';

const CreatePostScreen = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onCreatePostPressed = data => {
    console.log(data);
    // validate user
    navigation.navigate('HomeScreen');
  };

  return (
    <View style={{flex: 1}}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Text
            style={{
              color: 'rgb(59,108,212)',
              fontSize: 42,
              fontWeight: '100',
              textAlign: 'center',
            }}>
            Create Post Screen
          </Text>
          <CustomInput
            name="title"
            placeholder="Title"
            control={control}
            rules={{required: 'Title is required',
            maxLength: {
                value: 50,
                message: 'Title should be maximum 50 characters long',
            }
        }}
          />
          <CustomInput
            name="content"
            placeholder="Content"
            control={control}
            multiline={true}
            rules={{
              required: 'Content is required',
              maxLength: {
                value: 500,
                message: 'Content should be maximum 500 characters long',
              },
            }}
          />

          <CustomButton text="Create Post" onPress={handleSubmit(onCreatePostPressed)} />
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
};

export default CreatePostScreen;
