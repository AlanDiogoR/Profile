import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/hooks/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#0d1117',
          900: '#161b22',
          800: '#21262d',
          700: '#30363d',
          600: '#484f58',
        },
        accent: {
          purple: '#7c3aed',
          indigo: '#6366f1',
        },
      },
      fontFamily: {
        sans: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
