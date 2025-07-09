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
    // outras propriedades do tema, se houver
  }
}