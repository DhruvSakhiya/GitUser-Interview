import { Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'

const LocationItem = ({ item, onRemovePress }) => {
    console.log('items', item)
    return (
        <View style={styles.itemContainer}>
            <Text style={styles.name}>{item.name}</Text>
            <TouchableOpacity onPress={() => onRemovePress(item)} style={styles.removeContainer}>
                <Text style={styles.removeText}>Remove</Text>
            </TouchableOpacity>
        </View>
    )
}

export default LocationItem