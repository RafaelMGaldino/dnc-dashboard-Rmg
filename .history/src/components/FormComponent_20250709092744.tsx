// src/components/FormComponent.tsx
import type { FormComponentProps } from "@/types";
import { StyledInputButton } from "@/components";

const FormComponent = (props: FormComponentProps) => {
  const { inputs = [], buttons = [], messages } = props;

  return (
    <form>
      {inputs.map((inputProps, index) => (
        <StyledInputButton
          key={index}
          {...(inputProps as React.ComponentProps<typeof StyledInputButton>)}
        />
      ))}

      {buttons.map((buttonProps, index) => (
        <StyledInputButton
          key={index}
          {...(buttonProps as React.ComponentProps<typeof StyledInputButton>)}
        />
      ))}

      {messages && (
        <div style={{ color: messages.type === "error" ? "red" : "green" }}>
          {messages.message}
        </div>
      )}
    </form>
  );
};
