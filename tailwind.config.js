module.exports = {
  purge: ['index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        skin: {
          'key-base': 'var(--color-text-key-base)',
          'key-accent-1': 'var(--color-text-key-accent-1)',
          'key-accent-2': 'var(--color-text-key-accent-2)',
          screen: 'var(--color-text-screen)',
        },
      },

      backgroundColor: {
        skin: {
          base: 'var(--color-fill-base)',
          screen: 'var(--color-fill-screen)',
          keypad: 'var(--color-fill-keypad)',
          'key-base': 'var(--color-fill-key-base)',
          'key-accent-1': 'var(--color-fill-key-accent-1)',
          'key-accent-2': 'var(--color-fill-key-accent-2)',
        },
      },

      boxShadow: {
        'key-base': '0px 4px var(--color-shadow-key-base)',
        'key-accent-1': '0px 4px var(--color-shadow-key-accent-1)',
        'key-accent-2': '0px 4px var(--color-shadow-key-accent-2)',
      },

      fontFamily: {
        Spartan: 'Spartan, sans-serif',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
