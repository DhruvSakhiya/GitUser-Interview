import { StyleSheet } from 'react-native'
import { H, W } from '../../Theme'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    bottomContainer: {
        flexDirection: 'row',
        marginBottom: H(20),
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 26,
        marginHorizontal: W(20)
    },
    button: {
        borderWidth: 1,
        flex: 0.49,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        borderRadius: 16
    },
    itemContainer: {
        paddingHorizontal: W(20),
        paddingVertical: H(20),
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.1)',
        flexDirection: 'row',
        alignItems: 'center'
    },
    name: {
        fontSize: W(16),
        color: 'black',
        flex: 1
    },
    removeText: {
        fontSize: W(12),
        color: 'black'
    },
    removeContainer: {
        borderWidth: 1,
        padding: 10,
        borderRadius: 20
    }
})