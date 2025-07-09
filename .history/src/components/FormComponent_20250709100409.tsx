import type { FormComponentProps } from "@/types";
import { StyledInputButton } from "@/components";

const FormComponent = (props: FormComponentProps) => {
  const { inputs, buttons, messages } = props;

  return (
    <form>
      {/* Inputs */}
      {inputs.map((inputProps, index) => (
        <StyledInputButton 
          key={`input-${index}`} 
          {...(inputProps as React.ComponentProps<typeof StyledInputButton>)} 
        />
      ))}

      {/* Buttons (usando StyledInputButton para aplicar a classe 'primary') */}
      {buttons.map((buttonProps, index) => (
        <StyledInputButton
          key={`button-${index}`}
          type={buttonProps.type || 'button'}
          className={buttonProps.className || 'primary'}
        >
          {buttonProps.children}
        </StyledInputButton>
      ))}

      {/* Mensagens */}
      {messages && (
        <div style={{ color: messages.type === "error" ? "red" : "green" }}>
          {messages.message}
        </div>
      )}
    </form>
  );
};

export default FormComponent;