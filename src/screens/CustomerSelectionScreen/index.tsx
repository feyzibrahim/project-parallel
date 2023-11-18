import React from 'react';
import {View, FlatList, Text, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import styles from './styles';
import SafeAreaWrapper from '@app/components/Layout/SafeAreaWrapper';
import {HomeScreenNavigationProp} from '@app/navigations/types';
import useCustomerHook from './useCustomerHook';
import {ActivityIndicator} from 'react-native-paper';

type HomeScreenProps = {
  navigation: HomeScreenNavigationProp;
};

const CustomerSelectionScreen: React.FC<HomeScreenProps> = () => {
  const {
    users,
    loading,
    renderItem,
    isSearching,
    searchTerm,
    handleSearchInputChange,
    handleClearSearch,
    handleSearchIconPress,
    filteredUsers,
  } = useCustomerHook();

  return (
    <SafeAreaWrapper statusbar={'#F2F4F5'}>
      {/* App-bar */}
      <View style={styles.header}>
        {isSearching ? (
          <View style={styles.searchInputContainer}>
            <TextInput
              placeholder="Search customers..."
              value={searchTerm}
              onChangeText={handleSearchInputChange}
            />
            {searchTerm !== '' && (
              <TouchableOpacity onPress={handleClearSearch}>
                <Icon name="close" size={24} color={'#000'} />
              </TouchableOpacity>
            )}
          </View>
        ) : (
          <Text style={styles.headerText}>Choose A Customer</Text>
        )}
        <TouchableOpacity onPress={handleSearchIconPress}>
          <Icon name="search1" size={24} color={'#000'} />
        </TouchableOpacity>
      </View>
      {/* Loading */}
      {loading && (
        <View style={styles.loadingView}>
          <ActivityIndicator />
        </View>
      )}
      {/* Users List */}
      <View style={styles.container}>
        <FlatList
          data={isSearching ? filteredUsers : users}
          renderItem={renderItem}
          keyExtractor={item => item._id}
        />
      </View>
    </SafeAreaWrapper>
  );
};

export default CustomerSelectionScreen;
