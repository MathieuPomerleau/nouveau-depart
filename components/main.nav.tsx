"use client";

import * as React from "react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { cn } from "@/lib/utils";
import { MobileNav } from "@/components/mobile.nav";
import { useTranslations } from "next-intl";
import { MainNavItem } from "@/types";
import Image from "next/image";
import useDarkMode from "@/hooks/use.dark.mode";
import { Moon, Sun } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";

interface MainNavProps {
    items: MainNavItem[];
    children?: React.ReactNode;
}

export function MainNav({ items, children }: MainNavProps) {
    const segment = useSelectedLayoutSegment();
    const t = useTranslations("nav");
    const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);
    const [darkMode, setDarkMode] = useDarkMode();

    return (
        <div className="flex items-center">
            <Link href="/" className="hidden items-center space-x-2 md:flex">
                <Image
                    src="/images/logo.svg"
                    alt="Nouveau Départ logo"
                    height="64"
                    width="165"
                />
            </Link>
            {items?.length ? (
                <nav className="hidden gap-16 flex-1 md:flex md:ml-[8rem]">
                    {items.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            className={cn(
                                "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
                                item.href.startsWith(`/${segment}`)
                                    ? "text-foreground"
                                    : "text-foreground/60"
                            )}
                        >
                            {t(item.textKey)}
                        </Link>
                    ))}
                </nav>
            ) : null}
            <Toggle
                aria-label="Toggle darkmode"
                pressed={darkMode}
                onPressedChange={() => setDarkMode(!darkMode)}
            >
                {darkMode ? (
                    <Moon className="h-4 w-4" />
                ) : (
                    <Sun className="h-4 w-4" />
                )}
            </Toggle>
            <button className="bg-primary text-black px-4 py-2 rounded-lg hidden md:block">
                Donate
            </button>
            <button
                className="flex items-center space-x-2 md:hidden"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
                {showMobileMenu ? <div></div> : <div></div>}
                <span className="font-bold">Menu</span>
            </button>
            {showMobileMenu && items && (
                <MobileNav items={items}>{children}</MobileNav>
            )}
        </div>
    );
}
