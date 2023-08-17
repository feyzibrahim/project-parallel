import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ToggleSwitch from 'toggle-switch-react-native';
import {COLORS} from '@app/constants/themes';

const ToggleButton = () => {
  return (
    <View style={styles.buttonWrap}>
      <Text style={styles.ToggleText}>TOggle Button</Text>

      <ToggleSwitch
        isOn={false}
        onColor={COLORS.black}
        offColor={COLORS.grayShade2}
        size="medium"
        onToggle={isOn => console.log('changed to : ', isOn)}
      />
    </View>
  );
};

export default ToggleButton;

const styles = StyleSheet.create({
  buttonWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ToggleText: {
    color: COLORS.black,
    fontSize: 15,
    fontWeight: '400',
  },
});
