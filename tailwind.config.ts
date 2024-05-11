import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'design-accent': '#36F398',
      'design-primary-text': '#FFFFFF',
      'design-secondary-text': '#BABABA',
      'design-background-primary': '#1F1F24',
      'design-background-secondary':'#35353A'
    },
    fontFamily: {
      'display': ['PoliteType', 'sans-serif'],
      'body': ['var(--font-body)', 'sans-serif'],
    },
  },
  plugins: [],
};
export default config;
