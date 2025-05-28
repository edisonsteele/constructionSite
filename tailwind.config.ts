import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1B365D', // Navy Blue
          light: '#2B4B7D',
          dark: '#0B264D',
        },
        secondary: {
          DEFAULT: '#FFFFFF', // White
          light: '#F8F9FA',
          dark: '#E9ECEF',
        },
        accent: {
          DEFAULT: '#D4AF37', // Gold
          light: '#E4BF47',
          dark: '#C49F27',
        },
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
      },
    },
  },
  plugins: [],
}

export default config 