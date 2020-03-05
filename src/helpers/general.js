/**
 * @file Global functions
 * @version 0.0.8
 */
import React, {Component} from 'react';

// Load constants
import * as cnst from '../config/constants';
import {getSess, setSess} from './project';

/**
 * Cut string if more than defined maximum characters
 * @param   {string} string - String to be shorten
 * @param   {number} max - Maximum character
 *
 * @returns {string} shortened string
 */
export function shortenString(string, max = 46) {
  if (string) {
    return string.length > max ? string.substr(0, max - 1) + '...' : string;
  } else {
    return null;
  }
}

/**
 * Shorten number (ex: 2.5K, 9M)
 * @param   {number} number - Number to be shorten
 *
 * @returns {string} shortened number
 */
export function shortenNumber(number) {
  let newNumber;
  if (number.toString().length > 12) {
    newNumber = number / 10 ** 12;
    newNumber = Math.floor(newNumber * 100) / 100;
    return newNumber.toString() + 'T';
  } else if (number.toString().length > 9) {
    newNumber = number / 10 ** 9;
    newNumber = Math.floor(newNumber * 100) / 100;
    return newNumber.toString() + 'B';
  } else if (number.toString().length > 6) {
    newNumber = number / 10 ** 6;
    newNumber = Math.floor(newNumber * 100) / 100;
    return newNumber.toString() + 'M';
  } else if (number.toString().length > 3) {
    newNumber = number / 10 ** 3;
    newNumber = Math.floor(newNumber * 100) / 100;
    return newNumber.toString() + 'K';
  } else {
    return number;
  }
}

/**
 * Sanitize formatted currency string into clear number
 * @param   {string} value - String to be shorten
 * @param   {string} thousandDelimiter - currency format delimiter
 *
 * @returns {string} sanitized string
 */
export function sanitizeCurrency(value, thousandDelimiter = ',') {
  var pureNumber = 0;

  if (value.toString().indexOf('Rp ') > -1) {
    value = value.replace(/\bRp \b/g, '');
  }

  if (value.toString().indexOf(thousandDelimiter) > -1) {
    pureNumber = value.replace(/\,/g, '');
    // pureNumber = pureNumber.replace(/\./g, '');
    // pureNumber = value.replace(/\./g, '');
  } else {
    pureNumber = value;
  }

  return pureNumber;
}

/**
 * Convert number to currency format string
 * @param   {number} amount - Number to convert
 * @param   {number} decimalCount - Digits after the decimal place
 * @param   {string} decimal - Decimal separator character
 * @param   {string} thousands - Thousands separator character
 *
 * @returns {string} Currency formatted number
 */
export function formatCurrency(
  amount,
  decimalCount = 2,
  decimal = '.',
  thousands = ',',
) {
  try {
    decimalCount = Math.abs(decimalCount);
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

    const negativeSign = amount < 0 ? '-' : '';

    let i = parseInt(
      (amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)),
    ).toString();
    let j = i.length > 3 ? i.length % 3 : 0;

    return (
      negativeSign +
      (j ? i.substr(0, j) + thousands : '') +
      i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thousands) +
      (decimalCount
        ? decimal +
          Math.abs(amount - i)
            .toFixed(decimalCount)
            .slice(2)
        : '')
    );
  } catch (e) {
    console.log(e);
  }
}

/**
 * Convert date format
 * @author Anne Hasan <lutfiane.fadila@gmail.com>
 * @param  {string} date
 * @param  {string} [format='YYYY-MM-DD'] - Date format
 *
 * @returns {string} Converted date
 */
import moment from 'moment';
import 'moment/locale/id';
export function formatDate(date, format = 'YYYY-MM-DD') {
  moment.locale('id');
  return moment(date).format(format);
}
export function formatTime(time, format = 'HH:mm') {
  moment.locale('id');
  return moment(time).format(format);
}

/**
 * Convert PHP/MySQL date format into JS date
 * @author Anne Hasan <lutfiane.fadila@gmail.com>
 * @param  {string} date
 * @param  {bool} [isDateTime=false]
 *
 * @returns {Date} Converted date
 */
export function jsDate(date, isDateTime = false) {
  try {
    // Split timestamp into [ Y, M, D, h, m, s ]
    var t = date.split(/[- :]/);

    // Apply each element to the Date function
    if (isDateTime) {
      date = new Date(t[0], t[1] - 1, t[2], t[3], t[4], t[5]);
      // date = new Date(Date.UTC(t[0], t[1]-1, t[2], t[3]-7, t[4], t[5]));
    } else {
      date = new Date(t[0], t[1] - 1, t[2]);
    }

    return date;
  } catch (error) {
    // console.log(error)
  }
}

