import React from 'react'
import { View, Text } from 'react-native'
import { BallIndicator } from 'react-native-indicators';
import Spinner from 'react-native-loading-spinner-overlay';
import colors from '../../theme/colors';

const Loader = ({ loading }) => {
  return (
    <Spinner
      visible={loading}
      customIndicator={<BallIndicator color={colors.primary} />}
    />
  )
}

export default Loader