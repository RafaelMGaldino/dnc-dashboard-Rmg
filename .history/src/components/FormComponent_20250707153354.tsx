import { FormComponentProps } from "@/types";

function FormComponent(props: FormComponentProps) {
    const { inputs, buttons, messages } = props;
     return (
        <form>
            {inputs.map((inputProps, index) => (
                <input key={index} {...inputProps} />
        </form>
     )
} 