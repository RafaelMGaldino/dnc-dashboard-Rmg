import styled from "styled-components";
import { pxToRem } from "@/utils";
import type { ButtonProps } from "@/types";
interface InputProps extends ButtonProps {
  className?: string;
}
export const StyledButton = styled.button<InputProps>`
  border-radius: ${pxToRem(8)};
  cursor: pointer;
  font-size: ${pxToRem(14)};
  font-weight: 500;
  padding: ${pxToRem(8)} ${pxToRem(16)};
  width: 100%;
  transition: background-color 0.3s;

  &.primary {
    background-color: ${(props) => props.theme.buttons.primary};
    color: ${(props) => props.theme.buttons.primaryColor};

    &:hover {
      background-color: ${(props) => props.theme.buttons.primaryHover};
    }
  }

  &:disabled {
    background-color: ${(props) => props.theme.buttons.disabled};
    color: ${(props) => props.theme.buttons.disabledColor};
    cursor: not-allowed;
  }
`;


