/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#1f1f25',
          teal: '#45bcca',
          yellow: '#ffcc00',
          text: '#333333',
          light: '#f4f4f4',
          muted: '#6e777d',
          deep: '#4443b0'
        }
      },
      fontFamily: {
        display: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif']
      },
      borderRadius: {
        xl: '20px'
      }
    },
  },
  plugins: [],
}
