import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch} from '@app/store/index';
import {getUserList} from '@app/store/actions/admin/userActions';
import styles from './styles';

const useUserHook = () => {
  const dispatch = useDispatch<AppDispatch>();

  const {users, loading, error} = useSelector((state: any) => state.users);

  useEffect(() => {
    getUsersList();
  }, []);

  const getUsersList = async () => {
    await dispatch(getUserList(null));
  };

  const renderItem = ({item, index}: {item: any; index: number}) => {
    let isLast = users.length - 1 === index;

    console.log(isLast);

    return (
      <View style={isLast ? styles.lastUserItem : styles.userItem}>
        <Text style={styles.userName}>{item?.username}</Text>
        <Text style={styles.userType}>{item?.userType}</Text>
      </View>
    );
  };

  return {users, renderItem, loading, error};
};

export default useUserHook;
