import {useState, useEffect} from 'react';
import {GameThemes} from '@app/constants/constants';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '@app/store/index';
import {getBookings} from '@app/store/actions/admin/bookingActions';

const useResultHook = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [screenTheme, setScreenTheme] = useState<any>('');
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
    const resultAction = await dispatch(getBookings(null));
    if (getBookings.fulfilled.match(resultAction)) {
      setBookingList(resultAction?.payload);
      // console.log('Bookings Listed=====', resultAction?.payload);
    } else {
      const errorResult: any = resultAction?.payload;
      console.log('Bookings Listed===ERROR=====', errorResult);
    }
  };

  const colorTheme = () => {
    const primaryColors = GameThemes;
    const backGroundColor =
      primaryColors[Math.floor(Math.random() * primaryColors.length)];
    setScreenTheme(backGroundColor);
  };

  return {
    screenTheme,
    bookingList,
    TableHeaders,
  };
};
export default useResultHook;
