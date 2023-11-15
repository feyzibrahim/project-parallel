import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '@app/constants/themes';

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  header: {
    color: COLORS.black,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  winNumberParent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  winnerPlaceWrap: {
    flexDirection: 'row',
    paddingLeft: 8,
    paddingRight: 20,
    paddingVertical: 5,
    backgroundColor: COLORS.darkBlueShade,
    borderRadius: 10,
    alignItems: 'center',
    width: width / 2.5,
    margin: 6,
    justifyContent: 'space-between',
  },
  placementWrap: {
    backgroundColor: COLORS.primary,
    borderRadius: 8,
    padding: 12,
    paddingVertical: 7,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  placementText: {
    color: COLORS.white,
    fontSize: 15,
    padding: 2,
    flexDirection: 'row',
    alignItems: 'flex-end',
    right: 2,
  },
  superScript: {
    position: 'absolute',
    top: -5,
    left: -4,
    fontSize: 12,
    color: COLORS.white,
  },
  lotteryNumber: {
    color: COLORS.primary,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
export default styles;
