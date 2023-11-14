import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './style';

type FloatingActionButtonProps = {
  iconName: string;
  onPressButton: Function;
};

const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({
  iconName,
  onPressButton,
}) => {
  return (
    <TouchableOpacity
      style={styles.floatingButton}
      onPress={() => {
        onPressButton();
      }}>
      <Icon name={iconName} size={18} color={'#ffffff'} />
    </TouchableOpacity>
  );
};

export default FloatingActionButton;
