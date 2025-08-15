/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
    "./public/index.html"
  ],
  theme: {
        extend: {
            colors: {
                        'dark-bg': '#0d0d0d',
                        'dark-secondary': '#1a1a1a',
                        'light-text': '#f5f5f5',
                        'accent-blue': '#00e5ff',
                        'accent-hover': '#00b8cc',
                    },
                    fontFamily: {
                        'montserrat': ['Montserrat', 'sans-serif'],
                    }
                }
            },
  plugins: [],
}