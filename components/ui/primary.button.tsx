export default function PrimaryButton({
    text,
    className = "",
}: {
    text: string;
    className?: string;
}) {
    return (
        <button
            className={`flex-auto bg-primary dark:bg-primary-darkmode text-black px-4 py-2 rounded-lg hidden md:block ${className}`}
        >
            {text}
        </button>
    );
}
