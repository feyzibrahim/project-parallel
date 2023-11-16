import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {GameThemes} from '@app/constants/constants';
import GameListBottomUp from '@app/components/GameListBottomUp/GameListBottomUp';
import {AppDispatch} from '@app/store/index';
import {updateCurrentGame} from '@app/store/slices/gameTempSlice';

const TestHeaderComponent = () => {
  const dispatch = useDispatch<AppDispatch>();

  const {game} = useSelector((state: any) => state.games);

  // Color theme selection
  const colorTheme = (index: number) => {
    const primaryColors = GameThemes;
    return primaryColors[index];
  };
  const bgCOLOR = colorTheme(game?.num - 1 || 0);

  const [isGameListVisible, setGameListVisible] = useState(false);
  const toggleGameList = () => {
    setGameListVisible(!isGameListVisible);
  };
  const onPressGame = (gameId: string) => {
    dispatch(updateCurrentGame(gameId));
    setGameListVisible(false);
  };

  return (
    <View style={[styles.container, {backgroundColor: bgCOLOR.primary}]}>
      <View>
        <Text style={[styles.headerText, {color: bgCOLOR.secondary}]}>
          {game ? game.gameName + ' ' + game.time : 'Loading'}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => toggleGameList()}>
        <Text
          style={[
            styles.logoutButton,
            styles.logoutButtonText,
            {backgroundColor: bgCOLOR.secondary},
          ]}>
          Change
        </Text>
      </TouchableOpacity>
      <GameListBottomUp
        isVisible={isGameListVisible}
        onClose={toggleGameList}
        onPressGame={onPressGame}
      />
    </View>
  );
};

export default TestHeaderComponent;
