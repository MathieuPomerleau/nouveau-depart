"use client";

import * as React from "react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { MobileNav } from "@/components/ui/mobile.nav";
import { useTranslations } from "next-intl";
import { MainNavItem } from "@/types";
import DarkModeToggle from "@/components/ui/dark.mode.toggle";
import Logo from "@/components/ui/logo";
import LocaleToggle from "@/components/ui/locale.toggle";
import PrimaryButton from "@/components/ui/primary.button";

interface MainNavProps {
    items: MainNavItem[];
    children?: React.ReactNode;
    params: { locale: string };
}

export function MainNav({ items, children }: MainNavProps) {
    const segment = useSelectedLayoutSegment();
    const t = useTranslations("nav");
    const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);

    return (
        <div className="flex flex-1 md:grid md:grid-rows-1 md:grid-cols-3">
            <Logo />
            <div className="flex flex-1 items-center mx-auto">
                {items?.length ? (
                    <nav className="hidden gap-16 md:flex">
                        {items.map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                className={`flex items-center transition-colors sm:text-sm
                                ${item.href.startsWith(`/${segment}`)
                                        ? "text-foreground"
                                        : "text-foreground/60"
                                    }`}
                            >
                                {t(item.textKey)}
                            </Link>
                        ))}
                    </nav>
                ) : null}
            </div>
            <div className="hidden md:flex space-x-4 ml-auto">
                <LocaleToggle />
                <DarkModeToggle />
                <PrimaryButton text="Donate" />
            </div>
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
