import React, {useEffect, useState} from 'react';
import {Text, ScrollView} from 'react-native';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';


const UserListScreen = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [users, setUsers] = useState([]);
  
    //push data
    const handleClick = (e) => {
      e.preventDefault();
      const user = { username, email, password };
      console.log(user);
      fetch("http://192.168.1.9:8080/user/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      }).then(() => {
        console.log("New User added");
      });
    };
  
    //call data
    useEffect(() => {
      fetch("http://192.168.1.9:8080/user/getAll")
        .then((res) => res.json())
        .then((result) => {
          setUsers(result);
        });
    }, []);


  return (
    <ScrollView>
      <Text>Posts Screen</Text>
      {users.map((user) => (
        <Card key={user.id}>
          <Card.Title
            title={user.username}
          />
          <Card.Content>
            <Paragraph>{user.email}</Paragraph>
            {console.log(user.username)}
          </Card.Content>
          <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
        </Card>
      ))}
    </ScrollView>
  );
};

export default UserListScreen;
