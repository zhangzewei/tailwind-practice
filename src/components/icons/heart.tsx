interface IconProps {
    size?: number
}

export default function HeartIcon (props: IconProps) {
    const { size = 20 } = props;
    const rate = size / 20;
    return <svg style={{ transform: `scale(${rate})` }} width='20' height='20' fill="currentColor" aria-hidden="true">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
        />
    </svg>
}