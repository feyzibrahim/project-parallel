import {StyleSheet} from 'react-native';
import {COLORS} from '@app/constants/themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: COLORS.white,
  },
  userItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 26,
    borderBottomWidth: 0.5,
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
  selectedUserItem: {
    // styles for a selected item
    backgroundColor: 'lightblue', // customize as needed
    borderWidth: 2,
    borderColor: 'blue',
  },
  loadingView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: COLORS.grayShade2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    gap: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    paddingLeft: 10,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    paddingHorizontal: 10,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});
export default styles;
