import { Text, View} from 'react-native'
import React from 'react'
import styles from './styles'

const BackHeader = ({onPress,header}) => {
  return (
    <View style={styles.container}>
    <View style={styles.justifyCenter}>
      <Text style={[styles.headerText]}>
        {header}
      </Text>
    </View>
  </View>
  )
}

export default BackHeader

