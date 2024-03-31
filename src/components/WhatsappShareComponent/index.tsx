import React from 'react';
import {StyleSheet, Text, Pressable, Alert} from 'react-native';

import {COLORS} from '@app/constants/themes';

import Icon from 'react-native-vector-icons/FontAwesome';

const ShareToWhatsapp = () => {
  const shareToWhatsapp = () => {
    Alert.alert('It will be shared.');
  };

  return (
    <Pressable style={styles.wrapper} onPress={shareToWhatsapp}>
      <Icon name="whatsapp" size={18} color={COLORS.primary} />
      <Text style={styles.shareText}>Share to WhatsApp</Text>
    </Pressable>
  );
};

export default ShareToWhatsapp;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginVertical: 40,
    alignItems: 'center',
  },
  shareText: {
    color: COLORS.secondary,
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 5,
  },
});
