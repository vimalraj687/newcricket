/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      animation: {
        float: "float 4s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        pulseLive: "pulseLive 1s infinite",
        slideUp: "slideUp 0.8s ease-out forwards",
        bounceBall: "bounceBall 1.2s infinite",
        shine: "shine 3s linear infinite",
        zoomSlow: "zoomSlow 6s ease-in-out infinite",
      },

      keyframes: {
        float: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-12px)",
          },
        },

        glow: {
          "0%": {
            boxShadow: "0 0 15px rgba(255,255,255,0.15)",
          },
          "100%": {
            boxShadow: "0 0 40px rgba(255,255,255,0.45)",
          },
        },

        pulseLive: {
          "0%,100%": {
            opacity: "1",
            transform: "scale(1)",
          },
          "50%": {
            opacity: "0.55",
            transform: "scale(1.08)",
          },
        },

        slideUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(40px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },

        bounceBall: {
          "0%,100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },

        shine: {
          "0%": {
            transform: "translateX(-250%) skewX(-25deg)",
          },
          "100%": {
            transform: "translateX(500%) skewX(-25deg)",
          },
        },

        zoomSlow: {
          "0%,100%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(1.03)",
          },
        },
      },
    },
  },

  plugins: [],
};