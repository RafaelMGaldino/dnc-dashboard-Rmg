import type { FormComponentProps } from "@/types";
import { StyledButton, StyledInput } from "@/components";


const FormComponent = (props: FormComponentProps) => {
  const { inputs, buttons, message } = props;

  return (
    <form>
   {inputs.map((inputProps, index) => (
  <StyledInput key={index} {...(inputProps as React.ComponentProps<typeof StyledInput>)} />
))}

    {buttons.map((buttonProps, index) => {
     const { children, ...rest } = buttonProps; // remove children se vier
    return <StyledButton key={index} {...(rest as React.ComponentProps<typeof StyledButton>)} />;})}


      {message && (
        <div style={{ color: message.type === "error" ? "red" : "green" }}>
          {message.message}
        </div>
      )}
    </form>
  );
};

export default FormComponent;
