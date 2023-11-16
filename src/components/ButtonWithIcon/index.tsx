import {View, Text, TouchableOpacity, ViewStyle, TextStyle} from 'react-native';
import React from 'react';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from '@app/constants/themes';

type Fun = () => void;

interface ButtonWithIconProps {
  fun: Fun;
  buttonLabel: String;
}

const ButtonWithIcon: React.FC<ButtonWithIconProps> = ({fun, buttonLabel}) => {
  return (
    <TouchableOpacity style={styles.buttonWrap} onPress={fun}>
      <Icon
        name="add"
        size={18}
        color={COLORS.white}
        style={{marginRight: 10}}
      />
      <Text style={styles.buttonText}>{buttonLabel}</Text>
    </TouchableOpacity>
  );
};

export default ButtonWithIcon;
