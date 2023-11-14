import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

type AppBarProps = {
  title: string;
};

const AppBarComponent: React.FC<AppBarProps> = ({title}) => {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
};

export default AppBarComponent;
