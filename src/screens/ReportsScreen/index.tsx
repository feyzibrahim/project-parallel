import React, {useState, useEffect} from 'react';

import {View, Text} from 'react-native';

import {useSelector} from 'react-redux';

import styles from './styles';

import SafeAreaWrapper from '@app/components/Layout/SafeAreaWrapper';
import HeaderComponent from '@app/components/HeaderComponent';
import GameListBottomUp from '../../components/GameListBottomUp/GameListBottomUp';
import TableComponent from '@app/components/TableComponent';
import useReportHook from './useReportHook';

const ReportScreen = () => {
  const {game} = useSelector((state: any) => state?.game);

  const {
    isGameListVisible,
    screenTheme,
    gameDetail,
    bookingList,
    closeGameList,
    onPressGame,
    openGameList,
    TableHeaders,
  } = useReportHook();

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
      <View style={styles.container}>
        <Text style={styles.headerStyle}>Today Bookings</Text>
        <TableComponent tableData={bookingList} tableHeaders={TableHeaders} />
      </View>
      <GameListBottomUp
        isVisible={isGameListVisible}
        onClose={closeGameList}
        onPressGame={onPressGame}
      />
    </SafeAreaWrapper>
  );
};

export default ReportScreen;
