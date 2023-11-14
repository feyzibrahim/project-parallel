import {COLORS} from '@app/constants/themes';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 3,
  },
  UpperPart: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: 30,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 30,
  },
  body: {
    flex: 1,
    // paddingVertical: 20,
    // alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  middlePart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
  },
  navigationText: {
    color: COLORS.black,
    fontWeight: '500',
    fontSize: 15,
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 30,
    paddingHorizontal: 16,
    marginTop: 10,
  },
  logoutButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: COLORS.redShade,
  },
  logoutButtonText: {
    color: COLORS.redShade,
    fontWeight: '400',
  },
});
export default styles;
