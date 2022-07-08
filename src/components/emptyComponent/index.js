import { View, Text } from 'react-native'
import React from 'react'
import { W } from '../../theme'
import styles from './styles'

const emptyComponent = () => {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.bodyText]}>No Data Found!</Text>
    </View>
  )
}

export default emptyComponent