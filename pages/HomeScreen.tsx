import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {HomeScreenNavigationProp} from './types';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {RootStackParamList} from './types';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 30,
  },
  footer: {
    paddingVertical: 20,
    alignItems: 'center',
  },
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

export default HomeScreen;
