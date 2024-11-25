import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        branco: "#FFFFFF",
        azul: "#58A7FE",
        verdeClaro: "#7FE786",
        verdeEscuro: "#409450",
        preto: "#000000",
        cinza: "#6B6B6B",
        cinzaClaro: "#E3E3D8",
        amarelo: "#FFF6A5"
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")
  ],
};

export default config;
