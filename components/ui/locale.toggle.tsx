"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next-intl/client";
import { useLocale } from "next-intl";

export default function LocaleToggle({
    className = "",
}: {
    className?: string;
}) {
    const router = useRouter();
    const pathname = usePathname();
    const locale = useLocale();

    const handler = () => {
        router.replace(locale === "fr" ? `/en${pathname}` : `/fr${pathname}`);
    };

    return (
        <button
            type="button"
            aria-label="Toggle dark mode"
            className={`transition-colors p-2 w-10 h-10 rounded-lg hover:bg-light-tint-one dark:hover:bg-dark-tint-two ${className}`}
            onClick={handler}
        >
            {locale}
        </button>
    );
}
