import React, {useState} from 'react';
import {COLORS} from '@app/constants/themes';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';

import CalendarPicker from 'react-native-calendar-picker';
import Icon from 'react-native-vector-icons/AntDesign';
import WonNumberComponent from '../WinningNumberComponent';
import GuaranteeNumbers from '../GuaranteeNumberComponent';
import ShareToWhatsapp from '../WhatsappShareComponent';

const DateInputComponent = () => {
  const [date, setDate] = useState(null);
  const [calender, setCalender] = useState(true);

  const onDateChange = (date: any) => {
    setDate(date.toString());
    setCalender(true);
    console.log(date);
  };

  const onPressDateInput = () => {
    if (!calender) {
      setCalender(true);
    } else {
      setCalender(false);
    }
  };

  return (
    <View>
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
          <WonNumberComponent />
          <GuaranteeNumbers />
          <ShareToWhatsapp />
        </View>
      ) : (
        <CalendarPicker
          weekdays={['S', 'M', 'T', 'W', 'T', 'F', 'S']}
          onDateChange={onDateChange}
          selectedDayTextColor={COLORS.white}
          selectedDayColor={COLORS.primary}
          dayLabelsWrapper={{borderTopWidth: 0, borderBottomWidth: 0}}
        />
      )}
    </View>
  );
};

export default DateInputComponent;
