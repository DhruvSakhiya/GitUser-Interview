import { View, Text, TextInput } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import styles from './styles'
import colors from '../../theme/colors'

const SearchContainer = ({ value, onChange }) => {
    return (
        <View style={[styles.container]}>
            <View style={[styles.rowContainer]}>
                <TextInput value={value} onChangeText={(text) => onChange(text)} placeholder='Search' placeholderTextColor={colors.black} style={[styles.textInput]} />
                <View>
                    <FontAwesome name='search' size={25} color={colors.black} />
                </View>
            </View>
        </View>
    )
}

export default SearchContainer