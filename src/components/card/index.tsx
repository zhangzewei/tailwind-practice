import { HTMLAttributes } from "react";

interface CarfProps extends HTMLAttributes<HTMLDivElement> {}

export default function Card(props: CarfProps) {
    const { children, className } = props;
    return <div className={`flex font-sans shadow-md p-2 rounded-xl overflow-hidden ${className}`}>
        {children}
    </div>
}