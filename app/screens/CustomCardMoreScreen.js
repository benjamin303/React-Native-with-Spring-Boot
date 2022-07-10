import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
  useWindowDimensions,
} from 'react-native';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;

const myIcon = <Icon name="long-arrow-left" size={30} color="#18A4E0" />;


const CustomCardMore = () => {
  const onPressBack = () => {
    navigation.navigate('HomeScreen');
  };
  const navigation = useNavigation();

    return (
      <View style={{ backgroundColor: 'white'}}>
        <View>
          <Text onPress={onPressBack} style={{ margin: '5%' }}>
            {myIcon}
          </Text>
        </View>
        
        <Card style={{ backgroundColor: 'white'}}>
          <Card.Title
            title="Card Title"
            // subtitle="Card Subtitle"
            left={LeftContent}
          />
          <Card.Content>
            <Paragraph>Card Content</Paragraph>
          </Card.Content>
          <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
          <Card.Content>
            <Paragraph>30. May 2020</Paragraph>
          </Card.Content>
        </Card>
      </View>
    );
  }


export default CustomCardMore;
