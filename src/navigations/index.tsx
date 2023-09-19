import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {RootStackParamList} from './types';

import LoginPage from '@app/screens/LoginScreen/index';
import SettingsScreen from '@app/screens/Settings/SettingsScreen';
import NotificationScreen from '@app/screens/SettingsOptions/NotificationScreen';
import PrivacyPolicyScreen from '@app/screens/SettingsOptions/PrivacyPolicyScreen';
import LanguageScreen from '@app/screens/SettingsOptions/LanguageScreen';
import AboutScreen from '@app/screens/SettingsOptions/AboutScreen';
import BottomTabNavigation from './bottomTabNavigation';
import Userlist from '@app/screens/UserList';
import ResultAddScreen from '@app/screens/ResultAddScreen';
import UserAddList from '@app/screens/UserAddList';
import GameSettingsScreen from '@app/screens/GameSettingsScreen';
import PackageScreen from '@app/screens/PackageScreen/PackageScreen';
import PackageCreateScreen from '@app/screens/PackageCreateScreen';

const Navigation: React.FC = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <React.Fragment>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{headerShown: false, gestureEnabled: true}}>
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="BottomTab" component={BottomTabNavigation} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Notification" component={NotificationScreen} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} />
        <Stack.Screen name="Language" component={LanguageScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="UserList" component={Userlist} />
        <Stack.Screen name="ResultAddScreen" component={ResultAddScreen} />
        <Stack.Screen name="UserAddList" component={UserAddList} />
        <Stack.Screen
          name="GameSettingsScreen"
          component={GameSettingsScreen}
        />
        <Stack.Screen name="PackageScreen" component={PackageScreen} />
        <Stack.Screen
          name="PackageCreateScreen"
          component={PackageCreateScreen}
        />
      </Stack.Navigator>
    </React.Fragment>
  );
};

export default Navigation;
