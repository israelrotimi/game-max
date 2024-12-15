import type { Config } from "tailwindcss";

export default {
   content: [
     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
     "./components/**/*.{js,ts,jsx,tsx,mdx}",
     "./app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
     extend: {
       colors: {
         'game-bg-dark': '#2C3333',
         'game-bg-medium': '#1E1E1E',
         'game-accent-orange': '#FF6D00',
         'game-accent-purple': '#6A5ACD',
         'game-text-primary': '#FFFFFF',
       },
     },
   },
   plugins: [],
} satisfies Config;