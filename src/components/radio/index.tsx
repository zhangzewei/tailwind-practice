import { InputHTMLAttributes } from "react";

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

export default function Radio(props: RadioProps) {
    const { label, name, value, checked, className, onChange } = props;
    return <label className="relative cursor-pointer" htmlFor={label}>
        <input
            className="sr-only peer"
            type="radio"
            id={label}
            value={value}
            name={name}
            checked={checked}
            onChange={onChange}
        />
        <div
            className={`min-w-[36px] min-h-[36px] p-2 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white ${className}`}
        >
            {label}
        </div>
    </label>
}