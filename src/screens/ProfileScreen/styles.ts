import {COLORS} from '@app/constants/themes';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  profileHeader: {
    backgroundColor: COLORS.grayShade2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  headerText: {
    color: COLORS.black,
    fontSize: 25,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 3,
    // alignItems: 'center',
    // justifyContent: 'center',
    // padding: 20,
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
  email: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20,
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  detailLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },
  detailValue: {
    fontSize: 18,
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
    marginVertical: 20,
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
