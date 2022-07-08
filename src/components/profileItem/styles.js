import { StyleSheet } from 'react-native'
import { W } from '../../theme'
import colors from '../../theme/colors'

export default StyleSheet.create({
    rowCenter: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    flex1: {
        flex: 1
    },
    loginName: {
        color: colors.black,
        marginLeft: W(20),
        flex: 1,
        fontWeight: '700',
        textTransform: 'capitalize'
    },
    iconContainer: {
        marginLeft: W(10)
    },
    marginLeft10: {
        marginLeft: W(10)
    }
})