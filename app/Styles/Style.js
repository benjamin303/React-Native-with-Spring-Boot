'use strict';
import { createStyles, maxHeight } from 'react-native-media-queries';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export default createStyles({

    root: {
        alignItems: 'center',
        padding: 20,
      },
      logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
      },

});