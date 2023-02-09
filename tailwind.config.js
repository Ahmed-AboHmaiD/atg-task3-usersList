module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        custom_1: "#6096B4",
        custom_2: "#EEE9DA",
        custom_3: "#FFFBF5",
        custom_4: "#BDCDD6",
        inputR: "hsl(210, 78%, 56%)",
        inputL: "hsl(146, 68%, 55%)",
        dark_1: "#1e202a",
        dark_2: "#365563",
        col: "hsl(232, 19%, 15%)",
        colItem: "#24344C",
        colItemHover: "hsl(228 28% 20%)",
      },
      spacing: {
        input: "-2em",
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
          md: "4rem",
          lg: "5rem",
          xl: "6rem",
          "2xl": "10rem",
        },
      },
      keyframes: {
        "slide-in": {
          "0%": {
            "-webkit-transform": "translateX(-200px)",
            transform: "translateX(-200px)",
          },
          "100%": {
            "-webkit-transform": "translateX(0px)",
            transform: "translateX(0px)",
          },
        },

        "slide-fwd": {
          "0%": {
            "-webkit-transform": "translateY(-100px)",
            transform: "translateY(-100px)",
          },
          "100%": {
            "-webkit-transform": "translateY(0)",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "slide-in": "slide-in 0.5s ease-out",
        "slide-fwd":
          " slide-fwd 0.45s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
      },
      transitionProperty: {
        height: "height",
      },
    },
    cursor: {
      "zoom-in": "zoom-in",
      pointer: "pointer",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
