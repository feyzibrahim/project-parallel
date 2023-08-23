import React, {useState} from 'react';

import {View, Text, ScrollView} from 'react-native';
import styles from './styles';
import SafeAreaWrapper from '@app/components/Layout/SafeAreaWrapper';
import {COLORS} from '@app/constants/themes';
import HeaderComponent from '@app/components/HeaderComponent';
import GameListBottomUp from '../../components/GameListBottomUp/GameListBottomUp';
import DateInputComponent from '@app/components/DateInputComponent';

const ResultScreen = () => {
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
    </SafeAreaWrapper>
  );
};

export default ResultScreen;
// Some major changes here just for pushing
