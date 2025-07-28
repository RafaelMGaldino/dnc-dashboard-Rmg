import styled from "styled-components";
import type { InputProps } from "@/types";
import { pxToRem } from "@/utils";

export const StyledButton = styled.button<InputProps>`
  backgroud-color: ${(props) => props.theme.textInput.active};
  color: ${(props) => props.theme.textInput.activeColor};
  border-radius: ${pxToRem(8)};
  border: none;
 


  &:disabled {
    background-color: ${(props) => props.theme.buttons.disabled};
    color: ${(props) => props.theme.buttons.disabledColor};
    cursor: not-allowed;

    &:hover {
      color: ${(props) => props.theme.buttons.disabledColor};
    }
  }
`;
