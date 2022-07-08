import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'

const Container = (props) => {
  return (
    <View style={[styles.container, props.style]}>
      {props.children}
    </View>
  )
}

export default Container