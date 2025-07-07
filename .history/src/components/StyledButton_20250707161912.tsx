import styled from 'styled-components'
import type { ButtonProps } from "@/types";
import { pxToRem } from "@/utils/pxToRem";


export const StyledButton = styled.button<ButtonProps>`
   border-radius: {pxToRem(8)};
   border: none;
   box-sizing: border-box;
   cursor: pointer;
   font-size: {pxToRem(16)};
   font-weight: bold;
   height: {pxToRem(50)};
   padding: 0 {pxToRem(16)};
   trasition: background-color  0.3s;
   width: 100%;

 &.primary{
    background-color: ${(props) => props.theme.buttons.primary};
    color: ${(props) => props.theme.buttons.primaryColor};

    }
`
