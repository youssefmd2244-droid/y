import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        void: "#050510",
        "void-2": "#0a0a1a",
        "void-3": "#0f0f25",
        "void-card": "#0d0d20",
        "neon-cyan": "#00f5ff",
        "neon-violet": "#8b00ff",
        "neon-magenta": "#ff00e5",
        "neon-green": "#00ff88",
        "neon-orange": "#ff6b00",
        "hex-border": "rgba(0,245,255,0.2)",
        "hex-glow": "rgba(0,245,255,0.05)",
        brand: {
          50: "#e0fcff",
          100: "#b3f8ff",
          200: "#80f3ff",
          300: "#4deeff",
          400: "#26eaff",
          500: "#00f5ff",
          600: "#00c4cc",
          700: "#009399",
          800: "#006266",
          900: "#003133",
        },
      },
      backgroundImage: {
        "hex-pattern": "url(\"data:image/svg+xml,%3Csvg width='60' height='70' viewBox='0 0 60 70' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='30,2 58,17 58,53 30,68 2,53 2,17' fill='none' stroke='rgba(0,245,255,0.08)' stroke-width='1'/%3E%3C/svg%3E\")",
        "glow-radial": "radial-gradient(ellipse at center, rgba(0,245,255,0.15) 0%, transparent 70%)",
        "hero-gradient": "linear-gradient(135deg, #050510 0%, #0a0a2e 40%, #050510 100%)",
        "card-gradient": "linear-gradient(135deg, rgba(0,245,255,0.05) 0%, rgba(139,0,255,0.05) 100%)",
        "neon-gradient": "linear-gradient(90deg, #00f5ff, #8b00ff, #ff00e5)",
        "panel-bg": "linear-gradient(180deg, rgba(13,13,32,0.95) 0%, rgba(5,5,16,0.98) 100%)",
      },
      boxShadow: {
        "neon-cyan": "0 0 20px rgba(0,245,255,0.4), 0 0 60px rgba(0,245,255,0.1)",
        "neon-violet": "0 0 20px rgba(139,0,255,0.4), 0 0 60px rgba(139,0,255,0.1)",
        "neon-magenta": "0 0 20px rgba(255,0,229,0.4), 0 0 60px rgba(255,0,229,0.1)",
        "card-glow": "0 0 40px rgba(0,245,255,0.08), inset 0 0 40px rgba(0,245,255,0.02)",
        "hex-glow": "0 0 30px rgba(0,245,255,0.3)",
      },
      animation: {
        "pulse-neon": "pulseNeon 2s ease-in-out infinite",
        "hex-rotate": "hexRotate 20s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "scan-line": "scanLine 3s linear infinite",
        "glow-pulse": "glowPulse 2s ease-in-out infinite alternate",
        "border-flow": "borderFlow 3s linear infinite",
        "data-stream": "dataStream 1.5s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
      },
      keyframes: {
        pulseNeon: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        hexRotate: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        scanLine: {
          "0%": { top: "0%" },
          "100%": { top: "100%" },
        },
        glowPulse: {
          from: { boxShadow: "0 0 10px rgba(0,245,255,0.3)" },
          to: { boxShadow: "0 0 30px rgba(0,245,255,0.7), 0 0 60px rgba(0,245,255,0.2)" },
        },
        borderFlow: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
        dataStream: {
          "0%, 100%": { transform: "scaleY(0.3)", opacity: "0.5" },
          "50%": { transform: "scaleY(1)", opacity: "1" },
        },
      },
      borderRadius: {
        hex: "4px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
