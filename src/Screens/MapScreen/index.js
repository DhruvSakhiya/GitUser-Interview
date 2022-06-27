import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import MapView, { Marker } from 'react-native-maps'
import AsyncStorage from '@react-native-async-storage/async-storage'
import BackHeader from '../../Components/Header'
import styles from './styles'

const MapScreen = (props) => {

    const [markers, setMarkers] = useState([])

    useEffect(() => {
        AsyncStorage.getItem('locations').then((data) => setMarkers(JSON.parse(data))).catch((e) => console.log('e', e))
    }, [])

    console.log('markers', markers)
    return (
        <View style={styles.container}>
            <BackHeader header={'Map'} onPress={() => props.navigation.goBack()} />
            <MapView
                style={styles.container}
                initialRegion={{
                    latitude: 23.033863,
                    longitude: 72.585022,
                    latitudeDelta: 0.04,
                    longitudeDelta: 0.05,
                }}
                minZoomLevel={0}
                maxZoomLevel={20}
            >
                {markers.length > 0 && markers.map((mark, index) =>
                    <Marker key={index} coordinate={{ latitude: parseFloat(mark.coords.lat), longitude: parseFloat(mark.coords.lng) }} title={mark.name} />
                )
                }
            </MapView>
        </View>
    )
}

export default MapScreen