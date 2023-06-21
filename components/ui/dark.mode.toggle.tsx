"use client";

import { toggleScheme } from "@/utils/color.scheme";
import { useRouter } from "next/navigation";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

export default function DarkModeToggle({
    className = "",
}: {
    className?: string;
}) {
    const router = useRouter();

    const toggle = async () => {
        await toggleScheme();
        router.refresh();
    };

    return (
        <button
            type="button"
            aria-label="Toggle dark mode"
            className={`transition-colors p-2 rounded-lg hover:bg-light-tint-one dark:hover:bg-dark-tint-two ${className}`}
            onClick={toggle}
        >
            <SunIcon className="w-6 h-6 text-yellow-500 dark:hidden" />
            <MoonIcon className="w-6 h-6 text-white  hidden dark:inline-block" />
        </button>
    );
}
