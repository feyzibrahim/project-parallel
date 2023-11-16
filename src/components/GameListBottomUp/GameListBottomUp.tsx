import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {AppDispatch} from '@app/store/index';
import {useDispatch, useSelector} from 'react-redux';
import {GameThemes} from '@app/constants/constants';
import styles from './styles';
import ModalComponent from '../ModalComponent/Modal';
import {getGameList} from '@app/store/actions/admin/gameActions';

type GameListBottomUpProps = {
  isVisible: boolean;
  onClose: any;
  onPressGame: Function;
};

const GameListBottomUp: React.FC<GameListBottomUpProps> = ({
  isVisible,
  onClose,
  onPressGame,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const {games} = useSelector((state: any) => state.games);

  useEffect(() => {
    getAvailableGames();
  }, []);

  const colorTheme = (index: number) => {
    const primaryColors = GameThemes;
    return primaryColors[index];
  };

  const getAvailableGames = () => {
    dispatch(getGameList(null));
  };

  return (
    <ModalComponent
      isVisible={isVisible}
      onClose={onClose}
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
        {games?.map((item: any, index: number) => {
          const bgCOLOR = colorTheme(index);
          return (
            <TouchableOpacity
              key={index}
              style={{...styles.card, backgroundColor: bgCOLOR?.primary}}
              onPress={() => onPressGame(item._id)}>
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
    </ModalComponent>
  );
};

export default GameListBottomUp;
