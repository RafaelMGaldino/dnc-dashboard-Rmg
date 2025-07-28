import type { FormComponentProps } from "@/types";
import { StyledButton,StyledInput } from "./StyledInput";


const FormComponent = (props: FormComponentProps) => {
  const { inputs, buttons, messages } = props;

  return (
    <form>
      {inputs.map((inputProps, index) => (
        <input key={index} {...inputProps} />
      ))}

      {buttons.map((buttonProps, index) => (
        <button key={index} {...buttonProps} />
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
