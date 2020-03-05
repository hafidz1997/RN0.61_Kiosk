/**
 * @file React-navigation helper
 * @version 0.0.1
 */
import React, {Component} from 'react';
import {StatusBar, Platform} from 'react-native';
import {FONT_FAMILY, NAV_BAR} from '../assets/stylesheet/main';
import NavHeader from '../components/NavHeader';

export const NAV_COLOR = '#D0021B';
export const NAV_TITLE_COLOR = '#FFFFFF';
export const NAV_ICON_COLOR = '#FFFFFF';
export const NAV_ICON_SIZE = 28;
export const NAV_FONT_SIZE = 16;
export const NAV_HEIGHT = 60 + StatusBar.currentHeight;
export const TAB_COLOR = '#CB0C3F';
export const TAB_FONT_SIZE = 14;
export const TAB_INDICATOR_COLOR = '#FFFFFF';
export const BOTTOM_TAB_FONT_SIZE = 28;

export const defaultHeader = title => {
  if (Platform.OS == 'ios') {
    return {
      title: title ? title : '',
      headerStyle: {
        backgroundColor: NAV_BAR.bgLight,
      },
      headerTintColor: NAV_BAR.tintLight,
      headerTitleStyle: {
        color: NAV_BAR.tintLight,
        fontSize: NAV_BAR.fontSize,
      },
    };
  } else {
    return {
      title: title ? title : '',
      headerStyle: {
        paddingTop: StatusBar.currentHeight,
        backgroundColor: NAV_BAR.bgLight,
        height: NAV_BAR.height,
        elevation: 0,
      },
      headerTintColor: NAV_BAR.tintLight,
      headerTitleStyle: {
        color: NAV_BAR.tintLight,
        fontWeight: '200',
        fontSize: NAV_BAR.fontSize,
        fontFamily: FONT_FAMILY.regular,
      },
    };
  }
};

export const darkHeader = title => {
  if (Platform.OS === 'ios') {
    return {
      title: title ? title : '',
      headerStyle: {
        backgroundColor: NAV_BAR.bgDark,
      },
      headerTintColor: NAV_BAR.tintDark,
      headerTitleStyle: {
        color: NAV_BAR.tintDark,
        fontSize: NAV_BAR.fontSize,
      },
    };
  } else {
    return {
      title: title ? title : '',
      headerStyle: {
        paddingTop: StatusBar.currentHeight,
        backgroundColor: NAV_BAR.bgDark,
        height: NAV_BAR.height,
        elevation: 0,
      },
      headerTintColor: NAV_BAR.tintDark,
      headerTitleStyle: {
        color: NAV_BAR.tintDark,
        fontWeight: '200',
        fontSize: NAV_BAR.fontSize,
        fontFamily: FONT_FAMILY.regular,
      },
    };
  }
};

export const centeredTitleHeader = (navigation, param = {}) => {
  const title = param.title ? param.title : '';
  const leftPressEvent = param.leftPressEvent
    ? param.leftPressEvent
    : () => navigation.goBack();
  const rightElement = param.rightElement ? param.rightElement : '';
  const rightPressEvent = param.rightPressEvent ? param.rightPressEvent : '';
  const theme = param.theme ? param.theme : 'light';
  const isDrawer = param.isDrawer ? param.isDrawer : false;
  return {
    header: (
      <NavHeader
        title={title}
        theme={theme}
        isDrawer={isDrawer}
        onLeftElementPress={leftPressEvent}
        rightElement={rightElement}
        onRightElementPress={rightPressEvent}
      />
    ),
  };
};
