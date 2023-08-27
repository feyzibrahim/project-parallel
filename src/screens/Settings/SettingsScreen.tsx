import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

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
          <Text style={styles.headerText}>Settings</Text>
        </View>
      </View>
      <View style={styles.content}>
        <TouchableOpacity
          style={styles.optionButton}
          onPress={() => navigation.navigate('Notification', {itemId: 1})}>
          <Text style={styles.optionButtonText}>Notifications</Text>
          <Icon
            name="right"
            size={18}
            color={'#000'}
            style={{marginRight: 10}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.optionButton}
          onPress={() => navigation.navigate('PrivacyPolicy', {itemId: 2})}>
          <Text style={styles.optionButtonText}>Privacy</Text>
          <Icon
            name="right"
            size={18}
            color={'#000'}
            style={{marginRight: 10}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.optionButton}
          onPress={() => navigation.navigate('Language', {itemId: 1})}>
          <Text style={styles.optionButtonText}>Language</Text>
          <Icon
            name="right"
            size={18}
            color={'#000'}
            style={{marginRight: 10}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.optionButton}
          onPress={() => navigation.navigate('About', {itemId: 1})}>
          <Text style={styles.optionButtonText}>About</Text>
          <Icon
            name="right"
            size={18}
            color={'#000'}
            style={{marginRight: 10}}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaWrapper>
  );
};

export default SettingsScreen;
