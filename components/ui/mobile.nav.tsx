"use client";

import * as React from "react";
import Link from "next/link";
import { useLockBody } from "@/hooks/use.lock.body";
import { MainNavItem } from "@/types";
import { useTranslations } from "next-intl";
import LocaleToggle from "./locale.toggle";
import DarkModeToggle from "./dark.mode.toggle";
import PrimaryButton from "./primary.button";

interface MobileNavProps {
    items: MainNavItem[];
    children?: React.ReactNode;
}

export function MobileNav({ items, children }: MobileNavProps) {
    useLockBody();
    const t = useTranslations("nav");

    return (
        <div
            className={
                "fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-bottom-80 md:hidden"
            }
        >
            <div className="relative z-20 grid gap-6 rounded-md bg-popover p-4 text-popover-foreground shadow-md">
                <nav className="grid grid-flow-row auto-rows-max text-sm">
                    {items.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            className="flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline"
                        >
                            {t(item.textKey)}
                        </Link>
                    ))}
                    <div className="flex space-x-4 ml-auto">
                        <LocaleToggle />
                        <DarkModeToggle />
                        <PrimaryButton text="Donate" />
                    </div>
                </nav>

            </div>
        </div>
    );
}
