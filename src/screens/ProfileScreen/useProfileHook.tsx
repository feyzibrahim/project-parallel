import React from 'react';
import {useSelector} from 'react-redux';

const useProfileHook = () => {
  const {user} = useSelector((state: any) => state.auth);

  return {user};
};

export default useProfileHook;
