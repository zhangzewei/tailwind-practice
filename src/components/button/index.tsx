import { ButtonHTMLAttributes } from "react"

type ButtonVariant =
    | 'filled'
    | 'outlined'
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: ButtonVariant;
}

export default function Button(props: ButtonProps) {
    const {
        type,
        variant,
        className,
        children
    } = props;
    const variantClassNames: {[key: string]: string} = {
        filled: 'bg-black text-white',
        outlined: 'border border-slate-200 text-slate-900'
    }
    return <button
        className={`h-10 px-6 font-semibold rounded-md ${variantClassNames[variant]} ${className}`}
        type={type}>
        {children}
    </button>
}
