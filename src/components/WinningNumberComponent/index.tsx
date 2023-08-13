import React from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './styles';
const DUMMYDATA = [
  {
    id: 1,
    place: 1,
    superscript:'st',
    lotteryNumber: 987,
  },
  {
    id: 2,
    place: 2,
    superscript:'nd',
    lotteryNumber: 690,
  },
  {
    id: 3,
    place: 3,
    superscript:'rd',
    lotteryNumber: 999,
  },
  {
    id: 4,
    place: 4,
    superscript:'th',
    lotteryNumber: 420,
  },
  {
    id: 5,
    place: 5,
    superscript:'th',
    lotteryNumber: 858,
  },
];

const WonNumberComponent = () => {
  const renderItem = (item: any) => {
    return (
      <View style={styles.winnerPlaceWrap}>
        <View style={styles.placementWrap}>
            <Text style={styles.placmentText}>{item?.place}</Text>
            <View style={{ position: 'relative'}}>
              <Text style={styles.superScript}>{item?.superscript}</Text>
            </View>
        </View>
        <View>
          <Text style={styles.lotteryNumber}>{item?.lotteryNumber}</Text>
        </View>
      </View>
    );
  };

  return (
    <View>
      <Text style={styles.header}>Winning Numbers</Text>
      <View>
        <FlatList
          data={DUMMYDATA}
          renderItem={item => renderItem(item?.item)}
          keyExtractor={(item: any) => item?.id}
          numColumns={2}
        />
      </View>
    </View>
  );
};

export default WonNumberComponent;
