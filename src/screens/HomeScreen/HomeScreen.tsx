import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import {HomeScreenNavigationProp} from '../../navigations/types';
import styles from './styles';
import GameListBottomUp from '../GameListBottomUp/GameListBottomUp';

type HomeScreenProps = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const [isGameListVisible, setGameListVisible] = useState(false);

  const openGameList = () => {
    setGameListVisible(true);
  };

  const closeGameList = () => {
    setGameListVisible(false);
  };

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Dear 1:00 PM',
      headerRight: () => (
        <TouchableOpacity style={styles.logoutButton} onPress={openGameList}>
          <Text style={styles.logoutButtonText}>Change</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Customer"
            placeholderTextColor="#888"
          />
        </View>
      </ScrollView>

      <GameListBottomUp isVisible={isGameListVisible} onClose={closeGameList} />
    </SafeAreaView>
  );
};

export default HomeScreen;
