import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

interface WinNumberProps {
  num: string;
  superScript: string;
  prize: string;
}

const WinNumber: React.FC<WinNumberProps> = ({num, superScript, prize}) => {
  return (
    <View>
      <View style={styles.winnerPlaceWrap}>
        <View style={styles.placementWrap}>
          <Text style={styles.placementText}>{num}</Text>
          <View style={{position: 'relative'}}>
            <Text style={styles.superScript}>{superScript}</Text>
          </View>
        </View>
        <View>
          <Text style={styles.lotteryNumber}>{prize}</Text>
        </View>
      </View>
    </View>
  );
};

export default WinNumber;
