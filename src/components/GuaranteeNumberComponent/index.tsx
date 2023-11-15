import React from 'react';
import {View, Text, FlatList} from 'react-native';

import styles from './styles';
import {useSelector} from 'react-redux';

const GuaranteeNumbers = () => {
  const {currentBooking} = useSelector((state: any) => state?.result);

  const renderItem = ({item}: any) => {
    return (
      <View style={styles.ticketNumberWrap}>
        <Text style={styles.ticketNumberText}>{item}</Text>
      </View>
    );
  };
  return (
    <View>
      <Text style={styles.header}>Guarantee</Text>
      <View>
        <FlatList
          data={currentBooking?.guarantee}
          renderItem={item => renderItem(item)}
          numColumns={6}
        />
      </View>
    </View>
  );
};

export default GuaranteeNumbers;
