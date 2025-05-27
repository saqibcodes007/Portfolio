module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-space-blue': '#0A1128',
        'midnight-indigo': '#1C2541',
        'tech-charcoal': '#3A506B',
        'electric-cyan': '#5BC0BE',
        'neon-purple': '#7B68EE',
        'bright-teal': '#00F5D4',
        'space-white': '#ECF0F1',
        'cosmic-silver': '#A9B4C2',
        'nebula-gray': '#6C7A89',
      },
      fontFamily: {
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
