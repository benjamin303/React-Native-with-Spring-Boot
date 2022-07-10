'use strict';
import {createStyles, maxHeight} from 'react-native-media-queries';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default createStyles({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  background: {
    width: '100%',
    height: '100%',
    backgroundColor: 'red'
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
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
    textAlign: 'center',
  },
  link: {
    color: '#FDB075',
  },
  textOnPress: {
    color: '#18a4e0',
  },
  registerLogin: {
    flexDirection: 'row',
    marginTop: 40,
  },

  header: {
    // position: 'absolute',
    // width: '100%',
    // marginTop: -30,
    // height: '9%',
    // backgroundColor: '#ECF4F1',
    textAlign: 'center',
    // alignItems: 'center',
    paddingLeft: '5%',
    paddingRight: '5%',
    paddingTop: '2%',
    paddingBottom: '2%',
    backgroundColor: '#D1E0DB',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    height: '7%',
  },
  headerTitle: {
    fontFamily: 'TESLA',
    color: '#080E2C',
    fontSize: 35,
  },

  footer: {
    width: '100%',
    height: '7%',
    backgroundColor: '#D1E0DB',
    alignItems: 'center',
    justifyContent: 'center',
  },


});
