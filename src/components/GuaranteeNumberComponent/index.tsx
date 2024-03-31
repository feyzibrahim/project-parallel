import React from 'react';
import {View, Text, FlatList} from 'react-native';

import styles from './styles';
import {useSelector} from 'react-redux';

const GuaranteeNumbers = () => {
  const {currentBooking} = useSelector((state: any) => state?.result);

  return (
    <View>
      <Text style={styles.header}>Guarantee</Text>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          // justifyContent: 'space-between',
          gap: 14,
        }}>
        {currentBooking &&
          currentBooking.guarantee.map((item: any, index: number) => {
            return (
              <View style={styles.ticketNumberWrap} key={index}>
                <Text style={styles.ticketNumberText}>{item}</Text>
              </View>
            );
          })}
      </View>
    </View>
  );
};

export default GuaranteeNumbers;

{
  /* <FlatList
          data={currentBooking?.guarantee}
          renderItem={item => renderItem(item)}
          numColumns={5}
        /> */
}
