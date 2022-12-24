/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      blue: "#004E96",
      white: "#ffffff",
      gray: "#232323",
      black: "#000000",
      lightBlue: "#2178C9"
    },
    screens: {
      smallest: '320px',
      small: '330px',
      phoneSmall: '340px',
      xxs: '356px',
      phone: '370px',
      xs: '400px',
      phoneLarge: '450px',
      phoneS: '505px',
      heroBreakOne: '560px',
      sm: '640px',
      heroBreakTwo: '690px',
      md: '736px',
      heroBreakThree: '934px',
      lg: '1024px',
      heroBreakFour: '1250px',
      xl: '1280px',
      xlSpecial: '1430px',
      '2xl': '1444px',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        // xl: '5rem',
        // '2xl': '6rem',
      },
    },
  },
  plugins: [],
}
