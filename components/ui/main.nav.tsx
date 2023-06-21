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
        <div className="flex flex-1 items-center -mt-8">
            <Logo />
            {items?.length ? (
                <nav className="hidden gap-16 flex-1 md:flex md:ml-[8rem]">
                    {items.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            className={`flex items-center text-lg font-medium transition-colors dark:text- sm:text-sm
                                ${
                                    item.href.startsWith(`/${segment}`)
                                        ? "text-foreground"
                                        : "text-foreground/60"
                                }`}
                        >
                            {t(item.textKey)}
                        </Link>
                    ))}
                </nav>
            ) : null}
            <div className="flex space-x-4">
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
