import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';

type GameListBottomUpProps = {
  isVisible: boolean;
  onClose: () => void;
};

type Competition = {
  id: number;
  name: string;
  details: string;
  time: string;
  primary: string;
  secondary: string;
};

const competitions: Competition[] = [
  {
    id: 1,
    name: 'Dear',
    details: 'Assam',
    time: '1:00PM',
    primary: '#E7E7FF',
    secondary: '#5538EE',
  },
  {
    id: 2,
    name: 'KL',
    details: 'Kerala',
    time: '3:00PM',
    primary: '#ECFCE5',
    secondary: '#198155',
  },
  {
    id: 3,
    name: 'Dear',
    details: 'Assam',
    time: '6:00PM',
    primary: '#C9F0FF',
    secondary: '#0065D0',
  },
  {
    id: 4,
    name: 'Dear',
    details: 'Assam',
    time: '8:00PM',
    primary: '#FFEFD7',
    secondary: '#A05E03',
  },
];

const GameListBottomUp: React.FC<GameListBottomUpProps> = ({
  isVisible,
  onClose,
}) => {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      backdropOpacity={0.2}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      animationInTiming={400}
      animationOutTiming={300}
      scrollHorizontal={true}
      swipeDirection={['down']}
      style={styles.modal}>
      <View style={styles.content}>
        <Text style={styles.headerText}>Select Game</Text>
        {competitions.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={{...styles.card, backgroundColor: item.primary}}
              onPress={() => {}}>
              <View style={styles.cardFlex}>
                <View>
                  <Text style={{...styles.cardTitle, color: item.secondary}}>
                    {item.name}
                  </Text>
                  <Text style={{...styles.cardDetails, color: item.secondary}}>
                    {item.details}
                  </Text>
                </View>
                <Text style={{...styles.cardTime, color: item.secondary}}>
                  {item.time}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  content: {
    backgroundColor: '#fff',
    padding: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  cardFlex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardTime: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  cardDetails: {
    fontSize: 16,
    color: '#666',
  },
});

export default GameListBottomUp;
