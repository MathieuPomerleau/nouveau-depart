import useLocalStorage from "@/hooks/use.local.storage";
import useMedia from "@/hooks/use.media";
import { useEffect } from "react";

export default function useDarkMode(): [boolean, (value: boolean) => void] {
    const [enabledState, setEnabledState] = useLocalStorage(
        "dark-mode-enabled",
        false
    );
    const prefersDarkMode = usePrefersDarkMode();
    const enabled =
        typeof enabledState !== "undefined" ? enabledState : prefersDarkMode;

    useEffect(() => {
        if (typeof window === "undefined") {
            return;
        }

        const className = "dark-mode";
        const element = window.document.body;
        if (enabled) {
            element.classList.add(className);
        } else {
            element.classList.remove(className);
        }
    }, [enabled]);

    return [enabled, setEnabledState];
}

function usePrefersDarkMode() {
    return useMedia(["(prefers-color-scheme: dark)"], [true], false);
}
