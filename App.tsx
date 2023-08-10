// import * as React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import HomeScreen from './pages/HomeScreen';
// import LoginPage from './pages/auth/LoginPage';
// import SettingsScreen from './pages/SettingsScreen';
// import NotificationScreen from './pages/settings/NotificationScreen';
// import PrivacyPolicyScreen from './pages/settings/PrivacyPolicyScreen';
// import LanguageScreen from './pages/settings/LanguageScreen';
// import AboutScreen from './pages/settings/AboutScreen';

// const Stack = createNativeStackNavigator();

// const App: React.FC = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="HomeScreen">
//         <Stack.Screen
//           name="HomeScreen"
//           component={HomeScreen}
//           options={{title: 'Home'}}
//         />
//         <Stack.Screen
//           name="Login"
//           component={LoginPage}
//           options={{headerShown: false}}
//         />
//         <Stack.Screen
//           name="Settings"
//           component={SettingsScreen}
//           options={{headerShown: false}}
//         />
//         <Stack.Screen
//           name="Notification"
//           component={NotificationScreen}
//           options={{headerShown: false}}
//         />
//         <Stack.Screen
//           name="PrivacyPolicy"
//           component={PrivacyPolicyScreen}
//           options={{headerShown: false}}
//         />
//         <Stack.Screen
//           name="Language"
//           component={LanguageScreen}
//           options={{headerShown: false}}
//         />
//         <Stack.Screen
//           name="About"
//           component={AboutScreen}
//           options={{headerShown: false}}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;

// import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {createDrawerNavigator} from '@react-navigation/drawer';
// import HomeScreen from './pages/HomeScreen';
// import DetailsScreen from './pages/DetailsScreen';
// import AboutScreen from './pages/AboutScreen';

// const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();

// // Define the bottom tab navigator
// const BottomTabNavigator = () => {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="Details" component={DetailsScreen} />
//       <Tab.Screen name="About" component={AboutScreen} />
//     </Tab.Navigator>
//   );
// };

// // Define the drawer navigator
// const DrawerNavigator = () => {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="Home" component={BottomTabNavigator} />
//       <Drawer.Screen name="Home" component={BottomTabNavigator} />
//       {/* Add other screens to the drawer if needed */}
//     </Drawer.Navigator>
//   );
// };

// const App: React.FC = () => {
//   return (
//     <NavigationContainer>
//       <DrawerNavigator />
//     </NavigationContainer>
//   );
// };

// export default App;

import React, {useEffect, useRef} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {LogBox, Text, TextInput} from 'react-native';
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
