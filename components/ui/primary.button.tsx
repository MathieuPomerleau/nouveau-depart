export default function PrimaryButton({
    text,
    className = "",
}: {
    text: string;
    className?: string;
}) {
    return (
        <button
            className={`bg-primary dark:bg-primary-darkmode text-black px-4 py-2 rounded-lg ${className}`}
        >
            {text}
        </button>
    );
}
