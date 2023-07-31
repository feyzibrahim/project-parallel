import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const responseHeight = (value: number) => {
  return (height / 812) * value;
};

export const responseWidth = (value: number) => {
  return (width / 375) * value;
};
export const COLORS = {
  primary: '#6750A4',
  // secondary: '#',

  white: '#FFFFFF',
  black: '#000000',

  greyShade: '#49454F',
  greyShade1: '#625B71',
  greyShade2: '#D9D9D9',
  blueShade: '#21005D',
  blueShade1: '#1D192B',
  blueShade2: '#1D1B20',
  blueShade3: '#E8DEF8',
};

export const SIZES = {
  // global sizes
  base: 8,
  baseX2: 12,
  baseX3: 14,
  baseX4: 16,
  baseX5: 24,
  baseX6: 17,
  baseX7: 29,
  radius: 6,
  baseX8: 26,
  basex9: 10,

  // font sizes
  largeTitle: 40,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  h5: 12,
  body1: 20,
  body2: 18,
  body3: 16,
  body4: 14,
  body5: 12,
  body6: 30,
  body7: 17,

  // app dimensions
  width,
  height,
};

export const FONTS = {};

const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;
