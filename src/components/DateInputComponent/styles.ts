import {StyleSheet} from 'react-native';
import {COLORS} from '@app/constants/themes';

const styles = StyleSheet.create({
  placeholderText: {
    color: COLORS.black,
  },
  dateInputField: {
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: COLORS.grayShade,
    // marginHorizontal: 20,
    marginVertical: 30,
    padding: 10,
    borderRadius: 10,
    color: COLORS.black,
    alignItems: 'center',
  },
});
export default styles;
