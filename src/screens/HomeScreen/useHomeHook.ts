import {useState, useEffect} from 'react';
import {GameThemes} from '@app/constants/constants';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '@app/store/index';
import {getGameList, setGame} from '@app/store/slices/gameSlice';

const useHomeHook = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [isGameListVisible, setGameListVisible] = useState(false);
  const [selectedButton, setSelectedButton] = useState<number | null>(1);
  const [selectedButtonABC, setSelectedButtonABC] = useState<number | null>(1);
  const [screenTheme, setScreenTheme] = useState<any>('');
  const [gameDetail, setGameDetail] = useState<any>('');

  useEffect(() => {
    getAvailableGames();
    colorTheme();
  }, []);

  const getAvailableGames = async () => {
    const resultAction = await dispatch(getGameList(null));
    if (getGameList.fulfilled.match(resultAction)) {
      await dispatch(setGame(resultAction?.payload));

      console.log('GAME Listed=====', resultAction?.payload);
    } else {
      const errorResult: any = resultAction?.payload;
      console.log('GAME Listed===ERROR=====', errorResult);
    }
  };

  const openGameList = () => {
    setGameListVisible(true);
    colorTheme();
  };

  const closeGameList = () => {
    setGameListVisible(false);
  };

  const handleButtonPress = (buttonNumber: number) => {
    setSelectedButton(buttonNumber);
  };
  const handleButtonPressABC = (buttonNumber: number) => {
    setSelectedButtonABC(buttonNumber);
  };

  const colorTheme = () => {
    const primaryColors = GameThemes;
    const backGroundColor =
      primaryColors[Math.floor(Math.random() * primaryColors.length)];
    setScreenTheme(backGroundColor);
    // return backGroundColor;
  };
  // const screenTheme = colorTheme();
  const onPressGame = (game: any) => {
    setGameDetail(game);
    setGameListVisible(false);
    console.log(game, ';;;;;;');
  };

  return {
    isGameListVisible,
    selectedButton,
    selectedButtonABC,
    screenTheme,
    gameDetail,
    openGameList,
    closeGameList,
    handleButtonPress,
    handleButtonPressABC,
    onPressGame,
  };
};
export default useHomeHook;
