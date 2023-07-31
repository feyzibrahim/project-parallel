import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootStackParamList } from './types';

import HomeScreen from '@app/screens/HomeScreen/HomeScreen';
import ReportScreen from '@app/screens/ReportsScreen';
import ResultScreen from '@app/screens/ResultsScreen';


const BottomTabNavigation = () => {
    const BottomTab = createBottomTabNavigator<RootStackParamList>();

    return (
      <>
        <BottomTab.Navigator
          backBehavior={'history'}
          initialRouteName={'Home'}
          screenOptions={{
            headerShown: false,
          }}>
          <BottomTab.Screen
            name={'Home'}
            component={HomeScreen}
            options={{
              tabBarLabel: 'Home',
              tabBarLabelStyle: {fontSize: 12},
              headerShown: false,
            }}
          />
          <BottomTab.Screen
            name={'Report'}
            component={ReportScreen}
            options={{
              tabBarLabel: 'Report',
              tabBarLabelStyle: {fontSize: 12},
              headerShown: false,
            }}
          />
          <BottomTab.Screen
            name={'Result'}
            component={ResultScreen}
            options={{
              tabBarLabel: 'Result',
              tabBarLabelStyle: {fontSize: 12},
              headerShown: false,
            }}
          />
        </BottomTab.Navigator>
      </>
    );
  
}

export default BottomTabNavigation;