import {StyleSheet} from 'react-native';
import {COLORS} from '@app/constants/themes';

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  cardFlex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nameFlex: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardTime: {
    fontSize: 16,
  },
  cardDetails: {
    fontSize: 16,
    color: '#666',
  },
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
export default styles;
