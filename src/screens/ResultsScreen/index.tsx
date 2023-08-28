import React, {useState} from 'react';

import {ScrollView, TouchableOpacity} from 'react-native';
import styles from './styles';
import SafeAreaWrapper from '@app/components/Layout/SafeAreaWrapper';
import {COLORS} from '@app/constants/themes';
import HeaderComponent from '@app/components/HeaderComponent';
import GameListBottomUp from '../../components/GameListBottomUp/GameListBottomUp';
import DateInputComponent from '@app/components/DateInputComponent';
import {HomeScreenNavigationProp} from '@app/navigations/types';
import Icon from 'react-native-vector-icons/Octicons';
import useResultHook from './useResultHook';
import {useSelector} from 'react-redux';

type HomeScreenProps = {
  navigation: HomeScreenNavigationProp;
};
const ResultScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const {game} = useSelector((state: any) => state?.game);

  const {
    isGameListVisible,
    screenTheme,
    gameDetail,
    closeGameList,
    onPressGame,
    openGameList,
  } = useResultHook();

  return (
    <SafeAreaWrapper
      statusbar={gameDetail ? gameDetail?.theme?.primary : screenTheme.primary}>
      <HeaderComponent
        openGameList={openGameList}
        containerStyle={{
          backgroundColor: gameDetail
            ? gameDetail?.theme?.primary
            : screenTheme.primary,
        }}
        buttonStyle={{
          backgroundColor: gameDetail
            ? gameDetail?.theme?.secondary
            : screenTheme.secondary,
        }}
        headerTextStyle={{
          color: gameDetail
            ? gameDetail?.theme?.secondary
            : screenTheme.secondary,
        }}
        user={
          gameDetail
            ? gameDetail?.game?.gameName + ' ' + gameDetail?.game?.time
            : game[0]?.gameName + ' ' + game[0]?.time
        }
      />
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 30}}>
        <DateInputComponent />
      </ScrollView>
      <GameListBottomUp
        isVisible={isGameListVisible}
        onClose={closeGameList}
        onPressGame={onPressGame}
      />
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
