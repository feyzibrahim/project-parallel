import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '@app/screens/HomeScreen/HomeScreen';
import LoginPage from '@app/screens/auth/LoginPage';
import SettingsScreen from '@app/screens/Settings/SettingsScreen';
import NotificationScreen from '@app/screens/SettingsOptions/NotificationScreen';
import PrivacyPolicyScreen from '@app/screens/SettingsOptions/PrivacyPolicyScreen';
import LanguageScreen from '@app/screens/SettingsOptions/LanguageScreen';
import AboutScreen from '@app/screens/SettingsOptions/AboutScreen';

export type RootStackParamList = {
  HomeScreen: undefined;
  Login: undefined;
  Settings: undefined;
  Notification: undefined;
  PrivacyPolicy: undefined;
  Language: undefined;
  About: undefined;
};

const Navigation: React.FC = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <React.Fragment>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{headerShown: false, gestureEnabled: true}}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Notification" component={NotificationScreen} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} />
        <Stack.Screen name="Language" component={LanguageScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </React.Fragment>
  );
};

export default Navigation;
