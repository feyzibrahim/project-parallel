import React, {useState} from 'react';
import {COLORS} from '@app/constants/themes';
import {View, Text, Pressable} from 'react-native';
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
import FloatingActionButton from '@app/components/FloatingButton';
import {HomeScreenNavigationProp} from '@app/navigations/types';

type HomeScreenProps = {
  navigation: HomeScreenNavigationProp;
};

const DateInputComponent: React.FC<HomeScreenProps> = ({navigation}) => {
  const dispatch = useDispatch<AppDispatch>();
  const {currentBooking, loading} = useSelector((state: any) => state?.result);

  const [date, setDate] = useState<string | null>(null);
  const [calender, setCalender] = useState(false);

  const dispatchFetchResult = (formattedDate: string) => {
    dispatch(getResultByDate(formattedDate));
  };

  const onDateChange = (date: any) => {
    const parsedDate = new Date(date);
    const formattedDate = parsedDate.toISOString().split('T')[0];

    setDate(formattedDate);
    dispatchFetchResult(formattedDate);
    setCalender(true);
  };

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
    <View style={{flex: 1}}>
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
      {calender ? (
        <View>
          {currentBooking ? (
            <>
              <WonNumberComponent />
              <GuaranteeNumbers />
              <ShareToWhatsapp />
            </>
          ) : (
            <Text>No Result on this date</Text>
          )}
        </View>
      ) : (
        <CalendarPicker
          weekdays={['S', 'M', 'T', 'W', 'T', 'F', 'S']}
          onDateChange={onDateChange}
          selectedDayTextColor={COLORS.white}
          selectedDayColor={COLORS.primary}
          dayLabelsWrapper={{borderTopWidth: 1, borderBottomWidth: 1}}
        />
      )}
      <FloatingActionButton
        iconName="plus"
        onPressButton={() => {
          navigation.navigate('ResultAddScreen');
        }}
        style={styles.floatingButton}
      />
    </View>
  );
};

export default DateInputComponent;
