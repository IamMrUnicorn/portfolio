/** @type {import('tailwindcss').Config} */
export const content = ['./src/**/*.{js,ts,jsx,tsx}'];
export const plugins = [require("daisyui")];
export const daisyui = {
  themes: [
    "dracula",
    "aqua",
    "cyberpunk",
    "coffee"
  ]
};
