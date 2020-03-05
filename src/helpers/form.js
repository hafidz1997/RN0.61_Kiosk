/**
 * @file Form helper functions
 * @version 0.0.8
 */
import React, {Component} from 'react';

// Load constants
import * as cnst from '../config/constants';

// Default messages
import * as msg from '../config/messages';

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
 * Validate form
 * @author Anne Hasan <lutfiane.fadila@gmail.com>
 * @param  {Object} param - Validation config
 * @param  {Object} param.formValue - Form value
 * @param  {Object} param.prevErrorFields - Current error fields
 * @param  {Object} [param.requiredFields] - Required fields
 * @param  {string} [param.field] - Field name
 *
 * @returns {Object} Validate status
 */
export function validate(param) {
  try {
    let errors = [];
    let {formValue, prevErrorFields} = param;
    var isError = false;
    if (param.field) {
      const field = param.field;
      switch (field) {
        case 'email':
          if (validateEmail(formValue[field])) {
            errors[field] = '';
          } else {
            errors[field] = 'Format email salah';
            isError = true;
          }

          break;
        case 'password_confirmation':
          if (formValue[field]) {
            if (matchFieldValidate(formValue[field], formValue.password)) {
              errors[field] = '';
            } else {
              errors[field] = 'Kata sandi tidak sama';
              isError = true;
            }
          } else {
            errors[field] = 'Field ini dibutuhkan';
            isError = true;
          }

          break;
        default:
          if (
            formValue[field] ||
            typeof formValue[field] == 'boolean' ||
            typeof formValue[field] == 'number'
          ) {
            errors[field] = '';
          } else {
            errors[field] = 'Field ini dibutuhkan';
            isError = true;
          }

          break;
      }
    } else {
      for (var field in formValue) {
        if (param.requiredFields.indexOf(field) > -1) {
          switch (field) {
            case 'email':
              if (validateEmail(formValue[field])) {
                errors[field] = '';
              } else {
                errors[field] = 'Format email salah';
                isError = true;
              }

              break;
            case 'password_confirmation':
              if (formValue[field]) {
                if (matchFieldValidate(formValue[field], formValue.password)) {
                  errors[field] = '';
                } else {
                  errors[field] = 'Kata sandi tidak sama';
                  isError = true;
                }
              } else {
                errors[field] = 'Field ini dibutuhkan';
                isError = true;
              }

              break;
            default:
              if (
                formValue[field] ||
                typeof formValue[field] == 'boolean' ||
                typeof formValue[field] == 'number'
              ) {
                errors[field] = '';
              } else {
                errors[field] = 'Field ini dibutuhkan';
                isError = true;
              }

              break;
          }
        } else {
          errors[field] = '';
        }
      }
    }

    return {
      status: !isError,
      errorFields: {...prevErrorFields, ...errors},
    };
  } catch (error) {
    console.log(error);
  }
}

/**
 * Validate multiple form
 * @author Anne Hasan <lutfiane.fadila@gmail.com>
 * @param  {Object} param - Validation config
 * @param  {number} param.formNumber - Form number (ex: 1, 2, 3)
 * @param  {Object} param.formValue - Form value
 * @param  {Object} param.prevErrorFields - Current error fields
 * @param  {Object} [param.requiredFields] - Required fields
 * @param  {string} [param.field] - Field name
 *
 * @returns {Object} Validate status
 */
export function validateMultiple(param) {
  try {
    let errors = [];
    let {formValue, prevErrorFields} = param;
    var isError = false;
    if (param.field) {
      const field = param.field;
      switch (field) {
        case 'email':
          if (validateEmail(formValue[field])) {
            errors[field] = '';
          } else {
            errors[field] = 'Format email salah';
            isError = true;
          }

          break;
        case 'password_confirmation':
          if (formValue[field]) {
            if (matchFieldValidate(formValue[field], formValue.password)) {
              errors[field] = '';
            } else {
              errors[field] = 'Kata sandi tidak sama';
              isError = true;
            }
          } else {
            errors[field] = 'Field ini dibutuhkan';
            isError = true;
          }

          break;
        default:
          if (
            formValue[field] ||
            typeof formValue[field] == 'boolean' ||
            typeof formValue[field] == 'number'
          ) {
            errors[field] = '';
          } else {
            errors[field] = 'Field ini dibutuhkan';
            isError = true;
          }

          break;
      }
    } else {
      param.requiredFields['form' + param.formNumber].map(field => {
        switch (field) {
          case 'email':
            if (validateEmail(formValue[field])) {
              errors[field] = '';
            } else {
              errors[field] = 'Format email salah';
              isError = true;
            }

            break;
          case 'password_confirmation':
            if (formValue[field]) {
              if (matchFieldValidate(formValue[field], formValue.password)) {
                errors[field] = '';
              } else {
                errors[field] = 'Kata sandi tidak sama';
                isError = true;
              }
            } else {
              errors[field] = 'Field ini dibutuhkan';
              isError = true;
            }

            break;
          default:
            if (
              formValue[field] ||
              typeof formValue[field] == 'boolean' ||
              typeof formValue[field] == 'number'
            ) {
              errors[field] = '';
            } else {
              errors[field] = 'Field ini dibutuhkan';
              isError = true;
            }

            break;
        }
      });
    }

    return {
      status: !isError,
      errorFields: {...prevErrorFields, ...errors},
    };
  } catch (error) {
    console.log(error);
  }
}
