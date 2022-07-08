import React from 'react'
import FastImage from 'react-native-fast-image'
import { H } from '../../theme'

const FastImageComponent = ({ height = 80, width = 80, borderRadius = 40, url }) => {
    return (
        <FastImage style={{ height: H(height), width: H(width), borderRadius: H(borderRadius) }} source={{ uri: url, priority: 'high' }} />
    )
}

export default FastImageComponent