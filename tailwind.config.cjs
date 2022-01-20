// tailwind.config.cjs
module.exports = {
  mode: 'jit',
  content: [
    './public/**/*.html',
    './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}',
  ],
  theme: {
      fontFamily: {
          body: ['Work Sans', 'sans-serif'],
          display: ['Merriweather', 'serif']
      },
      extend: {
          colors: {
              theme: "#b7d0f7",
              "theme-true": "#00c2cb",
              contrast: "#fbbc04",
              offWhite: "#f6fbfd"
          }
      }
  }
};