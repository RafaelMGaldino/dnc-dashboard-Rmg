export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export type MenssageProps = {
  message: string; // <- era 'msg' no componente
  type?: 'error' | 'success';
};

export interface FormComponentProps {
  inputs: InputProps[];
  buttons: ButtonProps[];
  messages?: MenssageProps; // 
}
