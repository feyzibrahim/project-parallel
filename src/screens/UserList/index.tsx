import React from 'react';
import {View, FlatList} from 'react-native';
import styles from './styles';

import SafeAreaWrapper from '@app/components/Layout/SafeAreaWrapper';
import {HomeScreenNavigationProp} from '@app/navigations/types';
import FloatingActionButton from '@app/components/FloatingButton';
import AppBar from '@app/components/AppBarComponent';
import useUserHook from './useUserHook';

type HomeScreenProps = {
  navigation: HomeScreenNavigationProp;
};

const Userlist: React.FC<HomeScreenProps> = ({navigation}) => {
  const {users, renderItem} = useUserHook();

  return (
    <SafeAreaWrapper statusbar={'#F2F4F5'}>
      <AppBar title="Distributors List" />
      {users && (
        <View style={styles.container}>
          <FlatList
            data={users}
            renderItem={renderItem}
            keyExtractor={item => item._id}
          />
        </View>
      )}
      <FloatingActionButton
        style={null}
        iconName="adduser"
        onPressButton={() => {
          navigation.navigate('UserAddList');
        }}
      />
    </SafeAreaWrapper>
  );
};

export default Userlist;
