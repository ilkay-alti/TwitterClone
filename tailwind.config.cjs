/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'login-bg':
          'url("https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png")',
      },
    },
  },
  plugins: [],
};
