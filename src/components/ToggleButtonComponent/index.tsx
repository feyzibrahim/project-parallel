import {StyleSheet, Text, View, Switch} from 'react-native';
import React, {useState} from 'react';
import ToggleSwitch from 'toggle-switch-react-native';
import {COLORS} from '@app/constants/themes';

export type ToggleProp = {
  label: string;
};
const ToggleButton = (props: ToggleProp) => {
  const {label} = props;

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.buttonWrap}>
      <Text style={styles.ToggleText}>{label}</Text>

      {/* <ToggleSwitch
        isOn={false}
        onColor={COLORS.black}
        offColor={COLORS.grayShade2}
        size="medium"
        onToggle={isOn => console.log('changed to : ', isOn)}
      /> */}
      <Switch
        trackColor={{false: COLORS.grayShade2, true: COLORS.black}}
        thumbColor={COLORS.white}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
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
    marginVertical: 10,
  },
  ToggleText: {
    color: COLORS.black,
    fontSize: 15,
    fontWeight: '400',
  },
});
