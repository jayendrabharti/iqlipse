/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        custom: '0 0 5px 0 rgba(0,0,0,0.2)'
      },
      colors:{
        mainColor:'var(--mainColor)',
        contrastColor:'var(--constastColor)',
        backgroundColor1:'var(--backgroundColor1)',
        backgroundColor2:'var(--backgroundColor2)',
        backgroundColor3:'var(--backgroundColor3)',
        textColor1:'var(--textColor1)',
        textColor2:'var(--textColor2)',
        textColor3:'var(--textColor3)',
        borderColor1:'var(--borderColor1)',
        borderColor2:'var(--borderColor2)',
        borderColor3:'var(--borderColor3)',
        red:'var(--red)',
        green:'var(--green)',
        yellow:'var(--yellow)',
        buttonColor:'var(--buttonColor)',
        logoColor:'var(--logoColor)',
        transparent:'rgba(0,0,0,0)',
      },
    },
  },
  plugins: [],
};
