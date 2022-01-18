module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', 
  theme: {
    extend: {
      colors: {
        ebony: {
          50: '#f2f2f2',
          100: '#cbcbcb',
          200: '#a3a3a3',
          300: '#686868',
          400: '#555555',
          500: '#414141',
          600: '#2e2e2e',
          700: '#1a1a1a',
          800: '#1a1a1a',
          900: '#101010',
        }
      },
      backgroundImage: {
        'lock-main': "url('img/kingdom-sign-in.png')",
        'dev': "url('img/kingdom-10.png')",
        'card-0': "url('img/kingdom-11.png')",
        'card-1': "url('img/kingdom-1578.png')",
        'card-2': "url('img/kingdom-paying-with-card-online.png')",
        'docs-shark': "url('img/VDFM1.png')",
        'docs-burp': "url('img/Burp-Suite-Professional.jpg')",
      },
      animation: {
        'gradient-y': 'gradient-y 5s ease infinite',
      },
      keyframes: {
        'gradient-y': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left top',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'center center',
          },
        },
      },
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
