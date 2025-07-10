<<<<<<< HEAD
import { type Theme } from '@theme-types'

export const lightTheme: Theme = {
  appBackground: '#FFFFFF',
  appColor: '#000000',
  appDefaultStroke: '#E0E0E0',
  appLogo: '/dnc-logo-black.svg',
  appSkeletonFrom: '#EEEEEE',
  appSkeletonTo: '#CCC',
  buttons: {
    alert: '#E80000',
    alertColor: '#FFFFFF',
    alertHover: '#D80000',
    disabled: '#CCCCCC',
    disabledColor: '#666666',
    primary: '#000CF2',
    primaryColor: '#FFFFFF',
=======
import type { Theme } from '@/types';
 

export const lightTheme: Theme = {
  appBackground: '#FFF',
  appColor: '#000',
  appDefaultStroke: '#E0E0E0',
  appLogo: '/dnc-logo-white.svg',
  appSkeletonFrom: '#EEE',
  appSkeletonTo: '#CCC',
  buttons: {
    alert: '#E80000',
    alertColor: '#FFF',
    alertHover: '#D80000',
    disabled: '#CCC',
    disabledColor: '#666',
    primary: '#0C70F2',
    primaryColor: '#FFF',
>>>>>>> feat/header-component
    primaryHover: '#0061DE',
  },
  card: {
    alert: '#E80000',
<<<<<<< HEAD
    background: '#FFFFFF',
=======
    background: '#FFF',
>>>>>>> feat/header-component
    border: '#E0E0E0',
    success: '#008000',
    warning: '#F7A300',
  },
  textInput: {
<<<<<<< HEAD
    active: '#FFFFFF',
    activeColor: '#000000',
    borderColor: '#E0E0E0',
    disabled: '#EEEEEE',
    disabledBorderColor: '#E0E0E0',
    disabledColor: '#666666',
    placeholder: '#666666',
  },
  typographies: {
    error: '#FF0202',
    subtitle: '#666666',
    success: '#00FF00',
=======
    active: '#FFF',
    activeColor: '#000',
    borderColor: '#E0E0E0',
    disabled: '#EEE',
    disabledBorderColor: '#E0E0E0',
    disabledColor: '#666',
    placeholder: '#666',
    placeholderColor: "#666",
  },
  typographies: {
    error: '#FF0202',
    subtitle: '#666',
    success: '#00800',
>>>>>>> feat/header-component
  },
}

export const darkTheme: Theme = {
  appBackground: '#060B26',
  appColor: '#FFF',
  appDefaultStroke: '#21497D',
<<<<<<< HEAD
  appLogo: '/dnc-logo-white.svg',
  appSkeletonFrom: '#060b26',
  appSkeletonTo: '#21497d',
  buttons: {
    alert: '#E80000',
    alertColor: '#FFFFFF',
    alertHover: '#D80000',
    disabled: '#313649',
    disabledColor: '#6D7B8E',
    primary: '#000CF2',
    primaryColor: '#FFFFFF',
=======
  appLogo: '/dnc-logo-black.svg',
  appSkeletonFrom: '#060b26',
  appSkeletonTo: '#21497D',
  buttons: {
    alert: '#E80000',
    alertColor: '#FFF',
    alertHover: '#D80000',
    disabled: '#313649',
    disabledColor: '#6D7B8E',
    primary: '#0C70F2',
    primaryColor: '#FFF',
>>>>>>> feat/header-component
    primaryHover: '#0061DE',
  },
  card: {
    alert: '#E80000',
    background: '#0F1535',
    border: '#21497D',
    success: '#008000',
    warning: '#F7A300',
  },
  textInput: {
    active: '#0F1535',
    activeColor: '#FFF',
    borderColor: '#21497D',
    disabled: '#282D49',
    disabledBorderColor: '#2E3F55',
    disabledColor: '#58677C',
    placeholder: '#89A7CE',
<<<<<<< HEAD
=======
    placeholderColor:'#89A7CE',
>>>>>>> feat/header-component
  },
  typographies: {
    error: '#FF0202',
    subtitle: '#89A7CE',
<<<<<<< HEAD
    success: '#00FF00',
=======
    success: '#008000',
>>>>>>> feat/header-component
  },
}
