import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';

import {COLORS} from '@app/constants/themes';
import Modal from 'react-native-modal';

export type AlertPropsTypes = {
  isShowAlert: boolean;
  title: string;
  message?: string;
  closeOnTouchOutside?: boolean;
  showCancelButton?: boolean;
  showConfirmButton?: boolean;
  CancelText?: string;
  confirmText?: string;
  CancelPressed?: any;
  confirmPressed?: any;
};

const AlertBox = (props: AlertPropsTypes) => {
  const {
    CancelPressed,
    CancelText,
    closeOnTouchOutside,
    confirmPressed,
    confirmText,
    isShowAlert,
    message,
    showCancelButton = true,
    showConfirmButton = true,
    title,
  } = props;

  return (
    <AwesomeAlert
      show={isShowAlert}
      showProgress={false}
      title={title}
      message={message}
      closeOnTouchOutside={closeOnTouchOutside == false ? false : true}
      closeOnHardwareBackPress={false}
      showCancelButton={showCancelButton ? true : false}
      showConfirmButton={showConfirmButton ? true : false}
      cancelText={CancelText}
      confirmText={confirmText}
      confirmButtonColor={COLORS.primary}
      confirmButtonStyle={styles.confirmButtonStyle}
      confirmButtonTextStyle={styles.confirmButtonTextStyle}
      cancelButtonColor={COLORS.white}
      cancelButtonStyle={styles.cancelButtonStyle}
      cancelButtonTextStyle={{color: COLORS.primary}}
      contentContainerStyle={styles.containerStyle}
      onCancelPressed={() => {
        CancelPressed();
      }}
      onConfirmPressed={() => {
        confirmPressed();
      }}
    />
  );
};

export default AlertBox;

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: COLORS.white,
    width: Dimensions.get('screen').width * 0.9,
  },
  confirmButtonStyle: {
    borderColor: COLORS.primary,
    borderWidth: 1,
  },
  confirmButtonTextStyle: {
    paddingHorizontal: 12,
  },
  cancelButtonStyle: {
    borderColor: COLORS.primary,
    borderWidth: 1,
  },
});
