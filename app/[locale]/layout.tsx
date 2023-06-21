import { Rubik } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";

import { MainNav } from "@/components/ui/main.nav";
import { getCurrentScheme } from "@/utils/color.scheme";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
    title: "Nouveau Départ",
};

const navItems = [
    { textKey: "about-us", href: "/about-us" },
    { textKey: "events", href: "/events" },
    { textKey: "contact-us", href: "/contact-us" },
];

export default async function LocaleLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    const scheme = await getCurrentScheme();

    let messages;
    try {
        messages = (await import(`../../messages/${params.locale}.json`))
            .default;
    } catch (error) {
        notFound();
    }

    return (
        <html lang={params.locale} className={scheme === "dark" ? "dark" : ""}>
            <body
                className={`min-h-screen text-font dark:text-font-darkmode dark:bg-dark-tint transition-colors ${rubik.className}`}
            >
                <NextIntlClientProvider
                    locale={params.locale}
                    messages={messages}
                >
                    <div className="flex min-h-screen flex-col">
                        <header className="sticky top-0 z-40 w-full">
                            <div className="absolute w-full py-4 px-12 bg-white/95 dark:bg-dark-tint/95 border-b border-b-black/10 dark:border-b-white/10 transition-all">
                                <MainNav items={navItems} params={params} />
                            </div>
                        </header>
                        {children}
                    </div>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
