module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // ✅ Scans all components
    './public/index.html',        // ✅ Include this to catch any static HTML usage
  ],
  theme: {
    extend: {
      colors: {
        'navy-blue': '#001f3f',
        'blue-900': '#001a33',
      },
      fontFamily: {
        'playfair-display': ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
};
