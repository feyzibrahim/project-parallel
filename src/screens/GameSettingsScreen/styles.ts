import {StyleSheet} from 'react-native';
import {COLORS} from '@app/constants/themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: COLORS.white,
  },
  header: {
    backgroundColor: COLORS.grayShade2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // paddingHorizontal: 16,
    paddingVertical: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  userItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 26,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  lastUserItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 26,
    borderBottomWidth: 0, // Remove the bottom border
    borderBottomColor: '#ccc',
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  userType: {
    fontSize: 14,
    color: '#555',
  },
  floatingButton: {
    position: 'absolute',
    bottom: 20, // Adjust the distance from the bottom
    right: 20, // Adjust the distance from the right
    backgroundColor: 'blue',
    borderRadius: 30,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4, // Adds a shadow on Android
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
export default styles;
