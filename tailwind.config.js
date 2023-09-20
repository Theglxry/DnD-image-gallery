/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      base: ["16px", "19.5px"],
      lg: ["18px", "21.94px"],
      xl: ["20px", "24.38px"],
      "2xl": ["24px", "29.26px"],
      "3xl": ["28px", "50px"],
      "4xl": ["48px", "58px"],
      "8xl": ["96px", "106px"],
    },

    extend: {
      fontFamily: {
        dmSans: ["DM Sans", "sans - serif"],
        mooli: ["Mooli", "sans - serif"],
        poppins: ["Poppins", "sans - serif"],
      },

      colors: {
        primary: "#ECEEFF",
        "coral-red": "#FF6452",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)",

        rose: "#BE123C",
        lightRose: "rgba(190, 18, 60, 0.10)",
        lighterRose: "rgba(190, 18, 60, 0.20)",
        lightestRose: "rgba(248, 231, 235, 0.40)",
        gray: {
          300: "#333",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#666",
          900: "rgba(243, 244, 246, 0.50)",
        },
        transparentBlack: "rgba(0, 0, 0, 0.50)",
        transparentWhite: "rgba(255, 255, 255, 0.35)",
        thickTransparentWhite: "rgba(255, 255, 255, 0.5)",
      },

      boxShadow: {
        "3xl": "0 10px 40px rgba(0, 0, 0, 0.1)",
      },

      backdropFilter: {
        "blur-20": "blur(20px)",
      },
      backgroundColor: {
        "bg-blur": "rgba(72, 10, 10, 0.5)",
      },

      backgroundImage: {
        hero: "url('assets/images/collection-background.svg')",
        card: "url('assets/images/thumbnail-background.svg')",
      },

      screens: {
        wide: "1440px",
      },

      customHeightLg: {
        height: "40vh",
      },

      customHeightMd: {
        height: "30vh",
      },

      customHeightSm: {
        height: "20vh",
      },
    },
  },
  plugins: [],
};
