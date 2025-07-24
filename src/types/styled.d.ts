import 'styled-components';
import type { Theme } from '@/types'; 

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}

    buttons: {
      primary: string;
      primaryColor: string;
      primaryHover: string;
      alert: string;
      alertColor: string;
      alertHover: string;
      disabled: string;
      disabledColor: string;
    };
    textInput: {
      active: string;
      activeColor: string;
      borderColor: string;
      disabled: string;
      disabledBorderColor: string;
      disabledColor: string;
      placeholderColor: string;
    };
   
  }