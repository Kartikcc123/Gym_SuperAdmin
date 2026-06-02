/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        neon: '#42ff00',
        ink: '#030303',
        panel: '#0b0f0b',
        soft: '#121812',
        line: '#1f2a1f',
        muted: '#9cb39b',
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui'],
        display: ['"Sora"', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        neon: '0 0 0 1px rgba(66,255,0,0.18), 0 24px 60px rgba(0,0,0,0.45)',
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(66,255,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(66,255,0,0.05) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};
