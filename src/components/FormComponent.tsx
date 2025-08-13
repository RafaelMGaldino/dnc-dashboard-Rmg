import styled from "styled-components";
import type { FormComponentProps } from "@/types";
import { StyledButton, StyledInput } from "@/components";
import { pxToRem } from "@/utils";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: ${pxToRem(16)};
`

const FormComponent = (props: FormComponentProps) => {
  const { inputs, buttons, message, onSubmit } = props; // ✅ PEGAR onSubmit

  return (
    <StyledForm onSubmit={onSubmit}> {/* ✅ USAR onSubmit */}
      {inputs.map((inputProps, index) => (
        <StyledInput
          key={index}
          {...(inputProps as React.ComponentProps<typeof StyledInput>)}
        />
      ))}

      {buttons.map((buttonProps, index) => (
        <StyledButton
          key={index}
          {...(buttonProps as React.ComponentProps<typeof StyledButton>)}
        />
      ))}

      {message?.msg && (
        <div style={{ color: message.type === "error" ? "red" : "green" }}>
          {message.msg}
        </div>
      )}
    </StyledForm>
  );
};

export default FormComponent;
