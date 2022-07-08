import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import colors from '../../theme/colors'

const ItemContainer = (props) => {
  return (
    <View style={[styles.itemContainer, props.styles, { backgroundColor: props.isActive ? colors.lightPeriwinkle : 'transparent' }]}>
      {props.children}
    </View>
  )
}

export default ItemContainer