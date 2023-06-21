export default function PrimaryText({ text }: { text: string }) {
    return (
        <span className="text-primary dark:text-primary-darkmode">{text}</span>
    );
}
