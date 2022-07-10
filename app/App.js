/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import { SafeAreaView, StyleSheet, Text, } from 'react-native';
 import Navigation from './navigation';
 import { NavigationContainer } from '@react-navigation/native';
 import Tabs from './components/Tabs';
 
 const App = () => {
   return (
    <>
     <SafeAreaView style={styles.root}>
       <Navigation />
     {/* <NavigationContainer>
        <Tabs />
     </NavigationContainer> */}
     </SafeAreaView>
    </>
   );
 };
 
 const styles = StyleSheet.create({
   root: {
     flex: 1,
     backgroundColor: '#F9FBFC'
   }
 });
 
 export default App;
 