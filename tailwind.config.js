module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure Tailwind scans your files
  ],
  theme: {
    extend: {
      colors: {
        'navy-blue': '#001f3f',
        'blue-900': '#001a33', // Add a darker blue for the gradient
      },
      fontFamily: {
        'playfair-display': ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
};