/**
 * Convert date string into readable date
 * @author Anne Hasan <lutfiane.fadila@gmail.com>
 * @param  {string} date
 * @param  {bool} [isShort=false]
 *
 * @returns {Date} Converted date
 */
export function renderTime(date, isShort = false) {
  date = new Date(jsDate(date, true));
  const now = new Date();

  if (date <= now) {
    const diff = now - date;
    const hour = Math.floor(diff / 1000 / 60 / 60);
    const minute = Math.floor(diff / 1000 / 60);
    const second = Math.floor(diff / 1000);

    if (second < 59) {
      return second + ' detik yang lalu';
    } else if (minute < 59) {
      return minute + ' menit yang lalu';
    } else if (hour < 24) {
      return hour + ' jam yang lalu';
    } else if (now.getFullYear() <= date.getFullYear()) {
      if (isShort) {
        return formatDate(date, 'DD MMMM');
      } else {
        return formatDate(date, 'DD MMMM HH:mm');
      }
    } else {
      if (isShort) {
        return formatDate(date, 'DD MMMM YYYY');
      } else {
        return formatDate(date, 'DD MMMM YYYY HH:mm');
        // return formatDate(date, 'DD MMMM YYYY HH:mm:ss')
      }
    }
  } else {
    if (now.getFullYear() <= date.getFullYear()) {
      if (isShort) {
        return formatDate(date, 'DD MMMM');
      } else {
        return formatDate(date, 'DD MMMM HH:mm');
      }
    } else {
      if (isShort) {
        return formatDate(date, 'DD MMMM YYYY');
      } else {
        return formatDate(date, 'DD MMMM YYYY HH:mm');
        // return formatDate(date, 'DD MMMM YYYY HH:mm:ss')
      }
    }
  }
}

/**
 * Validate username value.
 * Only accept alphabets or numbers with minimum length 7 characters.
 * @author  Anne Hasan <lutfiane.fadila@gmail.com>
 * @param   {string} str - String to validate
 *
 * @returns {boolean} Validate status
 */
