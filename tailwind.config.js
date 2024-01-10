/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      tiny: "0.625rem",
      // outros tamanhos de fonte aqui...
    },
    screens: {
      930: "58.125rem",
      785: "49.063rem",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      maxWidth: {
        grid: "77.5rem",
      },
      minHeight: {
        hero: "92.6vh",
      },
      colors: {
        primary: "#0099ff",
      },
    },
  },
  plugins: [],
};
