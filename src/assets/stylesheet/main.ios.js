import React, { Component } from "react";
import { Dimensions } from "react-native";

// Screen Dimension
export const WINDOW_WIDTH         = Dimensions.get("window").width;
export const WINDOW_HEIGHT        = Dimensions.get("window").height;
export const SCREEN_WIDTH         = Dimensions.get("screen").width;
export const SCREEN_HEIGHT        = Dimensions.get("screen").height;
export const IOS_STATUSBAR_HEIGHT = 20;

// Colors
export const BASE_COLOR       = '#F1F5F7';
export const BASE_TINT        = '#ffffff';
export const APP_COLOR_SCHEME = '#D0021B';
export const RED_LABEL_COLOR  = '#CD0812';

// Navbar
export const NAV_COLOR            = '#D0021B';
export const NAV_TITLE_COLOR      = '#FFFFFF';
export const NAV_ICON_COLOR       = '#FFFFFF';
export const NAV_ICON_SIZE        = 28;
export const NAV_FONT_SIZE        = 17;
export const NAV_HEIGHT           = 60 + IOS_STATUSBAR_HEIGHT;
export const TAB_COLOR            = '#CB0C3F';
export const TAB_FONT_SIZE        = 14;
export const TAB_INDICATOR_COLOR  = '#FFFFFF';
export const BOTTOM_TAB_FONT_SIZE = 28;

// Fonts
export const FONT_FAMILY   = {
  regular: 'NeoSansStd-Regular',
  light: 'NeoSansStd-Light',
  bold: 'NeoSansStd-Bold'
};

export default Object.freeze({
  col12: {
    width: "100%"
  },
  col11: {
    width: "91.66666667%"
  },
  col10: {
    width: "83.33333333%"
  },
  col9: {
    width: "75%"
  },
  col8: {
    width: "66.66666667%"
  },
  col7: {
    width: "58.33333333%"
  },
  col6: {
    width: "50%"
  },
  col5: {
    width: "41.66666667%"
  },
  col4: {
    width: "25%"
  },
  col3: {
    width: "33.33333333%"
  },
  col2: {
    width: "16.66666667%"
  },
  col1: {
    width: "8.33333333%"
  },
  navbar: {
    backgroundColor: NAV_COLOR, 
    // height: NAV_HEIGHT, 
    // paddingTop: IOS_STATUSBAR_HEIGHT 
  },
  navbarTitle: {
    color: NAV_TITLE_COLOR, 
    fontSize: NAV_FONT_SIZE, 
    justifyContent: 'center',
    alignSelf: 'center', 
    fontFamily: FONT_FAMILY.semibold
  },
  container: {
    flex: 1, 
    backgroundColor: '#E6E7E8'
  },
  mainContainer: {
    flex: 1,
    paddingVertical: 30,
    backgroundColor: 'transparent',
    paddingHorizontal: 20,
  },
  breadcrumb: {
    height: 60,
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: WINDOW_WIDTH,
    backgroundColor: '#fff',
    marginBottom: 5
  },
  profileImage: {
    paddingVertical: 30,
    width: 100,
    height: 100,
    borderRadius: 75,
    backgroundColor: '#E6E7E8'
  },
  breadcrumbNumber: {
    default: {
      color: '#959597',
      borderColor: '#959597',
      width: 20,
      height: 20,
      textAlign: 'center',
      marginRight: 10,
      borderWidth: 1,
      borderRadius: 10,
    },
    active: {
      color: '#fff',
      borderColor: '#d0021b',
      backgroundColor: '#d0021b',
      width: 20,
      height: 20,
      textAlign: 'center',
      marginRight: 10,
      borderWidth: 1,
      borderRadius: 10,
    }
  },
  breadcrumbText: {
    default: {
      fontSize: 14,
      color: '#959597',
      textAlign: 'left',
      fontFamily: FONT_FAMILY.regular
    },
    active: {
      fontSize: 14,
      color: '#d0021b',
      textAlign: 'left',
      fontFamily: FONT_FAMILY.regular
    }
  },
  breadcrumbChevron: {
    textAlign: 'center', 
    marginLeft: 15, 
    marginRight: 15,
    alignSelf: 'center'
  }
});
