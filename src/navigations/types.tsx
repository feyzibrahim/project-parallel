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
  UserList:undefined;
};

// Define the screen navigation props types
export type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;
export type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Login'
>;
export type DetailsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Details'
>;
export type AboutScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'About'
>;
export type PrivacyPolicyScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'PrivacyPolicy'
>;
export type LanguageScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Language'
>;
export type NotificationScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Notification'
>;

export type SettingsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Settings'
>;

// Define the screen route props types
export type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;
export type LoginScreenRouteProp = RouteProp<RootStackParamList, 'Login'>;
export type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;
export type AboutScreenRouteProp = RouteProp<RootStackParamList, 'About'>;
export type PrivacyPolicyScreenRouteProp = RouteProp<
  RootStackParamList,
  'PrivacyPolicy'
>;
export type LanguageScreenRouteProp = RouteProp<RootStackParamList, 'Language'>;
export type NotificationScreenRouteProp = RouteProp<
  RootStackParamList,
  'Notification'
>;
export type SettingsScreenRouteProp = RouteProp<RootStackParamList, 'Settings'>;
