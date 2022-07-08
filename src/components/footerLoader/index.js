import { View, Text,ActivityIndicator } from 'react-native'
import React from 'react'
import colors from '../../theme/colors'
import styles from './styles'

const FooterLoader = ({loading}) => {
if(loading){
  return (
    <View style={[styles.container]}>
      <ActivityIndicator color={colors.primary} size={'large'}/>
      <Text style={[styles.textBlack]}>Loading Users</Text>
    </View>
  )
}
  else return null
}

export default FooterLoader