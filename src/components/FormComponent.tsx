import type { FormComponentProps } from "@/types";
import { StyledButton, StyledInputButton } from "@/components";


const FormComponent = (props: FormComponentProps) => {
  const { inputs, buttons, messages } = props;

  return (
    <form>
   {inputs.map((inputProps, index) => (
  <StyledInputButton key={index} {...(inputProps as React.ComponentProps<typeof StyledInputButton>)} />
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
