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
      <button key={index} {...buttonProps} />
    })}
    
      {message && (
        <div style={{ color: message.type === "error" ? "red" : "green" }}>
          {message.msg}
        </div>
      )}
       
    </form>
  );
};

export default FormComponent;
