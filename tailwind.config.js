export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5", // Indigo-600: Trust, Intelligence, Technology
        secondary: "#F3F4F6", // Gray-100: Calm, Neutral background
        surface: "#FFFFFF",   // White: Cleanliness, Clarity
        accent: "#EC4899",    // Pink-500: Energy, Playfulness (for CTAs)
        success: "#10B981",   // Emerald-500: Positive confirmation
        dark: "#111827",      // Gray-900: High contrast text
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
