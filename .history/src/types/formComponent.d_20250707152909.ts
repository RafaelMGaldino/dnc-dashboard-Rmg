import type { Input } from "@mui/material"
import type { HtmlHTMLAttributes } from "react"
import type { Interface } from "readline"

export type InpuProps = React.InputHTMLAttributes<HtmlHTMLAttributes>
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>


export type MenssageProps = {
    message: string
    type?: "success" | "error" 
    }

export interface FormComponentProps  {
    inputs: InputProps[]
    buttons: ButtonProps[]
    messages?: MenssageProps[]
}