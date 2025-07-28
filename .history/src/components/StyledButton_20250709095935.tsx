import styled from "styled-components";
import { pxToRem } from "@/utils";
import type { ButtonProps } from "@/types";

export const StyledInputButton = styled.button<ButtonProps>`
  border-radius: ${pxToRem(8)};
  box-sizing: border-box;
  margin-bottom: ${pxToRem(6)};
  cursor: pointer;
  font-size: ${pxToRem(16)};
  font-weight: bold;
  height: ${pxToRem(50)};
  padding: 0 ${pxToRem(16)};
  transition: background-color 0.3s;
  width: 100%;
  border: none; // Remove borda padrão

  /* Estilo 'primary' */
  &.primary {
    background-color: ${(props) => props.theme.buttons.primary};
    color: ${(props) => props.theme.buttons.primaryColor};

    &:hover {
      background-color: ${(props) => props.theme.buttons.primaryHover};
    }
  }

  /* Estilo 'alert' */
  &.alert {
    background-color: ${(props) => props.theme.buttons.alert};
    color: ${(props) => props.theme.buttons.alertColor};

    &:hover {
      background-color: ${(props) => props.theme.buttons.alertHover};
    }
  }

  /* Estilo 'borderless-alert' */
  &.borderless-alert {
    background: none;
    color: ${(props) => props.theme.buttons.alert};
    padding: 0;
    height: auto;

    &:hover {
      color: ${(props) => props.theme.buttons.alertHover};
    }
  }

  /* Estado 'disabled' */
  &:disabled {
    background-color: ${(props) => props.theme.buttons.disabled};
    color: ${(props) => props.theme.buttons.disabledColor};
    cursor: not-allowed;
  }
`;