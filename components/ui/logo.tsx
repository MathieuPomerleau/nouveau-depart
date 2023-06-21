import Link from "next/link";
import Image from "next/image";

export default function Logo() {
    return (
        <Link href="/">
            <Image
                src="/images/logo.svg"
                alt="Nouveau Départ logo"
                height="64"
                width="165"
                className="dark:hidden"
            />
            <Image
                src="/images/logo.dark.svg"
                alt="Nouveau Départ logo"
                height="64"
                width="165"
                className="hidden dark:inline-block"
            />
        </Link>
    );
}
