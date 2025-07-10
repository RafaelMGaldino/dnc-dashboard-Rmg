export type InputProps = React.InputHTMLAttributes<HtmlHTMLAttributes>;

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export type MenssageProps = {
  msg: string; // <- era 'msg' no componente
  type?: 'error' | 'success';
};

export interface FormComponentProps {
  inputs: InputProps[];
  buttons: ButtonProps[];
  message?: MenssageProps; 
}
