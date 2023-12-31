import {StyleSheet} from 'react-native';
import {COLORS} from '@app/constants/themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: COLORS.white,
  },
  gameList: {
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  header: {
    backgroundColor: COLORS.grayShade2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
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
});
export default styles;
