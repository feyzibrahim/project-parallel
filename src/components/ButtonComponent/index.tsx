import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';

type GotoHomeFunction = () => void;

interface ButtonComponentProps {
  gotoHome: GotoHomeFunction;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({gotoHome}) => {
  return (
    <TouchableOpacity style={styles.buttonWrap} onPress={gotoHome}>
      <Text style={styles.buttonText}>Login</Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;
