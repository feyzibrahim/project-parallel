import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';

import styles from './styles';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '@app/store/index';
import {userList} from '@app/store/slices/authSlice';
import SafeAreaWrapper from '@app/components/Layout/SafeAreaWrapper';
import {HomeScreenNavigationProp} from '@app/navigations/types';
import Icon from 'react-native-vector-icons/AntDesign';

type HomeScreenProps = {
  navigation: HomeScreenNavigationProp;
};
const Userlist: React.FC<HomeScreenProps> = ({navigation}) => {
  const dispatch = useDispatch<AppDispatch>();
  const [user, setUser] = useState<any>([]);

  useEffect(() => {
    getUsersList();
  }, []);

  const getUsersList = async () => {
    const resultAction = await dispatch(userList(null));
    if (userList.fulfilled.match(resultAction)) {
      setUser(resultAction?.payload);
      //   console.log('USER Listed=====', resultAction?.payload);
    } else {
      const errorResult: any = resultAction?.payload;
      console.log('USER Listed===ERROR=====', errorResult);
    }
  };

  const renderItem = (item: any) => {
    console.log('object', item);
    return (
      <View style={styles.userItem}>
        <Text style={styles.userName}>{item?.username}</Text>
        <Text style={styles.userType}>{item?.userType}</Text>
      </View>
    );
  };

  return (
    <SafeAreaWrapper statusbar={'#F2F4F5'}>
      <View style={styles.header}>
        <View>
          <Text style={styles.headerText}>Users</Text>
        </View>
      </View>
      <View style={styles.container}>
        <FlatList
          data={user}
          renderItem={item => renderItem(item?.item)}
          keyExtractor={item => item._id}
        />
      </View>
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => {
          navigation.navigate('UserAddList');
        }}>
        <Icon name="adduser" size={18} color={'#ffffff'} />
      </TouchableOpacity>
    </SafeAreaWrapper>
  );
};

export default Userlist;
