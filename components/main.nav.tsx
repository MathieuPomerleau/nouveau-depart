"use client";

import * as React from "react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { cn } from "@/lib/utils";
import { MobileNav } from "@/components/mobile.nav";
import { useTranslations } from "next-intl";
import { MainNavItem } from "@/types";

interface MainNavProps {
    items: MainNavItem[];
    children?: React.ReactNode;
}

export function MainNav({ items, children }: MainNavProps) {
    const segment = useSelectedLayoutSegment();
    const t = useTranslations("nav");
    const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);

    return (
        <div className="flex gap-6 md:gap-10">
            <Link href="/" className="hidden items-center space-x-2 md:flex">
                {/* Include site logo here */}
            </Link>
            {items?.length ? (
                <nav className="hidden gap-6 md:flex">
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
