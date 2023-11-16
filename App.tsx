import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/navigations';
import {Provider} from 'react-redux';
import store from './src/store';

const App = () => {
  LogBox.ignoreAllLogs();

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
