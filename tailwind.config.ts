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
        azul: "#A3D8F4",
        verde: "#A7E4A5",
        preto: "#000000"
      },
    },
  },
  plugins: [],
};
export default config;
