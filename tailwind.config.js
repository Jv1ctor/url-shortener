/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.js", "./src/views/**/*.mustache"],
  theme: {  
    extend: {
      backgroundImage: {
        gradient: 'linear-gradient(79deg, #144EE3 0%, #EB568E 18.75%, #A353AA 64.06%, #144EE3 100%);',
        cubes: 'url(/img/background/cubes.png)'
      },
      boxShadow: {
        activeShadow:'10px 9px 22px 0px'
      },
      boxShadowColor: {
        activeShadow:'rgba(20, 78, 227, 0.38)'
      }
    },
    colors: {
      transparent: 'transparent',
      primaryPink: '#EB568E',
      primaryBlue: '#144EE3',
      black: '#0B101B',
      grey: '#181E29',
      lite: '#C9CED6',
      white: '#fff'
    }
  },
  plugins: [],
}

