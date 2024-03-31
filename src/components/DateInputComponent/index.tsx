import React, {useEffect, useState} from 'react';
import {COLORS} from '@app/constants/themes';
import {View, Text, Pressable, ScrollView, RefreshControl} from 'react-native';
import styles from './styles';
import CalendarPicker from 'react-native-calendar-picker';
import Icon from 'react-native-vector-icons/AntDesign';
import WonNumberComponent from '../WinningNumberComponent';
import GuaranteeNumbers from '../GuaranteeNumberComponent';
import ShareToWhatsapp from '../WhatsappShareComponent';
import {getResultByDate} from '@app/store/actions/admin/resultActions';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch} from '@app/store/index';
import {ActivityIndicator} from 'react-native-paper';
import {HomeScreenNavigationProp} from '@app/navigations/types';

type HomeScreenProps = {
  navigation: HomeScreenNavigationProp;
};

const DateInputComponent: React.FC<HomeScreenProps> = () => {
  const {game} = useSelector((state: any) => state.games);
  const [refreshing, setRefreshing] = useState(false);

  const dispatch = useDispatch<AppDispatch>();
  const {currentBooking, loading} = useSelector((state: any) => state?.result);

  const [date, setDate] = useState<string | null>(null);
  const [calender, setCalender] = useState(false);

  const dispatchFetchResult = (formattedDate: string) => {
    dispatch(getResultByDate({gameId: game._id, formattedDate}));
  };

  const onDateChange = (date: any) => {
    const parsedDate = new Date(date);
    const formattedDate = parsedDate.toISOString().split('T')[0];

    setDate(formattedDate);
    dispatchFetchResult(formattedDate);
    setCalender(true);
  };

  useEffect(() => {
    setCalender(false);
  }, [game]);

  const onPressDateInput = () => {
    if (!calender) {
      setCalender(true);
    } else {
      setCalender(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingView}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{paddingHorizontal: 24}}>
        <Pressable style={styles.dateInputField} onPress={onPressDateInput}>
          <View style={{marginRight: 10}}>
            <Icon name="calendar" size={22} color={COLORS.primary} />
          </View>
          {date ? (
            <Text>{date}</Text>
          ) : (
            <Text style={styles.placeholderText}>Result Date</Text>
          )}
        </Pressable>
      </View>
      {calender ? (
        <ScrollView
          style={{paddingHorizontal: 24}}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={() => setCalender(false)}
            />
          }>
          {currentBooking ? (
            <>
              <WonNumberComponent />
              <GuaranteeNumbers />
              <ShareToWhatsapp />
            </>
          ) : (
            <Text>Results are not published yet for {date}</Text>
          )}
        </ScrollView>
      ) : (
        <CalendarPicker
          weekdays={['S', 'M', 'T', 'W', 'T', 'F', 'S']}
          onDateChange={onDateChange}
          selectedDayTextColor={COLORS.white}
          selectedDayColor={COLORS.primary}
          dayLabelsWrapper={{borderTopWidth: 1, borderBottomWidth: 1}}
        />
      )}
    </View>
  );
};

export default DateInputComponent;
