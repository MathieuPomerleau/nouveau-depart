/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "light-tint": {
                    DEFAULT: "#ffffff",
                    one: "#efefef",
                    two: "#dfdfdf",
                    three: "#cfcfcf",
                },
                "dark-tint": {
                    DEFAULT: "#141414",
                    one: "#242424",
                    two: "#343434",
                    three: "#444444",
                },
                primary: {
                    DEFAULT: "#22bfac",
                    darkmode: "#2ef9e0",
                },
                font: {
                    DEFAULT: "#363636",
                    darkmode: "#f6f6f6",
                },
            },
        },
    },
    plugins: [],
};
