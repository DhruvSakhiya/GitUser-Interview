import { StyleSheet } from 'react-native'
import { H, W } from '../../theme'
import colors from '../../theme/colors'

export default StyleSheet.create({
    container: {
        borderWidth: 1,
        marginBottom: H(20),
        height: H(50),
        justifyContent: 'center',
        borderColor: colors.black,
        borderRadius: 6
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        paddingHorizontal: W(10)
    },
    textInput: {
        flex: 1,
        color: 'black',
        fontSize: W(15)
    }
})