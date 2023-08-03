import React, {useState} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import {
  HomeScreenNavigationProp,
  RootStackParamList,
} from '../../navigations/types';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import styles from './styles';
import GameListBottomUp from '../GameListBottomUp/GameListBottomUp';

type HomeScreenProps = {
  navigation: HomeScreenNavigationProp &
    DrawerNavigationProp<RootStackParamList>;
};

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const [isGameListVisible, setGameListVisible] = useState(false);

  const openGameList = () => {
    setGameListVisible(true);
  };

  const closeGameList = () => {
    setGameListVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.subHeader}>
          <Text style={styles.headerText}>Dear 1:00PM</Text>
          <TouchableOpacity style={styles.logoutButton} onPress={openGameList}>
            <Text style={styles.logoutButtonText}>Change</Text>
          </TouchableOpacity>
        </View>
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

      <GameListBottomUp isVisible={isGameListVisible} onClose={closeGameList} />
    </SafeAreaView>
  );
};

export default HomeScreen;
