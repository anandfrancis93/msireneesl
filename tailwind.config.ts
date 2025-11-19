import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0a0a0a',
          surface: '#121212',
          elevated: '#1e1e1e',
          border: '#2a2a2a',
          hover: '#252525',
        },
        accent: {
          primary: '#6366f1',
          secondary: '#8b5cf6',
          hover: '#4f46e5',
        },
        text: {
          primary: '#ffffff',
          secondary: '#b4b4b4',
          tertiary: '#9ca3af',
        },
        // New Editorial Palette
        editorial: {
          bg: '#FDFBF7', // Warm Paper
          text: '#1A1A1A', // Soft Black
          subtext: '#4A4A4A', // Dark Grey
          accent: '#D4AF37', // Muted Gold
          navy: '#0F172A', // Deep Navy
          border: '#E5E0D8', // Paper Border
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
