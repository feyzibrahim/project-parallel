import {useState, useEffect, useCallback} from 'react';
import {GameThemes} from '@app/constants/constants';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch} from '@app/store/index';
import {getBookings} from '@app/store/actions/admin/bookingActions';

const useReportHook = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {game} = useSelector((state: any) => state.games);

  const {bookings, loading, error} = useSelector((state: any) => state.booking);
  const [screenTheme, setScreenTheme] = useState<any>('');
  const [refreshing, setRefreshing] = useState(false);

  const TableHeaders = ['Name', 'LSK', 'Number', 'Count', '₹₹ - C', '₹₹ - D'];

  useEffect(() => {
    getGameBooking();
    colorTheme();
  }, [game]);

  const getGameBooking = async () => {
    await dispatch(getBookings(game._id));
  };

  const colorTheme = () => {
    const primaryColors = GameThemes;
    const backGroundColor = primaryColors[game.num - 1];
    setScreenTheme(backGroundColor);
  };

  // Pull to refresh data
  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await getGameBooking();
    setRefreshing(false);
  }, [bookings]);

  return {
    screenTheme,
    bookings,
    loading,
    TableHeaders,
    refreshing,
    onRefresh,
  };
};
export default useReportHook;
