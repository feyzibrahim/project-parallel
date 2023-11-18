import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Keyboard} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {searchUsers, clearSearch} from '@app/store/slices/userSlice';
import {AppDispatch} from '@app/store/index';
import {getUserList} from '@app/store/actions/admin/userActions';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {selectCustomer} from '@app/store/slices/userSlice';

const useUserHook = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation();

  const {users, loading, error} = useSelector((state: any) => state.users);

  useEffect(() => {
    getUsersList();
  }, []);

  const getUsersList = async () => {
    await dispatch(getUserList(null));
  };

  const handlePress = (item: any) => {
    dispatch(selectCustomer(item));
    navigation.goBack();
  };

  const filteredUsers = useSelector((state: any) => state.users.filteredUsers); // Assuming your Redux state has a 'filteredUsers' property

  const [searchTerm, setSearchTerm] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleSearchIconPress = () => {
    setIsSearching(!isSearching);
  };

  const handleSearchInputChange = (text: string) => {
    setSearchTerm(text);
    dispatch(searchUsers(text));
  };

  const handleClearSearch = () => {
    setSearchTerm('');
    Keyboard.dismiss();
    handleSearchIconPress();
    dispatch(clearSearch());
  };

  const renderItem = ({item, index}: {item: any; index: number}) => {
    let isLast = users.length - 1 === index;

    return (
      <TouchableOpacity onPress={() => handlePress(item)}>
        <View style={[isLast ? styles.lastUserItem : styles.userItem]}>
          <Text style={styles.userName}>{item?.username}</Text>
          <Text style={styles.userType}>{item?.userType}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return {
    users,
    renderItem,
    loading,
    error,
    isSearching,
    searchTerm,
    handleSearchInputChange,
    handleClearSearch,
    handleSearchIconPress,
    filteredUsers,
  };
};

export default useUserHook;
