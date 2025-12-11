/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Retro Paper Theme
        'paper-cream': '#F5E6D3',
        'aged-paper': '#E8D5B7',
        'sepia-dark': '#5D4E37',
        'ink-brown': '#3E2723',
        'red-accent': '#8B0000',
        'gold-accent': '#B8860B',
        'vintage-border': '#C4A77D',
      },
      fontFamily: {
        'heading': ['"Playfair Display"', 'serif'],
        'body': ['"Crimson Text"', 'serif'],
        'decorative': ['"EB Garamond"', 'serif'],
      },
      backgroundImage: {
        'paper-texture': "url('/assets/images/paper-texture.png')",
      },
      boxShadow: {
        'vintage': '0 4px 6px -1px rgba(62, 39, 35, 0.2), 0 2px 4px -1px rgba(62, 39, 35, 0.1)',
        'vintage-lg': '0 10px 15px -3px rgba(62, 39, 35, 0.2), 0 4px 6px -2px rgba(62, 39, 35, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'typewriter': 'typewriter 2s steps(40) 1s forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        typewriter: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
      },
    },
  },
  plugins: [],
}

