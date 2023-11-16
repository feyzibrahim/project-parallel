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
    alignItems: 'center',
  },
  loadingView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
  },
  floatingButton: {
    position: 'absolute',
    bottom: 20, // Adjust the distance from the bottom
    right: 0, // Adjust the distance from the right
    backgroundColor: 'blue',
    borderRadius: 30,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4, // Adds a shadow on Android
  },
});
export default styles;
