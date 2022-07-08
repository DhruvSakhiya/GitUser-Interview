import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import ItemContainer from '../itemContainer'
import FastImageComponent from '../imageComponent'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import styles from './styles'

const ProfileItem = ({ item, onToggle, index }) => {
    const { isBookMarked, login, avatar_url } = item
    return (
        <TouchableOpacity onPress={() => onToggle(item, index)}>
            <ItemContainer isActive={isBookMarked}>
                <View style={[styles.rowCenter]}>
                    <View style={[styles.rowCenter, styles.flex1]}>
                        <FastImageComponent url={avatar_url} />
                        <Text style={[styles.loginName]}>{login}</Text>
                    </View>
                    {isBookMarked &&
                        <View style={[styles.marginLeft10]}>
                            <FontAwesome name='bookmark' size={20} color='black' />
                        </View>}

                </View>
            </ItemContainer>
        </TouchableOpacity>
    )
}

export default ProfileItem
