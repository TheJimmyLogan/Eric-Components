module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            keyframes: {
                fadeOut: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '0.5' },
                },
            },
            animation: {
                'fadeOut': 'fadeOut 5s ease-in-out',
            },
        },
    },
    plugins: [],
}