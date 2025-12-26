export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#D81159", // strong accent (CTA, highlights)
        secondary: "#FEFFFE", // near-white (backgrounds)
        accent: "#00A878", // success / positive actions
        dark: "#0B0500", // text / headers
      },
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui"],
      },
      fontSize: {
        headingXL: "27px",
        headingLG: "22px",
        headingMD: "18px",
        headingSM: "16px",
        labelXL: "20px",
        labelLG: "18px",
        labelMD: "14px",
        labelSM: "12px",
        labelXS: "10px",
        valueXL: "17px",
        valueLG: "15px",
        valueMD: "12px",
        valueSM: "10px",
      },
    },
  },
  plugins: [],
};
