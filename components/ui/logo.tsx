import Link from "next/link";
import ThemedImage from "./themed.image";

export default function Logo() {
    return (
        <Link href="/">
            <ThemedImage
                name="logo"
                alt="Nouveau depart logo"
                width={100}
                height={0}
            />
        </Link>
    );
}
