import {useState, useEffect} from 'react';
import {GameThemes} from '@app/constants/constants';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch} from '@app/store/index';
import {Alert} from 'react-native';
import {createBooking} from '@app/store/actions/admin/bookingActions';
import {removeSelectedCustomer} from '@app/store/slices/userSlice';
export type lskType = {
  number: number;
  lsk: string;
};

const useHomeHook = () => {
  const {game, loading} = useSelector((state: any) => state.games);
  const {selectedCustomer} = useSelector((state: any) => state.users);
  const dispatch = useDispatch<AppDispatch>();

  const [selectedButton, setSelectedButton] = useState<number | null>(1);
  const [selectedButtonABC, setSelectedButtonABC] = useState<number | null>(1);
  const [theme, setTheme] = useState<any>({});
  const [ticketNumber, setTicketNumber] = useState('');
  const [ticketCount, setTicketCount] = useState('');
  const [listData, setListData] = useState<Array<any>>([]);
  const [saveAlert, setSaveAlert] = useState(false);
  const [successModal, setsuccessModal] = useState(false);

  // Totals
  let [totalCount, setTotalCount] = useState('');
  let [totalAmountD, setTotalAmountD] = useState('');
  let [totalAmountC, setTotalAmountC] = useState('');

  setTimeout(() => {
    setsuccessModal(false);
  }, 3000);

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

    if (selectedCustomer === null) {
      Alert.alert('Please select a customer');
      return;
    }
    if (ticketNumber === '') {
      Alert.alert('Please enter number');
      return;
    }
    if (ticketCount === '') {
      Alert.alert('Please enter count');
      return;
    }

    if (
      ticketNumber === '' ||
      ticketCount === '' ||
      selectedCustomer === null
    ) {
      Alert.alert('Please Fill In The Blanks');
    } else {
      if (buttonNumber?.number == 4 && selectedButton == 1) {
        const newData = allABC.map((item: string) => ({
          gameId: game._id,
          userId: selectedCustomer._id,
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
          gameId: game._id,
          userId: selectedCustomer._id,
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
            gameId: game._id,
            userId: selectedCustomer._id,
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

  // Calculating total of Count, D Amount, C Amount
  const calculateTotal = () => {
    listData.forEach(item => {
      const count = parseInt(item.count, 10) || 0;
      const amountD = parseFloat(item.amountD) || 0;
      const amountC = parseFloat(item.amountC) || 0;

      setTotalCount((totalCount += count));
      setTotalAmountC((totalAmountD += amountD));
      setTotalAmountD((totalAmountC += amountC));
    });
  };

  useEffect(() => {
    calculateTotal();
  }, [listData]);

  const removeTicket = (data: any) => {
    console.log(listData, '//////////');
    // setListData(listData.filter(list => console.log(list, '========')));
  };

  const turnOnConfirmModal = (value: boolean) => {
    if (selectedCustomer === null) {
      Alert.alert('Please select a customer');
      return;
    }
    if (ticketNumber === '') {
      Alert.alert('Please enter number');
      return;
    }
    if (ticketCount === '') {
      Alert.alert('Please enter count');
      return;
    }
    setSaveAlert(value);
  };

  const onSaveButton = async () => {
    if (selectedCustomer === null) {
      Alert.alert('Please select a customer');
      return;
    }
    if (ticketNumber === '') {
      Alert.alert('Please enter number');
      return;
    }
    if (ticketCount === '') {
      Alert.alert('Please enter count');
      return;
    }

    const resultAction = await dispatch(createBooking(listData));
    if (createBooking.fulfilled.match(resultAction)) {
      setListData([]);
      setsuccessModal(true);
      turnOnConfirmModal(false);
      setTotalAmountC('');
      setTotalAmountD('');
      setTotalCount('');
      dispatch(removeSelectedCustomer());
      setTicketNumber('');
      setTicketCount('');
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
    setTicketNumber,
    setTicketCount,
    listData,
    removeTicket,
    onSaveButton,
    turnOnConfirmModal,
    saveAlert,
    successModal,
    game,
    loading,
    selectedCustomer,
    totalCount,
    totalAmountC,
    totalAmountD,
  };
};
export default useHomeHook;
