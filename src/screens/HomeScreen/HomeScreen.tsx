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
import SafeAreaWrapper from '@app/components/Layout/SafeAreaWrapper';
import HeaderComponent from '@app/components/HeaderComponent';
import { COLORS } from '@app/constants/themes';

type HomeScreenProps = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const [isGameListVisible, setGameListVisible] = useState(false);

  const openGameList = () => {
    console.log('object')
    setGameListVisible(true);
  };

  const closeGameList = () => {
    setGameListVisible(false);
  };

  // useEffect(() => {
  //   navigation.setOptions({
  //     headerTitle: 'Dear 1:00 PM',
  //     headerRight: () => (
  //       <TouchableOpacity style={styles.logoutButton} onPress={openGameList}>
  //         <Text style={styles.logoutButtonText}>Change</Text>
  //       </TouchableOpacity>
  //     ),
  //   });
  // }, [navigation]);

  return (
    <SafeAreaWrapper containerStyle={styles.container} statusbar={COLORS.darkBlueShade}>
      <HeaderComponent  openGameList={openGameList}/>
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
    </SafeAreaWrapper>
  );
};

export default HomeScreen;
