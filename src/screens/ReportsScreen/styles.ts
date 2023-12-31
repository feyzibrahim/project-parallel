import {StyleSheet} from 'react-native';
import {COLORS} from '@app/constants/themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 12,
  },
  headerStyle: {
    fontSize: 20,
    color: COLORS.black,
    fontWeight: 'bold',
    marginTop: 10,
  },
});
export default styles;
