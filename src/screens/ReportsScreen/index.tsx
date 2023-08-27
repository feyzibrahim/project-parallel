import React, {useState, useEffect} from 'react';

import {View, Text} from 'react-native';

import {useDispatch} from 'react-redux';
import {AppDispatch} from '@app/store/index';

import styles from './styles';

import SafeAreaWrapper from '@app/components/Layout/SafeAreaWrapper';
import {COLORS} from '@app/constants/themes';
import HeaderComponent from '@app/components/HeaderComponent';
import GameListBottomUp from '../../components/GameListBottomUp/GameListBottomUp';
import TableComponent from '@app/components/TableComponent';
import {getGameBookings} from '@app/store/slices/gameSlice';

const ReportScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [isGameListVisible, setGameListVisible] = useState(false);
  const [bookingList, setBookingList] = useState<any>([]);

  useEffect(() => {
    getGameBooking();
  }, []);

  const openGameList = () => {
    setGameListVisible(true);
  };

  const closeGameList = () => {
    setGameListVisible(false);
  };

  const getGameBooking = async () => {
    const resultAction = await dispatch(getGameBookings(null));
    if (getGameBookings.fulfilled.match(resultAction)) {
      setBookingList(resultAction?.payload);
      console.log('Bookings Listed=====', resultAction?.payload);
    } else {
      const errorResult: any = resultAction?.payload;
      console.log('Bookings Listed===ERROR=====', errorResult);
    }
  };

  return (
    <SafeAreaWrapper statusbar={COLORS.darkBlueShade}>
      <HeaderComponent openGameList={openGameList} />
      <View style={styles.container}>
        <Text style={styles.headerStyle}>Today Bookings</Text>
        <TableComponent tableData={bookingList} />
      </View>
      <GameListBottomUp
        isVisible={isGameListVisible}
        onClose={closeGameList}
        onPressGame={() => {}}
      />
    </SafeAreaWrapper>
  );
};

export default ReportScreen;
