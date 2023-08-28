import React, {useEffect, useState, useMemo} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import {AppDispatch} from '@app/store/index';
import {useDispatch, useSelector} from 'react-redux';
import {getGameList} from '@app/store/slices/gameSlice';
import {GameThemes} from '@app/constants/constants';
import styles from './styles';

type GameListBottomUpProps = {
  isVisible: boolean;
  onClose: () => void;
  onPressGame: Function;
};

type Competition = {
  id: number;
  gameName: string;
  location: string;
  time: string;
  primary: string;
  secondary: string;
};

const GameListBottomUp: React.FC<GameListBottomUpProps> = ({
  isVisible,
  onClose,
  onPressGame,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const [gameList, setGameList] = useState<Competition[]>([]);

  useEffect(() => {
    getAvailableGames();
  }, []);

  const colorTheme = (index: number) => {
    const primaryColors = GameThemes;
    return primaryColors[index];
  };

  const getAvailableGames = async () => {
    const resultAction = await dispatch(getGameList(null));
    if (getGameList.fulfilled.match(resultAction)) {
      // console.log('GAME Listed=====', resultAction?.payload);
      setGameList(resultAction?.payload);
    } else {
      const errorResult: any = resultAction?.payload;
      console.log('GAME Listed===ERROR=====', errorResult);
    }
  };

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
        {gameList?.map((item, index) => {
          const bgCOLOR = colorTheme(index);
          return (
            <TouchableOpacity
              key={index}
              style={{...styles.card, backgroundColor: bgCOLOR?.primary}}
              onPress={() => onPressGame({game: item, theme: bgCOLOR})}>
              <View style={styles.cardFlex}>
                <View>
                  <Text
                    style={{...styles.cardTitle, color: bgCOLOR?.secondary}}>
                    {item?.gameName}
                  </Text>
                  <Text
                    style={{...styles.cardDetails, color: bgCOLOR?.secondary}}>
                    {item?.location}
                  </Text>
                </View>
                <Text style={{...styles.cardTime, color: item.secondary}}>
                  {item?.time}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </Modal>
  );
};

export default GameListBottomUp;
