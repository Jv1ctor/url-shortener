/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.js", "./src/views/**/*.mustache"],
  theme: {  
    extend: {
      backgroundSize: {
        '300': '300%'
      },
      backgroundImage: {
        gradient: 'linear-gradient(79deg, #144EE3 0%, #EB568E 18.75%, #A353AA 64.06%, #144EE3 100%);',
        cubes: 'url(/img/background/cubes.png)',
        swirl: 'url(/img/background/swirl.png)',
      },
      boxShadow: {
        activeShadow:'10px 9px 22px 0px'
      },
      boxShadowColor: {
        activeShadow:'rgba(20, 78, 227, 0.38)'
      },
      animation: {
        'message': 'message 1s cubic-bezier(.98,.38,1,.89) both',
        'background': 'background 15s ease-in-out infinite',
      },
      keyframes: {
        message: {
          '0%': { transform: 'translateY(-20%)' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0' }
        },
        background: {
          '0%': { backgroundPosition: '0% 50%;'},
          '50%': { backgroundPosition: '100% 50%;' },
          '100%': { backgroundPosition: '0% 50%;' }
        },
      }
    },
    colors: {
      transparent: 'transparent',
      primaryPink: '#EB568E',
      primaryBlue: '#144EE3',
      black: '#0B101B',
      grey: '#181E29',
      lite: '#C9CED6',
      white: '#fff',
      red: '#D10404'
    }
  },
  plugins: [],
}

