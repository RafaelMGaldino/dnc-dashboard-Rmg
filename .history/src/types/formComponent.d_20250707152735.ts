import type { Input } from "@mui/material"
import type { HtmlHTMLAttributes } from "react"

export type InpuProps = React.InputHTMLAttributes<HtmlHTMLAttributes>
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>


export type MenssageProps = {
    message: string
    type?: "success" | "error" 
    }