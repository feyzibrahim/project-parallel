import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {useSelector} from 'react-redux';
import WinNumber from './WinNumber';

const WonNumberComponent = () => {
  const {currentBooking} = useSelector((state: any) => state?.result);

  return (
    <View>
      <Text style={styles.header}>Winning Numbers</Text>
      <View style={styles.winNumberParent}>
        {/* First Prize */}
        <WinNumber
          num="1"
          superScript="st"
          prize={currentBooking?.firstPrize}
        />
        {/* Second Prize */}
        <WinNumber
          num="2"
          superScript="nd"
          prize={currentBooking?.secondPrize}
        />
        {/* Third Prize */}
        <WinNumber
          num="3"
          superScript="rd"
          prize={currentBooking?.thirdPrize}
        />
        {/* Fourth Prize */}
        <WinNumber
          num="4"
          superScript="th"
          prize={currentBooking?.fourthPrize}
        />
        {/* Fifth Prize */}
        <WinNumber
          num="5"
          superScript="th"
          prize={currentBooking?.fifthPrize}
        />
      </View>
    </View>
  );
};

export default WonNumberComponent;

// id: 1,
// place: 1,
// superscript:'st',
// lotteryNumber: 987,
