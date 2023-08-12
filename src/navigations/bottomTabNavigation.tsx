import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RootStackParamList} from './types';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import HomeScreen from '@app/screens/HomeScreen/HomeScreen';
import ReportScreen from '@app/screens/ReportsScreen';
import ResultScreen from '@app/screens/ResultsScreen';
import ProfileScreen from '@app/screens/ProfileScreen/ProfileScreen';
import Icon from 'react-native-vector-icons/Octicons';

const BottomTabNavigation = () => {
  const BottomTab = createBottomTabNavigator<RootStackParamList>();

  return (
    <>
      <BottomTab.Navigator backBehavior={'history'} initialRouteName={'Home'}>
        <BottomTab.Screen
          name={'Home'}
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarLabelStyle: {fontSize: 12},
            headerTitle: 'Dear 1:00 PM',
            tabBarIcon: ({color, size}) => (
              <Icon name="plus-circle" size={size} color={color} />
            ),
          }}
        />
        <BottomTab.Screen
          name={'Report'}
          component={ReportScreen}
          options={{
            tabBarLabel: 'Report',
            tabBarLabelStyle: {fontSize: 12},
            tabBarIcon: ({color, size}) => (
              <Icon name="plus-circle" size={size} color={color} />
            ),
            headerShown: false,
          }}
        />
        <BottomTab.Screen
          name={'Result'}
          component={ResultScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="plus-circle" size={size} color={color} />
            ),
            tabBarLabel: 'Result',
            tabBarLabelStyle: {fontSize: 12},
            headerShown: false,
          }}
        />
        <BottomTab.Screen
          name={'Profile'}
          component={ProfileScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="plus-circle" size={size} color={color} />
            ),
            tabBarLabel: 'Profile',
            tabBarLabelStyle: {fontSize: 12},
            headerShown: false,
          }}
        />
      </BottomTab.Navigator>
    </>
  );
};
const styles = StyleSheet.create({
  logoutButton: {
    backgroundColor: '#FF6F6F',
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 30,
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default BottomTabNavigation;
