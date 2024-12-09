/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Ensure you're including all file types for tailwind
  ],
  mode: "jit", // Enable Just-in-Time mode for better performance
  darkMode: 'media', // Enable dark mode based on user's system preference
  theme: {
    extend: {
      // Adding custom colors
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        tetradic: '#8C4A43',
        light5: '#608C43',
        light6: '#43858C',
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        "light-bg": "#6F438C",
        // Dark mode colors
        'dark-primary': '#f3f3f3',
        'dark-secondary': '#822E38',
        'dark-tertiary': '#2e8278',
        'dark-tetradic': '#4E2E82',
        'dark-bg': '#000000',
      },
      // Adding custom box shadows
      boxShadow: {
        card: "0px 35px 120px -15px #211e35", // Light card shadow
        sectionCard: "0px 15px 60px rgba(0, 0, 0, 0.15)", // Section-specific shadow
      },
      // Adding custom screen breakpoints
      screens: {
        xs: "450px", // Extra small screen breakpoint
        sm: "640px", // Small screen breakpoint
        md: "768px", // Medium screen breakpoint
        lg: "1024px", // Large screen breakpoint
        xl: "1280px", // Extra large screen breakpoint
        '2xl': "1536px", // 2XL breakpoint
      },
      // Custom background image for hero section
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
      // Custom spacing sizes
      spacing: {
        128: '32rem', // Large spacing size
        150: '37.5rem', // Larger spacing size
      },
      // Custom typography for both light and dark modes
      typography: {
        DEFAULT: {
          css: {
            color: "#333", // Default text color for light mode
            lineHeight: "1.75", // Default line height
            h1: {
              fontWeight: "700", // H1 bold weight
              color: "#050816", // Custom color for h1
            },
            p: {
              color: "#aaa6c3", // Custom color for paragraphs
            },
          },
        },
        dark: {
          css: {
            color: "#f3f3f3", // Default text color for dark mode
            lineHeight: "1.75", // Default line height for dark mode
            h1: {
              fontWeight: "700", // H1 bold weight in dark mode
              color: "#f3f3f3", // Custom color for h1 in dark mode
            },
            p: {
              color: "#bbb", // Paragraph color in dark mode
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // Typography plugin for rich text styles
    require('@tailwindcss/forms'), // Forms plugin for styling form elements
    require('@tailwindcss/aspect-ratio'), // Aspect ratio utilities plugin
  ],
};
