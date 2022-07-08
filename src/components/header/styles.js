import { StyleSheet } from 'react-native'
import { H, W } from '../../theme'
import colors from '../../theme/colors'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignContent: 'center',
    paddingVertical: H(20),
    alignItems: 'center',
    backgroundColor: colors.primary,
    paddingHorizontal: W(10)
  },
  headerText: {
    fontSize: W(20),
    alignSelf: 'center',
    lineHeight: 32,
    color: colors.lightPeriwinkle,
    textAlign: 'center',
    marginLeft: W(10),
    fontWeight: '600'
  },
  justifyCenter:{
    justifyContent:'center'
  }
})