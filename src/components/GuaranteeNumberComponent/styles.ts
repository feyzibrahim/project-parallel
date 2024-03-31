import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '@app/constants/themes';

const styles = StyleSheet.create({
  header: {
    color: COLORS.black,
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  ticketNumberWrap: {
    backgroundColor: COLORS.lightBlueSHade,
    marginBottom: 5,
    padding: 7,
    borderRadius: 5,
  },
  ticketNumberText: {
    color: COLORS.black,
    fontSize: 16,
    fontWeight: '500',
  },
});
export default styles;
