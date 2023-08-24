import {View, Text, TouchableOpacity, ViewStyle, TextStyle} from 'react-native';
import React from 'react';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from '@app/constants/themes';

type GotoHomeFunction = () => void;

interface ButtonComponentProps {
  gotoHome: GotoHomeFunction;
  buttonLabel: String;
  buttonWrapStyle?: ViewStyle;
  buttonTextStyle?: TextStyle;
  needLogoutIcon?: boolean;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  gotoHome,
  buttonLabel,
  buttonWrapStyle,
  buttonTextStyle,
  needLogoutIcon = false,
}) => {
  return (
    <TouchableOpacity
      style={{...styles.buttonWrap, ...buttonWrapStyle}}
      onPress={gotoHome}>
      {needLogoutIcon && (
        <Icon
          name="logout"
          size={18}
          color={COLORS.redShade}
          style={{marginRight: 10}}
        />
      )}
      <Text style={{...styles.buttonText, ...buttonTextStyle}}>
        {buttonLabel}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;
