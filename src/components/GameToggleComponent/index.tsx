import {Text, View, Switch} from 'react-native';
import React, {useState} from 'react';
import ToggleSwitch from 'toggle-switch-react-native';
import {COLORS} from '@app/constants/themes';
import styles from './style';
import {GameThemes} from '@app/constants/constants';

export type ToggleProp = {
  gameName: string;
  location: string;
  time: String;
  index: number;
  isActive: boolean;
};

const GameToggleButton = (props: ToggleProp) => {
  const colorTheme = (index: number) => {
    const primaryColors = GameThemes;
    return primaryColors[index];
  };
  let {gameName, location, time, index, isActive} = props;

  const [isEnabled, setIsEnabled] = useState(isActive);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const bgCOLOR = colorTheme(index);

  return (
    <View
      // key={index}
      style={{...styles.card, backgroundColor: bgCOLOR?.primary}}>
      <View style={styles.cardFlex}>
        <View>
          <View style={styles.nameFlex}>
            <Text style={{...styles.cardTitle, color: bgCOLOR?.secondary}}>
              {gameName}
            </Text>
            <Text style={{...styles.cardTime, color: bgCOLOR?.secondary}}>
              | {location}
            </Text>
          </View>
          <Text style={{...styles.cardDetails, color: bgCOLOR?.secondary}}>
            {time}
          </Text>
        </View>
        {/* <Text style={{...styles.cardTime, color: bgCOLOR?.secondary}}>
          {item?.isActive.toString()}
        </Text> */}
        <ToggleSwitch
          isOn={isEnabled}
          onColor={COLORS.black}
          offColor="#ccc"
          size="medium"
          onToggle={toggleSwitch}
        />
      </View>
    </View>
  );
};

export default GameToggleButton;
