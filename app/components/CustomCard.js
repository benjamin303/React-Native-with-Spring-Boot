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
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';

const CustomCard = () => {
  const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;

  const navigation = useNavigation();

  const onSeeMorePress = () => {
    navigation.navigate('CustomCardMoreScreen');
  };

  return (
    <Card>
      <Card.Content>
        <Title>Card title</Title>
        {/* <Paragraph>Card Content</Paragraph> */}
      </Card.Content>
      <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
      <Card.Actions>
        <Button onPress={onSeeMorePress}>See more.</Button>
      </Card.Actions>
      <Card.Content>
        <Paragraph>30. May 2020</Paragraph>
      </Card.Content>
      <View
  style={{
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingBottom: 15
  }}
/>
    </Card>
  );
};

export default CustomCard;
