/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar
} from 'react-native';
import { Provider as StoreProvider } from 'react-redux';
import Navigation from './src/navigation'
import store, { persistor } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => {
  return (
    <StoreProvider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaView style={{ flex: 1 }}>
          <StatusBar barStyle='light-content' />
          <Navigation />
        </SafeAreaView>
      </PersistGate>
    </StoreProvider>
  );
};

export default App;
