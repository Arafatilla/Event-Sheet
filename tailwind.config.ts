import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1e40af',
        'accent': '#ef4444',
        'dark': '#0f172a',
        'light': '#f8fafc',
      },
    },
  },
  plugins: [],
}
export default config
