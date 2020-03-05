import React, {Component} from 'react';
import {Dimensions, StatusBar} from 'react-native';

// Screen Dimension
export const WINDOW_WIDTH = Dimensions.get('window').width;
export const WINDOW_HEIGHT = Dimensions.get('window').height;
export const SCREEN_WIDTH = Dimensions.get('screen').width;
export const SCREEN_HEIGHT = Dimensions.get('screen').height;

export const ANDROID_NAVBUTTON_HEIGHT = SCREEN_HEIGHT - WINDOW_HEIGHT;

// Colors
export const PRIMARY_COLOR = '#3E50B4';
export const RED_PRIMARY_COLOR = '#e74052';

// Navbar
export const NAV_BAR = {
  bgLight: '#FFFFFF',
  bgDark: PRIMARY_COLOR,
  tintLight: PRIMARY_COLOR,
  tintDark: '#FFFFFF',
  iconSize: 28,
  fontSize: 21,
  height: 60,
  statusBarHeight: StatusBar.currentHeight,
};

export const TAB_BAR = {
  bgLight: '#FFFFFF',
  bgDark: '#3E50B4',
  tintLight: '#3E50B4',
  tintLightActive: '#3E50B4',
  tintDark: '#FFFFFF',
  tintDarkActive: '#FFFFFF',
  indicatorColor: '#FFFFFF',
  topFontSize: 14,
  bottomFontSize: 28,
};

// Fonts
export const FONT_FAMILY = {
  regular: 'Neo Sans Regular',
  italic: 'Neo Sans Italic',
  medium: 'Neo Sans Medium',
  mediumItalic: 'Neo Sans Medium Italic',
  light: 'Neo Sans Light',
  lightItalic: 'Neo Sans Light Italic',
  bold: 'Neo Sans Bold',
  boldItalic: 'Neo Sans Bold Italic',
};

export default Object.freeze({
  col12: {
    width: '100%',
  },
  col11: {
    width: '91.66666667%',
  },
  col10: {
    width: '83.33333333%',
  },
  col9: {
    width: '75%',
  },
  col8: {
    width: '66.66666667%',
  },
  col7: {
    width: '58.33333333%',
  },
  col6: {
    width: '50%',
  },
  col5: {
    width: '41.66666667%',
  },
  col4: {
    width: '25%',
  },
  col3: {
    width: '33.33333333%',
  },
  col2: {
    width: '16.66666667%',
  },
  col1: {
    width: '8.33333333%',
  },
  container: {
    flexGrow: 1,
    justifyContent: 'space-between',
    // paddingBottom: 20,
    // paddingHorizontal: 20,
    padding: 20,
  },
});
