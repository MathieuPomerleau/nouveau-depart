import createMiddleware from "next-intl/middleware";

export default createMiddleware({
    locales: ["en", "fr"],
    defaultLocale: "fr",
});

export const config = {
    matcher: ["/((?!api|_next|.*\\..*).*)"],
};

// TODO: Fix translation if we don't refresh
