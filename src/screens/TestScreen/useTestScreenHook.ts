import {getGameList} from '@app/store/actions/admin/gameActions';
import {AppDispatch} from '@app/store/index';
import {
  updateClosestGame,
  updateCurrentGame,
} from '@app/store/slices/gameTempSlice';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

const useTestScreenHook = () => {
  const {games, loading, error, game} = useSelector(
    (state: any) => state.games,
  );
  const dispatch = useDispatch<AppDispatch>();

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

  const handleItemPress = (gameId: string) => {
    dispatch(updateCurrentGame(gameId));
  };

  return {
    games,
    game,
    handleItemPress,
  };
};

export default useTestScreenHook;
