import type { FormComponentProps } from "@/types";
import { StyledButton, StyledInput } from "@/components";


const FormComponent = (props: FormComponentProps) => {
  const { inputs, buttons, messages } = props;

  return (
    <form>
      {inputs.map((inputProps, index) => (
        <StyledInput key={index} {...(inputProps as React.ComponentProps<typeof StyledInput>)} />
      ))}

      {buttons.map((buttonProps, index) => (
        <StyledButton key={index} {...(buttonProps as React.ComponentProps<typeof StyledButton>)} />
      ))}

      {messages && (
        <div style={{ color: messages.type === "error" ? "red" : "green" }}>
          {messages.message}
        </div>
      )}
    </form>
  );
};

export default FormComponent;
