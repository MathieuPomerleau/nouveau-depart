import { MainNav } from "@/components/main.nav";
import "./../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"], display: "swap" });

export const metadata = {
    title: "Nouveau Départ",
};

const navItems = [
    { textKey: "about-us", href: "/about-us" },
    { textKey: "events", href: "/events" },
    { textKey: "contact-us", href: "/contact-us" },
];

export function generateStaticParams() {
    return [{ locale: "en" }, { locale: "fr" }];
}

export default async function RootLayout({
    children,
    params: { locale },
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    let messages;
    try {
        messages = (await import(`../../messages/${locale}.json`)).default;
    } catch (error) {
        notFound();
    }

    return (
        <html lang={locale} className={rubik.className}>
            <body>
                <NextIntlClientProvider locale={locale} messages={messages}>
                    <div className="min-h-screen max-w-[72rem] mx-auto">
                        <header className="sticky h-24 top-0 z-40 py-4">
                            <MainNav items={navItems} />
                        </header>
                        <div className="container flex-1">{children}</div>
                    </div>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
