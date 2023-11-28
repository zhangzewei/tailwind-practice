import { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> { }

export default function Card(props: CardProps) {
    const { children, className } = props;
    return <div className={`flex font-sans shadow-md p-2 rounded-xl overflow-hidden ${className}`}>
        {children}
    </div>
}
