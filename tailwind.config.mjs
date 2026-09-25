/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        blush: {
          50: '#fbf7f4',
          100: '#f4ebe4',
          200: '#e8d4c6',
          300: '#d7b49c',
          400: '#c49273',
          500: '#b47858',
          600: '#9d6247',
          700: '#824f3c',
          800: '#6b4335',
          900: '#593a2f',
          950: '#301d17',
        },
        champagne: {
          50: '#faf8f4',
          100: '#f3eee4',
          200: '#e6d9c4',
          400: '#c9ae82',
          500: '#b79462',
          700: '#8a6a2f',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
      letterSpacing: {
        widestx: '0.22em',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
