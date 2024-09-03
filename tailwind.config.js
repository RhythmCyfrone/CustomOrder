/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mobile': '340px',

      'tablet': '640px',

      'laptop': '1024px',

      'desktop': '1280px',
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        CustomText: {
          300: '#292929',
          200: '#757575',
          100: '#ffffff',
        },
        CustomBrand: {
          300: '#3B82F6',
          200: '#C3DAFF',
          100: '#EBF3FE'
        },
        CustomNeutral: {
          400: '#292929',
          300: '#BFBFBF',
          200: '#EF1F1F1',
          100: '#FFFFFF'
        }
      },
    },
  },
  plugins: [],
}

