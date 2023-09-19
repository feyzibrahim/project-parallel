import React, {ReactNode} from 'react';
import {StatusBar, StyleSheet, Text, View, ViewStyle} from 'react-native';
import {COLORS, SIZES} from '@app/constants/themes';
import Modal from 'react-native-modal';

export type ModalTypes = {
  children: ReactNode;
  isVisible: boolean;
  onClose: any;
  backdropOpacity: number;
  animationIn:string
  animationOut:string
  animationInTiming:number
  animationOutTiming:number
  scrollHorizontal:boolean
  swipeDirection:Array<string>
  style:ViewStyle
};

const ModalComponent = (props: ModalTypes) => {
  const {isVisible, onClose,backdropOpacity} = props;

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      backdropOpacity={0.2}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      animationInTiming={400}
      animationOutTiming={300}
      scrollHorizontal={true}
      swipeDirection={['down']}
      style={styles.modal}>
      <View
        style={{
          backgroundColor: COLORS.white,
          width: SIZES.width,
          position: 'absolute',
          bottom: 0,
          borderTopLeftRadius: 6,
          borderTopRightRadius: 6,
        }}>
        {props.children}
      </View>
    </Modal>
  );
};

export default ModalComponent;

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  view: {
    justifyContent: 'flex-end',
    margin: 0,
  },
});
