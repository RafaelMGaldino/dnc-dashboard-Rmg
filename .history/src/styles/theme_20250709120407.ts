import type { Theme } from '@/types';


export const lightTheme: Theme = {
  appBackground: '#FFF',
  appColor: '#000',
  appDefaultStroke: '#E0E0E0',
  appLogo: '/dnc-logo-black.svg',
  appSkeletonFrom: '#EEE',
  appSkeletonTo: '#CCC',
  buttons: {
    alert: '#E80000',
    alertColor: '#FFF',
    alertHover: '#D80000',
    disabled: '#CCC',
    disabledColor: '#666',
    primary: '#000CF2',
    primaryColor: '#FFFFFF',
    primaryHover: '#0061DE',
  },
  card: {
    alert: '#E80000',
    background: '#FFFFFF',
    border: '#E0E0E0',
    success: '#008000',
    warning: '#F7A300',
  },
  textInput: {
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
  },
}

export const darkTheme: Theme = {
  appBackground: '#060B26',
  appColor: '#FFF',
  appDefaultStroke: '#21497D',
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
  },
  typographies: {
    error: '#FF0202',
    subtitle: '#89A7CE',
    success: '#00FF00',
  },
}
