import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import HeaderComponent from '@app/components/HeaderComponent';
import SafeAreaWrapper from '@app/components/Layout/SafeAreaWrapper';
import {HomeScreenNavigationProp} from '@app/navigations/types';

import User from '@app/assets/icons/user.svg';
import styles from './styles';
import ButtonComponent from '@app/components/ButtonComponent';
import {COLORS} from '@app/constants/themes';
import ToggleSwitch from 'toggle-switch-react-native';
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
        <View
          style={{flex: 1, alignItems: 'center', justifyContent: 'flex-start'}}>
          <User height={150} width={150} />
          <Text style={styles.name}>John Doe</Text>
        </View>
        <View style={styles.body}>
          <ToggleButton/>
          <TouchableOpacity
            style={{}}
            onPress={() => navigation.navigate('Settings', {itemId: 1})}>
            <Text style={{}}>Settings</Text>
          </TouchableOpacity>
        </View>
        <View
          style={styles.footer}>
          <ButtonComponent
            gotoHome={() =>console.log('CLicKEd LOgout====>')}
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
