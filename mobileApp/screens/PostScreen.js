import React, {useEffect, useState} from 'react';
import {Image, ScrollView, Text} from 'react-native';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';

const PostScreen = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://192.168.1.9:8080/post/getAll')
      .then(res => res.json())
      .then(result => {
        setPosts(result);
      });
  }, []);

  return (
    <ScrollView>
      <Text>Posts Screen</Text>
      {posts.map((post) => (
        <Card key={post.id}>
          <Card.Title
            title={post.title}
          />
          <Card.Content>
            <Paragraph>{post.description}</Paragraph>
          </Card.Content>
          <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
        </Card>
      ))}
    </ScrollView>
  );
};

export default PostScreen;
