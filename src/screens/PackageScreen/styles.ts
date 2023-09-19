import {COLORS} from '@app/constants/themes';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  table: {
    backgroundColor: '#fff',
  },
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
    fontSize: 20,
  },
  row: {
    flexDirection: 'row', // To position cells side by side
    justifyContent: 'space-between', // To evenly space Title and Action
  },
  cell: {
    flex: 1, // Equal flex values for both cells within a row
  },
  actions: {
    flexDirection: 'row', // To position icons side by side
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
});
export default styles;
