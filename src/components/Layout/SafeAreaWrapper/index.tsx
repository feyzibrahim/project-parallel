import React from 'react';
import {View, StatusBar} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './styles';
import {COLORS} from '@app/constants/themes';

export type Props = {
  statusbar?: any;
  insetsBottom?: boolean;
  barStyle?: any;
  children?: any;
  backgroundColor?: string;
  containerStyle?: any;
};

export type StatusBarProps = {
  backgroundColor?: string;
  statusBarStyle?: boolean;
};

const CustomStatusBar: React.FC<StatusBarProps> = ({
  backgroundColor,
  statusBarStyle,
}) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={{height: insets.top, backgroundColor}}>
      <StatusBar
        animated={true}
        backgroundColor={backgroundColor}
        barStyle={'dark-content'}
      />
    </View>
  );
};

const SafeAreaWrapper: React.FC<Props> = ({
  statusbar,
  insetsBottom,
  barStyle,
  children,
  backgroundColor,
  containerStyle,
}) => {
  const insets = useSafeAreaInsets();

  return (
    <>
      <CustomStatusBar backgroundColor={statusbar ? statusbar : COLORS.white} />
      <View
        style={[
          styles.container(backgroundColor, insets, insetsBottom),
          containerStyle,
        ]}>
        {children}
      </View>
    </>
  );
};

export default SafeAreaWrapper;
