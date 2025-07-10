import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
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
    // outras propriedades do tema, se houver
  }
}