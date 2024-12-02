/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Ensure you are including all relevant file types.
  ],
  mode: "jit", // Just-in-time mode for better performance
  darkMode: 'media', // Enable dark mode based on user's system preference
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        "light-bg": "#6F438C",
        // Dark mode colors
        'dark-primary': '#1a1a1a', // Dark background for primary color
        'dark-secondary': '#d1c6e1', // Lighter secondary text color for dark mode
        'dark-tertiary': '#26244f', // Darker tertiary background
        'dark-bg': '#000000'
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px", // Add an extra small screen breakpoint
        // You can extend with other screen sizes, e.g. md, lg, xl, 2xl.
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
      spacing: {
        128: '32rem', // Example of adding a custom spacing size
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#333", // Default text color for light mode
            lineHeight: "1.75",
            h1: {
              fontWeight: "700",
            },
          },
        },
        dark: {
          css: {
            color: "#f3f3f3", // Default text color for dark mode
            lineHeight: "1.75",
            h1: {
              fontWeight: "700",
              color: "#f3f3f3", // White color for h1 in dark mode
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // For rich text styles like blog posts
    require('@tailwindcss/forms'), // For styling form elements
    require('@tailwindcss/aspect-ratio'), // For aspect ratio utilities
  ],
};
