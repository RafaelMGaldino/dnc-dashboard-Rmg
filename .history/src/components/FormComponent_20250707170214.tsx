import type { FormComponentProps } from "@/types";
import { StyledButton, StyledInput } from "@/components";


const FormComponent = (props: FormComponentProps) => {
  const { inputs, buttons, messages } = props;

  return (
    <form>
      {inputs.map((inputProps, index) => (
        <StyledInpu key={index} {...inputProps} />
      ))}

      {buttons.map((buttonProps, index) => (
        <StyledButton key={index} {...buttonProps} />
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
