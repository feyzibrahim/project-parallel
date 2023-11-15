import {useDispatch} from 'react-redux';
import {getPackages} from '@app/store/actions/admin/packageActions';
import {AppDispatch} from '@app/store/index';
import {useEffect} from 'react';

const usePackageHook = () => {
  const dispatch = useDispatch<AppDispatch>();

  const dispatchGetPackages = () => {
    dispatch(getPackages(null));
  };

  useEffect(() => {
    dispatchGetPackages();
  }, []);

  return {
    dispatchGetPackages,
  };
};

export default usePackageHook;
