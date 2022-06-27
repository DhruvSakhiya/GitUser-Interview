import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import BackHeader from '../../Components/Header'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Locations from '../../Fixtures/Locations';
import LocationItem from './LocationItem';
import { H, W } from '../../Theme';
import Modal from 'react-native-modal'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import style from './styles';

const HomeScreen = (props) => {

    const [locations, setLocations] = useState([]);
    const [locationModal, setLocationModal] = useState(false)
    useEffect(() => {
        AsyncStorage.getItem('locations').then((data) => {
            if (data) {
                const locationData = JSON.parse(data);
                setLocations(locationData)
            }
            else {
                AsyncStorage.setItem('locations', JSON.stringify(Locations));
                setLocations(Locations)
            }
        })
    }, [])

    const onRemovePress = (item) => {
        const newLocations = locations.filter((data) => data.id !== item.id)
        setLocations(newLocations)
        AsyncStorage.setItem('locations', JSON.stringify(newLocations))
    }

    return (
        <View style={style.container}>
            <BackHeader header='Home' />
            <FlatList data={locations} renderItem={({ item }) => <LocationItem onRemovePress={onRemovePress} item={item} />} />
            <View style={style.bottomContainer}>
                <TouchableOpacity onPress={() => setLocationModal(true)} style={style.button}>
                    <Text style={{ color: 'black' }}>Add Location</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.button} onPress={() => props.navigation.navigate('MapScreen')}>
                    <Text style={{ color: 'black' }}>Show Map</Text>
                </TouchableOpacity>
            </View>
            <Modal isVisible={locationModal} onDismiss={() => setLocationModal(false)} onBackButtonPress={() => setLocationModal(false)} onBackdropPress={() => setLocationModal(false)}>
                <View style={{ flex: 1, backgroundColor: 'white' }}>
                    <Text style={{ color: 'black' }}>Add Location</Text>
                </View>
            </Modal>

        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})