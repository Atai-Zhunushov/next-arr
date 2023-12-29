import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      width: {
        '1700': '1700px', // Добавление пользовательской ширины "1000"
        '1000': '1000px', // Добавление пользовательской ширины "1000"
        '500': '500px'
      },
      height: {
        '300' : '300px'
      }

    },
  },
  plugins: [],
}
export default config
