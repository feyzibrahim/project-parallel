import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ViewStyle, TextStyle} from 'react-native';
import styles from './styles';

export type Props = {
  openGameList: Function;
  containerStyle?: ViewStyle;
  headerTextStyle?: TextStyle;
  buttonStyle?: ViewStyle;
  user?: string;
};

const HeaderComponent = (props: Props) => {
  const {openGameList, containerStyle, headerTextStyle, buttonStyle, user} =
    props;

  return (
    <View style={[styles.container, containerStyle]}>
      <View>
        <Text style={[styles.headerText, headerTextStyle]}>{user}</Text>
      </View>
      <TouchableOpacity
        style={[styles.logoutButton, buttonStyle]}
        onPress={() => openGameList()}>
        <Text style={styles.logoutButtonText}>Change</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HeaderComponent;
