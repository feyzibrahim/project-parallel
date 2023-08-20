import {StyleSheet} from 'react-native';
import {COLORS} from '@app/constants/themes';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 24,
        backgroundColor:COLORS.white
      },
      header: {
        backgroundColor: COLORS.grayShade2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
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
        borderBottomWidth: 1,
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
});
export default styles;
