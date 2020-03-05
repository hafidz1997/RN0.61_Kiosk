/**
 * @file Project helper functions
 * @version 0.0.1
 */
import {callApi, saveCache, getCache, doCrypt} from './helper';

/**
 * Re-generate API token
 * @author  Anne Hasan <lutfiane.fadila@gmail.com>
 * @returns {boolean} API call success status
 */
export const generateToken = async () => {
  try {
    const token = await getCache('token');
    if (token) {
      const param = {token};

      return await callApi('auth/refresh-token', param, 'POST')
        .then(async res => {
          const {httpCode, responseData} = res;
          switch (httpCode) {
            case 200:
              await saveCache('token', responseData.results.token);
              return true;
            case 401:
              console.log('Failed to generate API token');
              return false;
            default:
              console.log('Failed to generate API token');
              return false;
          }
        })
        .catch(error => {
          console.log(error);
          return false;
        });
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};

/**
 * Check authorization
 * @author Anne Hasan <lutfiane.fadila@gmail.com>
 */
export const checkAuth = async () => {
  try {
    const token = await getCache('token');
    if (token === null) {
      return false;
    } else {
      return true;
    }
  } catch (err) {
    console.log(err);
    return false;
  }
};

/**
 * Set logged in user data
 * @author Anne Hasan <lutfiane.fadila@gmail.com>
 * @param {string} key
 */
export const setSess = async (key, value) => {
  try {
    const sess = await getCache('localSess');
    if (sess) {
      const sessArr = JSON.parse(doCrypt(sess, true));
      await saveCache(
        'localSess',
        doCrypt(
          JSON.stringify({
            ...sessArr,
            [key]: value,
          }),
        ),
      );
    } else {
      await saveCache('localSess', doCrypt(JSON.stringify({[key]: value})));
    }
  } catch (err) {
    console.log(err);
  }
};

/**
 * Get logged in user data
 * @author Anne Hasan <lutfiane.fadila@gmail.com>
 * @param {string} key
 */
export const getSess = async key => {
  try {
    const userdata = await getCache('localSess');
    if (userdata) {
      const userdataArr = JSON.parse(doCrypt(userdata, true));
      return key ? userdataArr[key] : userdataArr;
    } else {
      return null;
    }
  } catch (err) {
    console.log(err);
  }
};

/**
 * Get current firebase messaging token
 * @author Anne Hasan <lutfiane.fadila@gmail.com>
 */
import firebase from 'react-native-firebase';
export const readFcmToken = async () => {
  try {
    const sess = await getCache('localSess');
    if (sess) {
      const sessData = JSON.parse(doCrypt(sess, true));
      if (!sessData.fcmToken) {
        let fcmToken = await firebase.messaging().getToken();
        saveCache(
          'localSess',
          doCrypt(JSON.stringify({...sessData, fcmToken})),
        );

        return fcmToken;
      } else {
        return sessData.fcmToken;
      }
    } else {
      let fcmToken = await firebase.messaging().getToken();
      saveCache('localSess', doCrypt(JSON.stringify({fcmToken})));
      return fcmToken;
    }
  } catch (err) {
    console.log(err);
  }
};

/**
 * Check mobile app update
 * @author  Anne Hasan <lutfiane.fadila@gmail.com>
 * @returns {Object} Important and medium update app version
 */
export const checkUpdate = async () => {
  var ret = null;
  try {
    const param = {
      platform: Platform.OS,
    };

    await callApi('check_version', param)
      .then(res => {
        console.log(res);
        const {httpCode, responseData} = res;
        if (httpCode == 200) {
          ret = responseData;
        }
      })
      .catch(error => {
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }

  return ret;
};
