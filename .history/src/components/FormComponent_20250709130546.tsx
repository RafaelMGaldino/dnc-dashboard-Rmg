import styled from "styled-components";
import type { FormComponentProps } from "@/types";
import { StyledButton, StyledInput } from "@/components";
import { pxToRem } from "@/utils";


export const StyledForm = styled.form`
  display:flex;
  flex-direction: column;
  row-gap: ${pxToRem(16)};
`


const FormComponent = (props: FormComponentProps) => {
  const { inputs, buttons, message } = props;

  return (
    <form>
   {inputs.map((inputProps, index) => (
  <StyledInput key={index} {...(inputProps as React.ComponentProps<typeof StyledInput>)} />
))}

    {buttons.map((buttonProps, index) => (
      <StyledButton key={index} {...(buttonProps as React.ComponentProps<typeof StyledButton>)} />
    ))}
    
      {message && (
        <div style={{ color: message.type === "error" ? "red" : "green" }}>
          {message.msg}
        </div>
      )}
       
    </form>
  );
};

export default FormComponent;
