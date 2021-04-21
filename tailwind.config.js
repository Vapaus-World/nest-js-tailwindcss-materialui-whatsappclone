module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      flex: {
        25: "0.25 1",
        75: " 0.75 1",
      },
      colors: {
        whatsapp: {
          chatbg: "#ece5dd",
          primary: "#dcf8c6",
          green: "#25d366",
          bgcolor: "#ededed",
          white: "#fff",
          whitesmoke: "whitesmoke",
        },
      },
      textColor: {
        grey: {
          100: "#6d6d6d",
          400: "#3c3a37",
        },
      },
      fontSize: {
        vsm: "9px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
