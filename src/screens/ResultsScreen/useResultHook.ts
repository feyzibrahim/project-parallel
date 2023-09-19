import {useState, useEffect} from 'react';
import {GameThemes} from '@app/constants/constants';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '@app/store/index';
import {getGameBookings} from '@app/store/slices/gameSlice';

const useResultHook = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [isGameListVisible, setGameListVisible] = useState(false);
  const [selectedButton, setSelectedButton] = useState<number | null>(1);
  const [selectedButtonABC, setSelectedButtonABC] = useState<number | null>(1);
  const [screenTheme, setScreenTheme] = useState<any>('');
  const [gameDetail, setGameDetail] = useState<any>('');
  const [bookingList, setBookingList] = useState<any>([]);

  const TableHeaders = [
    'Name',
    'LSK',
    'Number',
    'Count',
    '₹₹ - C',
    '₹₹ - D',
    '',
  ];

  useEffect(() => {
    getGameBooking();
    colorTheme();
  }, []);

  const getGameBooking = async () => {
    const resultAction = await dispatch(getGameBookings(null));
    if (getGameBookings.fulfilled.match(resultAction)) {
      setBookingList(resultAction?.payload);
      // console.log('Bookings Listed=====', resultAction?.payload);
    } else {
      const errorResult: any = resultAction?.payload;
      console.log('Bookings Listed===ERROR=====', errorResult);
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
    bookingList,
    openGameList,
    closeGameList,
    handleButtonPress,
    handleButtonPressABC,
    onPressGame,
    TableHeaders,
  };
};
export default useResultHook;
