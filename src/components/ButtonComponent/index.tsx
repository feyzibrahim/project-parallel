import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';

type GotoHomeFunction = () => void;

interface ButtonComponentProps {
  gotoHome: GotoHomeFunction;
  buttonLabel: String
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({gotoHome,buttonLabel}) => {
  return (
    <TouchableOpacity style={styles.buttonWrap} onPress={gotoHome}>
      <Text style={styles.buttonText}>{buttonLabel}</Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;
