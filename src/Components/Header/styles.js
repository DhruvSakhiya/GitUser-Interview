import {StyleSheet} from 'react-native'
import { H, W } from '../../Theme'

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignContent: 'center',
        paddingVertical: H(20),
        alignItems: 'center',
        backgroundColor:'#d0ddf2',
        paddingHorizontal:W(10)
      },
      profileText: {
        fontSize:W(18),
        alignSelf: 'center',
        lineHeight: 32,
        color: '#001a40',
        textAlign: 'center',
        marginLeft:W(10)
      },
})