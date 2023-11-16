import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

// Define the screen names as string literals
export type RootStackParamList = {
  BottomTab: undefined;
  Home: undefined;
  Login: {itemId: number};
  Settings: {itemId: number};
  Details: {itemId: number};
  About: {itemId: number};
  PrivacyPolicy: {itemId: number};
  Language: {itemId: number};
  Notification: {itemId: number};
  Profile: undefined;
  Report: undefined;
  Result: undefined;
  UserList: undefined;
  ResultAddScreen: undefined;
  UserAddList: undefined;
  GameSettingsScreen: undefined;
  PackageScreen: undefined;
  PackageCreateScreen: undefined;
  Test: undefined;
};

// Define the screen navigation props types
export type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;

// Define the screen route props types
export type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;
