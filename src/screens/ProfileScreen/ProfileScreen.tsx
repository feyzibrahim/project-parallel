import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import SafeAreaWrapper from '@app/components/Layout/SafeAreaWrapper';
import {HomeScreenNavigationProp} from '@app/navigations/types';

import User from '@app/assets/icons/user.svg';
import styles from './styles';
import ButtonComponent from '@app/components/ButtonComponent';
import ToggleButton from '@app/components/ToggleButtonComponent';

type HomeScreenProps = {
  navigation: HomeScreenNavigationProp;
};

const ProfileScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  return (
    <SafeAreaWrapper containerStyle={styles.container} statusbar={'#F2F4F5'}>
      <View style={styles.profileHeader}>
        <View>
          <Text style={styles.headerText}>My Profile</Text>
        </View>
        <TouchableOpacity></TouchableOpacity>
      </View>
      <View style={styles.content}>
        <View style={styles.UpperPart}>
          <User height={150} width={150} />
          <Text style={styles.name}>John Doe</Text>
        </View>
        <View style={styles.body}>
          <ToggleButton label="Dark Mode" />
          <ToggleButton label="Sample" />

          <TouchableOpacity
            style={styles.middlePart}
            onPress={() => navigation.navigate('Settings', {itemId: 1})}>
            <Text style={styles.navigationText}>All settings</Text>
            <Icon name="right" size={18} color={''} style={{marginRight: 10}} />
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <ButtonComponent
            gotoHome={() => console.log('CLicKEd LOgout====>')}
            buttonLabel={'Log Out'}
            buttonTextStyle={styles.logoutButtonText}
            buttonWrapStyle={styles.logoutButton}
            needLogoutIcon
          />
        </View>
      </View>
    </SafeAreaWrapper>
  );
};

export default ProfileScreen;
