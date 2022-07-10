import * as React from 'react';
import {Text, View, ScrollView, Image} from 'react-native';
import Benjamin from '../assets/Benjamin.png';
import StyleSheet from '../Styles/Style';

const Header = () => {
  return (
        <View style={StyleSheet.header}>
    <>
      {/* <View style={{flex: 1, backgroundColor: 'red'}}>
        <View style={StyleSheet.header}>
          <View>
            <Image source={Benjamin} />
          </View>
        </View>
      </View> */}
      <Text style={StyleSheet.headerTitle}>Benjamin</Text>
    </>
      </View>
  );
};
export default Header;