export function validateUsername(str) {
  let reg = /^([^-!$%^&*()_+|~=`{}\[\]:";'<>?,.#@\/]{7,})*$/;
  return reg.test(str);
}

/**
 * Validate phone value
 * @author  Anne Hasan <lutfiane.fadila@gmail.com>
 * @param   {string} str - String to validate
 *
 * @returns {boolean} Validate status
 */
export function validatePhone(str) {
  let reg = /^\d{8,13}$/;
  return reg.test(str);
}

/**
 * Validate email value input with format: xxxx@example.domain
 * @author  Anne Hasan <lutfiane.fadila@gmail.com>
 * @param   {string} str - String to validate
 *
 * @returns {boolean} Validate status
 */
export function validateEmail(str) {
  let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return reg.test(str);
}

/**
 * Validate minimum character
 * @author  Anne Hasan <lutfiane.fadila@gmail.com>
 * @param   {string} str - String to validate
 * @param   {string} [min=6] - Minimum character length
 *
 * @returns {boolean} Validate status
 */
export function minCharValidate(str = '', min) {
  min = min ? min : 6;
  return str.length >= min ? true : false;
}

/**
 * Validate matching fields
 * @author Anne Hasan <lutfiane.fadila@gmail.com>
 * @param  {string} strMatcher - Matcher string
 * @param  {string} str - String to validate
 *
 * @returns {boolean} Validate status
 */
export function matchFieldValidate(strMatcher, str) {
  return str == strMatcher ? true : false;
}

/**
 * Fetch API
 * @author Anne Hasan <lutfiane.fadila@gmail.com>
 * @param   {string} endPoint - API endpoint
 * @param   {Object} param - data sent to API
 * @param   {string} [method=GET] - HTTP method
 *
 * @returns {Object} APIresponse
 */
import queryString from 'query-string';
import NetInfo from '@react-native-community/netinfo';
export const callApi = async (endPoint, param, method = 'GET') => {
  endPoint = cnst.API_BASE_URL + endPoint;
  var httpCode = 200;
  var header = {};
  var fetchParam = {
    method: method,
  };

  if (param) {
    for (var field in param) {
      if (param[field] == null && field.indexOf('_id') === -1) {
        param[field] = '';
      }
    }
  } else {
    param = '';
  }

  if (method === 'POST') {
    header = {Accept: 'application/json'};

    if (
      endPoint.indexOf('/avatar') > -1 ||
      endPoint.indexOf('/files') > -1 ||
      endPoint.indexOf('/file') > -1
    ) {
      header['Content-Type'] = param
        ? 'multipart/form-data'
        : 'multipart/form-data; charset=utf-8; boundary=' +
          Math.random()
            .toString()
            .substr(2);
      let formData = new FormData();
      for (var field in param) {
        formData.append(field, param[field]);
      }

      fetchParam.body = formData;
    } else {
      header['Content-Type'] = 'application/json';
      fetchParam.body = JSON.stringify(param);
    }
  } else {
    header = {Accept: 'application/json'};

    if (method == 'GET' && param) {
      endPoint = endPoint + '?' + queryString.stringify(param);
      endPoint = decodeURIComponent(endPoint);
    } else if (method == 'PUT') {
      fetchParam.body = JSON.stringify(param);
      header['Content-Type'] = 'application/json';
    }
  }

  if (endPoint.indexOf('auth') == -1) {
    const token = await getSess('token');
    if (token) {
      header.Authorization = 'Bearer ' + token;
    }
  }

  fetchParam.headers = header;
  return NetInfo.fetch()
    .then(state => {
      if (state.isConnected) {
        return fetch(endPoint, fetchParam)
          .then(async response => {
            httpCode = response.status;
            if (endPoint.indexOf('auth') == -1) {
              switch (httpCode) {
                case 413:
                  return {message: 'Request Entity Too Large'};
                case 401:
                  console.log('regenerate token');
                  const token = await getSess('token');
                  if (token) {
                    var i = 0;
                    do {
                      await callApi('auth/refresh-token', {token}, 'POST')
                        .then(async res => {
                          switch (res.httpCode) {
                            case 200:
                              await setSess(
                                'token',
                                res.responseData.results.token,
                              );
                              return true;
                            default:
                              i++;
                              break;
                          }
                        })
                        .catch(() => i++);
                    } while (i < 3);
                    return {message: 'Unauthorized'};
                  } else {
                    return {message: 'Unauthorized'};
                  }
                default:
                  return response.json();
              }
            } else {
              return response.json();
            }
          })
          .then(responseJson => {
            return {
              httpCode: httpCode,
              responseData: responseJson,
            };
          })
          .catch(error => {
            console.log({
              endPoint,
              ...fetchParam,
              httpCode,
              error,
            });

            throw error;
          });
      } else {
        throw 'No network connection';
      }
    })
    .catch(error => {
      throw error;
    });
};

// Get device public IP address
export const publicIP = async () => {
  try {
    return fetch('https://api.ipify.org?format=json')
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        return responseJson.ip;
      })
      .catch(error => {
        throw error;
      });
  } catch (error) {
    console.log(error);
  }
};

/**
 * Reverse geocoding, using OpenStreetMap Nominatim
 * @author Anne Hasan <lutfiane.fadila@gmail.com>
 * @param  {number|string} key - Item key
 * @param  {Object|number|string} value - Item value
 */
export const reverseGeocoding = async (longitude, latitude) => {
  try {
    const param = {
      location: latitude + ',' + longitude,
      key:
        'JRsFSh6oB1tUI9TiiVti2KRMO4OWdHgPth1iJxVYFoFPrXdoCVH9l7NjpojCeAEPAKDRAc1jxUgjy',
    };

    return fetch(
      'http://13.228.214.159/reverse_geocoding?' + queryString.stringify(param),
    )
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        return responseJson;
      })
      .catch(error => {
        throw error;
      });
  } catch (error) {
    console.log(error);
  }
};

/**
 * Reverse geocoding, using OpenStreetMap Nominatim
 * @author Anne Hasan <lutfiane.fadila@gmail.com>
 * @param  {string} keyword - Search keyword
 * @param  {string} area - Search area [latitude,longitude]
 */
export const placesAutocomplete = async (keyword, area) => {
  try {
    const param = {
      key:
        'PyUDVpqwapTggjaZzKRTBeNO1zoClxVBgvvorVpQgDRF3pbTlieEX99gOW0WNUPaxQJN3XCaDZbxB5',
      q: keyword,
      area: area,
    };

    return fetch(
      'http://13.228.214.159/gmap_autocomplete?' + queryString.stringify(param),
    )
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        return responseJson;
      })
      .catch(error => {
        throw error;
      });
  } catch (error) {
    console.log(error);
  }
};

/**
 * Save data to AsyncStorage
 * @author Anne Hasan <lutfiane.fadila@gmail.com>
 * @param  {number|string} key - Item key
 * @param  {Object|number|string} value - Item value
 */
import AsyncStorage from '@react-native-community/async-storage';
export const saveCache = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (err) {
    console.log(err);
  }
};

/**
 * Get data from AsyncStorage
 * @author Anne Hasan <lutfiane.fadila@gmail.com>
 * @param  {number|string} key - Item key
 * @param  {?(error: ?Error, result: ?string) => void} callback
 */
export const getCache = async (key, callback) => {
  try {
    return await AsyncStorage.getItem(key, callback);
  } catch (err) {
    console.log(err);
  }
};

/**
 * Reset AsyncStorage data
 * @author Anne Hasan <lutfiane.fadila@gmail.com>
 */
export const clearCache = async () => {
  try {
    await AsyncStorage.clear();
    return true;
  } catch (err) {
    console.log(err);
  }
};

/**
 * Get object key inside an array by its propety value
 * @author Anne Hasan <lutfiane.fadila@gmail.com>
 * @param  {Object} array - Array data
 * @param  {string} itemKey - Object's property name
 * @param  {string|number} q - Value as keyword
 *
 * @return {number} i - Object key
 */
export function searchObj(array, itemKey, q, accurate = true) {
  try {
    for (var i = 0; i < array.length; i += 1) {
      if (accurate === false) {
        if (array[i][itemKey].indexOf(q) > -1) {
          return i;
        }
      } else {
        if (array[i][itemKey] === q) {
          return i;
        }
      }
    }

    return -1;
  } catch (error) {
    console.log(error);
  }
}

/**
 * Display Toast
 * @author Anne Hasan <lutfiane.fadila@gmail.com>
 * @param  {string} msg - Text to display
 */
import {ToastAndroid} from 'react-native';
export function showToast(msg) {
  ToastAndroid.showWithGravityAndOffset(
    msg,
    ToastAndroid.SHORT,
    ToastAndroid.BOTTOM,
    25,
    50,
  );
}

/**
 * Date Picker
 * @author Anne Hasan <lutfiane.fadila@gmail.com>
 * @param  {string} currentDate - current date in JS date format
 */
import {Platform, DatePickerAndroid, TimePickerAndroid} from 'react-native';
export const datePicker = async currentDate => {
  if (Platform.OS === 'android') {
    try {
      const {action, year, month, day} = await DatePickerAndroid.open({
        date: currentDate,
        mode: 'spinner',
      });

      if (action !== DatePickerAndroid.dismissedAction) {
        return new Date(year, month, day);
      }
    } catch ({code, message}) {
      console.log('Cannot open date picker', message);
    }
  } else {
  }
};

export const timePicker = async (currentHour, currentMinute) => {
  if (Platform.OS === 'android') {
    try {
      const {action, hour, minute} = await TimePickerAndroid.open({
        hour: currentHour,
        minute: currentMinute,
        mode: 'spinner',
        is24Hour: true,
      });
      if (action !== TimePickerAndroid.dismissedAction) {
        return new Date(hour, minute);
      }
    } catch ({code, message}) {
      console.warn('Cannot open time picker', message);
    }
  } else {
  }
};

/**
 * Flash Message
 * @author Anne Hasan <lutfiane.fadila@gmail.com>
 * @param  {string} title - Text to display
 */
import {showMessage} from 'react-native-flash-message';
import {FONT_FAMILY} from '../assets/stylesheet/main';
export function flashMessage(title) {
  showMessage({
    message: title,
    type: 'warning',
    hideStatusBar: true,
    style: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFDD00',
    },
    titleStyle: {
      color: '#3E50B4',
      fontSize: 15,
      textAlign: 'center',
      fontFamily: FONT_FAMILY.regular,
    },
  });
}

/**
 * Multi-language set
 * @author Anne Hasan <lutfiane.fadila@gmail.com>
 * @param  {string} str
 * @param  {string} languageCode
 *
 * @return  {string} Translated text
 */
import {id} from '../config/lang/id';
import {en} from '../config/lang/en';
export function lang(str, languageCode = 'id') {
  const availableLang = {id, en};
  // if (!languageCode) {
  //   const currentLang = getCache('lang');
  //   console.log('currentLang',currentLang);
  //   languageCode = currentLang ? currentLang : 'id';
  // } else {
  //   languageCode = 'id';
  // }

  try {
    if (typeof availableLang[languageCode][str] !== undefined) {
      return availableLang[languageCode][str];
    } else {
      return '';
    }
  } catch (error) {
    console.log(error);
  }
}

/**
 * Encrypt string to Base64 -> Vigenère -> Hex
 * @author Anne Hasan <lutfiane.fadila@gmail.com>
 * @param  {string} str - Text to encrypt
 * @param  {boolean} [isDecrypt=false] - Is decrypting status
 *
 * @return  {string} Encrypted text
 */
export function doCrypt(str, isDecrypt = false) {
  try {
    var Buffer = require('buffer/').Buffer;
    const key1 = '__DEPteChd1g1t4l_';
    const key2 = 'lap0r!sp4n';
    str = str.toString();
    var keyVigenere = filterVigenereKey(key2);
    if (isDecrypt) {
      // Decrypt from hex
      var buff = new Buffer(str, 'hex');
      str = buff.toString('ascii');

      // Reverse vigenere key
      for (var i = 0; i < keyVigenere.length; i++) {
        keyVigenere[i] = (26 - keyVigenere[i]) % 26;
      }

      // Decrypt from vigenere
      str = cryptVigenere(str, keyVigenere);

      // Decrypt from base64
      var buff = new Buffer(str, 'base64');
      str = buff.toString('ascii');
      if (str.indexOf(key1) == -1) {
        return false;
      }

      return str.replace(key1, '');
    } else {
      let buff = new Buffer(key1 + str);

      // Encrypt to Base64
      str = buff.toString('base64');

      // Encrypt to Vigenère
      str = cryptVigenere(str, keyVigenere);

      // Encrypt to Hex
      return new Buffer(str).toString('hex');
    }
  } catch (error) {
    console.log(error);
  }
}

/**
 * Encrypt to Vigenère cipher
 * @author Anne Hasan <lutfiane.fadila@gmail.com>
 * @param  {string} input - Text to encrypt
 * @param  {string} key - Cipher key
 *
 * @return  {string} Encrypted text
 */
export function cryptVigenere(input, key) {
  var output = '';
  for (var i = 0, j = 0; i < input.length; i++) {
    var c = input.charCodeAt(i);
    if (isUppercase(c)) {
      output += String.fromCharCode(((c - 65 + key[j % key.length]) % 26) + 65);
      j++;
    } else if (isLowercase(c)) {
      output += String.fromCharCode(((c - 97 + key[j % key.length]) % 26) + 97);
      j++;
    } else {
      output += input.charAt(i);
    }
  }
  return output;
}

/**
 * Returns an array of numbers, each in the range [0, 26), representing the given key.
 * The key is case-insensitive, and non-letters are ignored.
 * Examples:
 * - filterVigenereKey("AAA") = [0, 0, 0].
 * - filterVigenereKey("abc") = [0, 1, 2].
 * - filterVigenereKey("the $123# EHT") = [19, 7, 4, 4, 7, 19].
 * @param  {string} key - Cipher key
 * @return  {string} Sanitized key
 */
function filterVigenereKey(key) {
  var result = [];
  for (var i = 0; i < key.length; i++) {
    var c = key.charCodeAt(i);
    if (isLetter(c)) {
      result.push((c - 65) % 32);
    }
  }
  return result;
}

/**
 * Checks whether the specified character code is a letter
 * @param  {string} c - Character to check
 * @return  {boolean} Is character a letter
 */
function isLetter(c) {
  return isUppercase(c) || isLowercase(c);
}

/**
 * Checks whether the specified character code is an uppercase letter.
 * @param  {string} c - Character to check
 * @return  {boolean} Is character an uppercase letter
 */
function isUppercase(c) {
  return c >= 65 && c <= 90; // 65 is character code for 'A'. 90 is 'Z'.
}

/**
 * Checks whether the specified character code is an lowercase letter.
 * @param  {string} c - Character to check
 * @return  {boolean} Is character an lowercase letter
 */
function isLowercase(c) {
  return c >= 97 && c <= 122; // 97 is character code for 'a'. 122 is 'z'.
}
