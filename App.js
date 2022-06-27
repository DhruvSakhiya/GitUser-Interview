/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import 'react-native-gesture-handler';
import React,{useState,useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,TouchableOpacity,
  StatusBar
} from 'react-native';
import Navigation from './src/Navigation'

const App = () => {
  

  return (
    <View style={{flex:1}}>
    <StatusBar barStyle='light-content'/>
<SafeAreaView style={{flex:1}}>
     <Navigation/>
     </SafeAreaView>
    </View>
    
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
