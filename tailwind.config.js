module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', 
  theme: {
    extend: {
      backgroundImage: {
        'lock-main': "url('img/kingdom-sign-in.png')",
        'dev': "url('img/kingdom-10.png')",
        'card-0': "url('img/kingdom-11.png')",
        'card-1': "url('img/kingdom-1578.png')",
        'card-2': "url('img/kingdom-paying-with-card-online.png')",
      }
    },
    fontFamily: {
      mono: 'Source Code Pro, monospace',
      serif: 'Source Code Pro, monospace'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
