import { useEffect, useState } from "react";

export default function useMedia<T>(
    queries: string[],
    values: T[],
    defaultValue: T
) {
    if (typeof window === "undefined") {
        return defaultValue;
    }

    const mediaQueryLists = queries.map((q) => window.matchMedia(q));
    const getValue = () => {
        const index = mediaQueryLists.findIndex((mql) => mql.matches);
        return typeof values[index] !== "undefined"
            ? values[index]
            : defaultValue;
    };

    const [value, setValue] = useState(getValue);
    useEffect(() => {
        const handler = () => setValue(getValue);
        mediaQueryLists.forEach((mql) =>
            mql.addEventListener("change", handler)
        );

        return () =>
            mediaQueryLists.forEach((mql) =>
                mql.removeEventListener("change", handler)
            );
    }, []);

    return value;
}
