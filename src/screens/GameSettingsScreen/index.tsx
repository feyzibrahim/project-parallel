import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
// import Icon from 'react-native-vector-icons/AntDesign';

import {HomeScreenNavigationProp} from '../../navigations/types';
import styles from './styles';

import SafeAreaWrapper from '@app/components/Layout/SafeAreaWrapper';

type NavigationScreenProps = {
  navigation: HomeScreenNavigationProp;
};

const SettingsScreen: React.FC<NavigationScreenProps> = ({navigation}) => {
  return (
    <SafeAreaWrapper containerStyle={styles.container} statusbar={'#F2F4F5'}>
      <View style={styles.header}>
        <View>
          <Text style={styles.headerText}>Game Settings</Text>
        </View>
      </View>
    </SafeAreaWrapper>
  );
};

export default SettingsScreen;
