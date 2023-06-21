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
                        <header className="sticky top-0 z-40 w-full bg-gradient-to-b from-light-tint/[0.94] dark:from-dark-tint/[0.94] from-70% to-transparent transition-all ">
                            <div className="container flex h-32 space-x-4 sm:justify-between max-w-[72rem] mx-auto sm:space-x-0">
                                <MainNav items={navItems} params={params} />
                            </div>
                        </header>
                        <div className="container flex-1 max-w-[84rem] mx-auto">
                            {children}
                        </div>
                    </div>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
