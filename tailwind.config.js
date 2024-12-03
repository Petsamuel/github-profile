/** @type {import('tailwindcss').Config} */
// import HeroImage from "";
export default {
  content: ["./src/**/*.{html,jsx,tsx,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        heroBg: "url('./src/assets/hero-image-github-profile.png')",
        searchIcon: "url('./src/assets/Search.svg')",
      },
    },
  },
  plugins: [],
};
