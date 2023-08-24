import React, {useState} from 'react';

import {Text, ScrollView, TouchableOpacity} from 'react-native';
import styles from './styles';
import SafeAreaWrapper from '@app/components/Layout/SafeAreaWrapper';
import {COLORS} from '@app/constants/themes';
import HeaderComponent from '@app/components/HeaderComponent';
import GameListBottomUp from '../../components/GameListBottomUp/GameListBottomUp';
import DateInputComponent from '@app/components/DateInputComponent';
import {HomeScreenNavigationProp} from '@app/navigations/types';
import Icon from 'react-native-vector-icons/Octicons';

type HomeScreenProps = {
  navigation: HomeScreenNavigationProp;
};
const ResultScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const [isGameListVisible, setGameListVisible] = useState(false);

  const openGameList = () => {
    setGameListVisible(true);
  };

  const closeGameList = () => {
    setGameListVisible(false);
  };

  return (
    <SafeAreaWrapper statusbar={COLORS.darkBlueShade}>
      <HeaderComponent openGameList={openGameList} />
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 30}}>
        <DateInputComponent />
      </ScrollView>
      <GameListBottomUp isVisible={isGameListVisible} onClose={closeGameList} />
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => {
          navigation.navigate('ResultAddScreen');
        }}>
        <Icon name="plus" size={18} color={'#ffffff'} />
      </TouchableOpacity>
    </SafeAreaWrapper>
  );
};

export default ResultScreen;
// Some major changes here just for pushing
