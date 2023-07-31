import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {HomeScreenNavigationProp} from '../../navigations/types';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {RootStackParamList} from '../../navigations/types';
import styles from './styles';

type HomeScreenProps = {
  navigation: HomeScreenNavigationProp &
    DrawerNavigationProp<RootStackParamList>;
};

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome to Parallel</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.welcomeText}>Hello, User!</Text>
        <Text style={styles.description}>
          This is a dummy homepage for your app. You can customize it to show
          relevant content and features.
        </Text>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => navigation.navigate('Login', {itemId: 1})}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => navigation.navigate('Settings', {itemId: 1})}>
          <Text style={styles.logoutButtonText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};


export default HomeScreen;
