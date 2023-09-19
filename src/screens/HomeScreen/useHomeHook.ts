import {useState, useEffect} from 'react';
import {GameThemes} from '@app/constants/constants';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch} from '@app/store/index';
import {getGameList, saveGames, setGame} from '@app/store/slices/gameSlice';
import {Alert} from 'react-native';

export type lskType = {
  number: number;
  lsk: string;
};

const useHomeHook = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [isGameListVisible, setGameListVisible] = useState(false);
  const [selectedButton, setSelectedButton] = useState<number | null>(1);
  const [selectedButtonABC, setSelectedButtonABC] = useState<number | null>(1);
  const [screenTheme, setScreenTheme] = useState<any>('');
  const [gameDetail, setGameDetail] = useState<any>('');
  const [customer, setCustomer] = useState('');
  const [ticketNumber, setTicketNumber] = useState('');
  const [ticketCount, setTicketCount] = useState('');
  const [listData, setListData] = useState<Array<any>>([]);
  const [saveAlert, setSaveAlert] = useState(false);
  const [successModal, setsuccessModal] = useState(true);

  useEffect(() => {
    getAvailableGames();
    colorTheme();
  }, []);

  setTimeout(() => {
    setsuccessModal(false);
  }, 1000);

  const getAvailableGames = async () => {
    const resultAction = await dispatch(getGameList(null));
    if (getGameList.fulfilled.match(resultAction)) {
      await dispatch(setGame(resultAction?.payload));

      // console.log('GAME Listed=====', resultAction?.payload);
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

  const handleButtonPressABC = (buttonNumber: lskType) => {
    setSelectedButtonABC(buttonNumber?.number);
    const allABC = ['A', 'B', 'C'];
    const allTicket = ['AB', 'BC', 'AC'];

    if (ticketNumber == '' || ticketCount == '' || customer == '') {
      Alert.alert('Please Fill In The Blanks');
    } else {
      if (buttonNumber?.number == 4 && selectedButton == 1) {
        const newData = allABC.map((item: string) => ({
          gameId: '64e1c27a7c8bb02e14e232fb',
          userId: '64e2206e8eebef3fbf473000',
          number: ticketNumber,
          count: ticketCount,
          lsk: item,
          amountC: 10,
          amountD: 16.0,
          billNumber: 0,
        }));

        setListData([...listData, ...newData]);
      } else if (buttonNumber?.number == 4 && selectedButton == 2) {
        const newData = allTicket.map((item: string) => ({
          gameId: '64e1c27a7c8bb02e14e232fb',
          userId: '64e2206e8eebef3fbf473000',
          number: ticketNumber,
          count: ticketCount,
          lsk: item,
          amountC: 10,
          amountD: 16.0,
          billNumber: 0,
        }));

        setListData([...listData, ...newData]);
      } else {
        setListData([
          ...listData,
          {
            gameId: '64e1c27a7c8bb02e14e232fb',
            userId: '64e2206e8eebef3fbf473000',
            number: ticketNumber,
            count: ticketCount,
            lsk: buttonNumber?.lsk,
            amountC: 10,
            amountD: 16.0,
            billNumber: 0,
          },
        ]);
      }
    }
  };

  const removeTicket = (data: any) => {
    console.log(data, '//////////');
    // setListData(listData.filter(list => console.log(list, '========')));
  };

  const onSaveButton = async () => {
    const resultAction = await dispatch(saveGames(listData));
    if (saveGames.fulfilled.match(resultAction)) {
      setListData([]);
      setSaveAlert(false);
      console.log('GAME Saved=====', resultAction?.payload);
      setsuccessModal(true);
    } else {
      const errorResult: any = resultAction?.payload;
      console.log('GAME Saved===ERROR=====', errorResult);
    }
  };

  const colorTheme = () => {
    const primaryColors = GameThemes;
    const backGroundColor =
      primaryColors[Math.floor(Math.random() * primaryColors.length)];
    setScreenTheme(backGroundColor);
    // return backGroundColor;
  };

  const onPressGame = (game: any) => {
    setGameDetail(game);
    setGameListVisible(false);
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
    setCustomer,
    setTicketNumber,
    setTicketCount,
    listData,
    removeTicket,
    onSaveButton,
    setSaveAlert,
    saveAlert,
    successModal,
  };
};
export default useHomeHook;
