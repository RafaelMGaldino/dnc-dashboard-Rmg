import styled from "styled-components";
import { pxToRem } from "@/utils";
import type { InputProps } from "@/types";


export const StyledButton = styled.button<InputProps>`
  ${({ className, theme }) => {
    if (className === 'alert') {
      return `
        background-color: ${theme.buttons.alert};
        color: ${theme.buttons.alertColor};

        &:hover {
          background-color: ${theme.buttons.alertHover};
        }
      `;
    }
    if (className === 'primary') {
      return `
        background-color: ${theme.buttons.primary};
        color: ${theme.buttons.primaryColor};

        &:hover {
          background-color: ${theme.buttons.primaryHover};
        }
      `;
    }
    return `
      background-color: ${theme.textInput.active};
      color: ${theme.textInput.activeColor};
    `;
  }}

  border-radius: ${pxToRem(8)};
  border: ${pxToRem(1)} solid ${(props) => props.theme.textInput.borderColor};
  box-sizing: border-box;
  cursor: pointer;
  font-size: ${pxToRem(14)};
  font-weight: 500;
  padding: ${pxToRem(8)} ${pxToRem(16)};
  transition: background-color 0.3s;
  width: 100%;

  &:disabled {
    background-color: ${(props) => props.theme.textInput.disabled};
    border: ${pxToRem(1)} solid ${(props) => props.theme.textInput.disabledBorderColor};
    color: ${(props) => props.theme.textInput.disabledColor};
    cursor: not-allowed;
  }
`;
