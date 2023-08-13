import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

export type Props = {
  openGameList: Function;
};

const HeaderComponent = (props: Props) => {
  const {openGameList} = props;

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headerText}>Dear 1:00 PM</Text>
      </View>
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => openGameList()}>
        <Text style={styles.logoutButtonText}>Change</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HeaderComponent;
