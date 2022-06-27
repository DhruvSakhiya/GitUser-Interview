import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import Images from '../../Theme/Image'
import styles from './styles'

const BackHeader = ({onPress,header}) => {
  return (
    <View style={styles.container}>
    {onPress!=undefined &&
    <TouchableOpacity onPress={onPress}>
    <Image
      source={Images.BackImage}
    />
    </TouchableOpacity>}
    <View style={{ justifyContent: 'center' }}>
      <Text style={[styles.profileText]}>
        {header}
      </Text>
    </View>
  </View>
  )
}

export default BackHeader

