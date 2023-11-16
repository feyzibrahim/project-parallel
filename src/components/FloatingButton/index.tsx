import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './style';

type FloatingActionButtonProps = {
  iconName: string;
  onPressButton: Function;
  style: {} | null;
};

const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({
  iconName,
  onPressButton,
  style,
}) => {
  return (
    <TouchableOpacity
      style={style || styles.floatingButton}
      onPress={() => {
        onPressButton();
      }}>
      <Icon name={iconName} size={18} color={'#ffffff'} />
    </TouchableOpacity>
  );
};

export default FloatingActionButton;
