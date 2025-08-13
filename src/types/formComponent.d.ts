export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export type MenssageProps = {
  msg: string; 
  type?: 'error' | 'success';
};

export interface FormComponentProps {
  inputs: InputProps[]
  buttons: ButtonProps[]
  message?: MenssageProps
  onSubmit?: (e: React.FormEvent) => void // ✅ ADICIONAR ISSO
}
