import { ForwardedRef, forwardRef, InputHTMLAttributes } from 'react';
import { StyledInput } from './style';


interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    placeholder: string;
    type: string;
}

export const InputComponent = forwardRef(({label,placeholder,type, ...rest}: IInputProps, ref: ForwardedRef<HTMLInputElement>) => {
    return(
        <div>
            {label ? <label>{label}</label> : null}
            <StyledInput ref={ref} {...rest} placeholder={placeholder} type={type}/>
        </div>
    )
})