import {useState, useEffect} from 'react';
import {GameThemes} from '@app/constants/constants';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch} from '@app/store/index';
import {Alert} from 'react-native';
import {createBooking} from '@app/store/actions/admin/bookingActions';
import {updateClosestGame} from '@app/store/slices/gameTempSlice';
import {getGameList} from '@app/store/actions/admin/gameActions';

export type lskType = {
  number: number;
  lsk: string;
};

const useHomeHook = () => {
  const {game} = useSelector((state: any) => state.games);
  const dispatch = useDispatch<AppDispatch>();

  const [selectedButton, setSelectedButton] = useState<number | null>(1);
  const [selectedButtonABC, setSelectedButtonABC] = useState<number | null>(1);
  const [theme, setTheme] = useState<any>({});
  const [customer, setCustomer] = useState('');
  const [ticketNumber, setTicketNumber] = useState('');
  const [ticketCount, setTicketCount] = useState('');
  const [listData, setListData] = useState<Array<any>>([]);
  const [saveAlert, setSaveAlert] = useState(false);
  const [successModal, setsuccessModal] = useState(true);

  const dispatchSelectGameBasedOnTime = () => {
    dispatch(updateClosestGame());
  };

  const dispatchGetGameList = async () => {
    const getGameAction = await dispatch(getGameList(null));

    if (getGameList.fulfilled.match(getGameAction)) {
      dispatchSelectGameBasedOnTime();
    } else {
      const errorResult: any = getGameAction?.payload;
      console.log('Games Listed===ERROR=====', errorResult);
    }
  };

  useEffect(() => {
    dispatchGetGameList();
  }, []);

  setTimeout(() => {
    setsuccessModal(false);
  }, 1000);

  const colorTheme = (index: number) => {
    const primaryColors = GameThemes;
    return primaryColors[index];
  };

  useEffect(() => {
    if (game?.num) {
      setTheme(colorTheme(game.num - 1));
    }
  }, [game]);

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
    const resultAction = await dispatch(createBooking(listData));
    if (createBooking.fulfilled.match(resultAction)) {
      setListData([]);
      setSaveAlert(false);
      // console.log('GAME Saved=====', resultAction?.payload);
      setsuccessModal(true);
    } else {
      const errorResult: any = resultAction?.payload;
      console.log('GAME Saved===ERROR=====', errorResult);
    }
  };

  return {
    selectedButton,
    selectedButtonABC,
    theme,
    handleButtonPress,
    handleButtonPressABC,
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
