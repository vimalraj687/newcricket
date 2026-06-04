import React, { useEffect, useState } from "react";
import { HexColorPicker } from "react-colorful";

const gradientOptions = [
  "from-cyan-500 via-blue-600 to-indigo-900",
  "from-blue-500 via-indigo-700 to-purple-900",
  "from-violet-500 via-fuchsia-700 to-black",
  "from-emerald-400 via-teal-600 to-cyan-900",
  "from-orange-500 via-red-600 to-pink-800",
  "from-pink-500 via-rose-600 to-red-900",
  "from-yellow-400 via-orange-500 to-red-700",
  "from-sky-400 via-cyan-500 to-blue-800",
  "from-lime-400 via-green-600 to-emerald-900",
  "from-slate-700 via-zinc-900 to-black",
  "from-indigo-500 via-purple-700 to-fuchsia-900",
  "from-teal-400 via-cyan-600 to-slate-900",
  "from-rose-500 via-fuchsia-700 to-indigo-900",
  "from-red-500 via-orange-600 to-yellow-700",
  "from-purple-500 via-violet-700 to-indigo-950",
  "from-neutral-700 via-zinc-900 to-black",
  "from-amber-300 via-orange-500 to-red-800",
  "from-cyan-300 via-sky-500 to-blue-900",
  "from-fuchsia-500 via-pink-700 to-rose-900",
  "from-green-400 via-emerald-600 to-teal-900",
  "from-blue-400 via-cyan-500 to-slate-950",
  "from-indigo-400 via-blue-600 to-cyan-900",
  "from-purple-600 via-pink-700 to-black",
  "from-zinc-700 via-neutral-900 to-black",
  "from-slate-600 via-blue-800 to-black",
  "from-cyan-500 via-teal-600 to-black",
  "from-red-500 via-rose-700 to-black",
  "from-emerald-500 via-green-700 to-black",
  "from-orange-400 via-amber-600 to-black",
  "from-fuchsia-400 via-purple-700 to-black",
  "from-red-900 via-red-950 to-black",
  "from-rose-900 via-red-900 to-black",
  "from-pink-900 via-rose-950 to-black",
  "from-[#5b0000] via-[#2a0000] to-black",
  "from-blue-900 via-indigo-950 to-black",
  "from-sky-900 via-blue-950 to-black",
  "from-[#001f3f] via-[#001122] to-black",
  "from-[#0a2540] via-[#061421] to-black",
  "from-black via-zinc-900 to-black",
  "from-neutral-950 via-black to-zinc-950",
  "from-slate-950 via-black to-slate-900",
  "from-[#111111] via-[#000000] to-[#1a1a1a]",
  "from-white via-gray-300 to-slate-500",
  "from-gray-100 via-zinc-300 to-gray-600",
  "from-slate-200 via-gray-400 to-slate-700",
  "from-[#f8fafc] via-[#cbd5e1] to-[#334155]",
  "from-green-900 via-emerald-950 to-black",
  "from-teal-900 via-green-950 to-black",
  "from-[#002b1f] via-[#00150f] to-black",
  "from-purple-900 via-violet-950 to-black",
  "from-fuchsia-900 via-purple-950 to-black",
  "from-[#2a003f] via-[#14001f] to-black",
  "from-orange-900 via-amber-950 to-black",
  "from-yellow-700 via-orange-900 to-black",
  "from-[#5c2e00] via-[#2b1400] to-black",
  "from-[#0f172a] via-[#1e293b] to-black",
  "from-[#111827] via-[#1f2937] to-black",
  "from-[#1e1b4b] via-[#312e81] to-black",
  "from-[#450a0a] via-[#7f1d1d] to-black",
];

const solidColorOptions = [
  "#ff0000",
  "#00ff00",
  "#0000ff",
  "#ffff00",
  "#00ffff",
  "#ff00ff",
  "#ffffff",
  "#000000",
  "#ffa500",
  "#800080",
  "#00ff7f",
  "#ff1493",
  "#1e90ff",
  "#ffd700",
  "#008080",
];

const colorNameMap = {
  red: "#ff0000",
  green: "#00ff00",
  blue: "#0000ff",
  yellow: "#ffff00",
  cyan: "#00ffff",
  magenta: "#ff00ff",
  white: "#ffffff",
  black: "#000000",
  orange: "#ffa500",
  purple: "#800080",
  lime: "#00ff00",
  pink: "#ff1493",
  teal: "#008080",
  gold: "#ffd700",
};

const GlassCard = ({ children, className = "", gradient, onClick, animateClass = "animate-[cardFloat_14s_ease-in-out_infinite]" }) => {
  const isSolid = gradient && (gradient.startsWith('#') || /^[a-zA-Z]+$/.test(gradient));

  return (
    <div
      style={isSolid ? { backgroundColor: gradient } : {}}
      className={`
        group relative overflow-hidden rounded-[28px]
        border border-white/12
        bg-white/3
        ${isSolid ? '' : `bg-gradient-to-br ${gradient} bg-animate-gradient`}
        backdrop-blur-3xl
        shadow-[0_20px_50px_rgba(0,0,0,0.3)]
        transition-all duration-500
        transform-gpu
        hover:-translate-y-1.5
        hover:scale-[1.005]
        hover:border-white/25
        hover:shadow-[0_30px_70px_rgba(0,0,0,0.45),_0_0_30px_rgba(255,255,255,0.06)]
        ${animateClass}
        
        before:absolute
        before:inset-0
        before:bg-[linear-gradient(130deg,rgba(255,255,255,0.08),transparent_50%)]
        before:pointer-events-none

        ${className}
      `}
      onClick={onClick}
    >
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.35),transparent)] animate-[shimmer_5s_linear_infinite]" />

      <div className="absolute -inset-[200%] bg-[radial-gradient(circle,rgba(255,255,255,0.12),transparent_60%)] animate-[spin_18s_linear_infinite]" />

      <div className="absolute inset-0 rounded-[0px]  border border-white/10 animate-pulse" />

      <div className="absolute inset-x-0 top-0 h-[26%] bg-[linear-gradient(90deg,rgba(255,255,255,0.18),transparent,rgba(255,255,255,0.18))] opacity-0 pointer-events-none animate-[cardPulse_6s_ease-in-out_infinite]" />

      <div className="absolute inset-x-0 bottom-0 h-2 bg-white/10 opacity-50 blur-sm animate-[cardLight_4s_linear_infinite]" />

      {children}
    </div>
  );
};

export default function App() {
  const [liveTick, setLiveTick] = useState(0);
  const [team1Name, setTeam1Name] = useState("INDIA");
  const [team2Name, setTeam2Name] = useState("AUSTRALIA");
  const [showEditor, setShowEditor] = useState(null);
  console.log(liveTick);
  const [theme, setTheme] = useState({
    background: "from-[#020617] via-[#071326] to-black",
    header: "from-cyan-500 via-blue-700 to-indigo-950",
    striker: "from-blue-500 via-indigo-700 to-purple-900",
    nonStriker: "from-cyan-400 via-blue-600 to-indigo-900",
    bowler: "from-orange-500 via-red-600 to-pink-900",
    event: "from-fuchsia-500 via-purple-700 to-indigo-950",
    facecam: "from-purple-600 via-fuchsia-700 to-indigo-950",
    lastOver: "from-slate-700 via-slate-900 to-black",
    live: "from-red-500 via-rose-600 to-pink-700",
    team1Card: "from-slate-900/80 via-cyan-950/60 to-blue-950/80",
    team2Card: "from-slate-900/80 via-orange-950/60 to-red-950/80",
  });

  const [pickerTarget, setPickerTarget] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setLiveTick((p) => p + 1);
    }, 1200);

    return () => clearInterval(timer);
  }, []);

  const updateTheme = (key, value) => {
    setTheme((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const ColorPicker = ({ target }) => {
    return (
      <button
        onClick={(e) => {
          e.stopPropagation();
          setPickerTarget(pickerTarget === target ? null : target);
        }}
        className={`
          absolute top-4 right-4 z-[99]
          h-10 w-10
          rounded-full
          bg-black/50
          border border-white/20
          backdrop-blur-xl
          flex items-center justify-center
          text-lg
          transition-all duration-300
          hover:scale-110
          
          ${pickerTarget === target
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto"
          }
        `}
      >
        🎨
      </button>
    );
  };

  const isBgSolid = theme.background && (theme.background.startsWith('#') || /^[a-zA-Z]+$/.test(theme.background));
  const isTeam1Solid = theme.team1Card && (theme.team1Card.startsWith('#') || /^[a-zA-Z]+$/.test(theme.team1Card));
  const isTeam2Solid = theme.team2Card && (theme.team2Card.startsWith('#') || /^[a-zA-Z]+$/.test(theme.team2Card));

  // Render popup at root to prevent clipping inside small GlassCards
  const renderThemeModal = () => {
    if (!pickerTarget) return null;

    const currentColor = theme[pickerTarget] || "";
    const colorForPicker = currentColor.startsWith('#')
      ? currentColor
      : colorNameMap[currentColor]
        ? colorNameMap[currentColor]
        : currentColor.match(/#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})/)
          ? currentColor.match(/#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})/)[0]
          : "#00ffff";

    return (
      <div
        className="absolute inset-0 z-[9999999] bg-black/60 backdrop-blur-sm flex items-center justify-center"
        onClick={() => setPickerTarget(null)}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="
            w-[400px] h-[600px]
            p-6
            rounded-3xl
            border border-white/20
            bg-black/95
            backdrop-blur-3xl
            shadow-[0_0_60px_rgba(0,255,255,0.2)]
            flex flex-col
          "
        >
          <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
            <h3 className="text-lg font-black text-white tracking-widest">THEME EDITOR</h3>
            <button
              onClick={() => setPickerTarget(null)}
              className="px-4 py-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors font-bold text-sm"
            >
              CLOSE
            </button>
          </div>

          <div className="flex-1 overflow-y-scroll pr-2 scrollbar-hide">
            <div className="mb-8 flex justify-center custom-picker">
              <HexColorPicker
                color={colorForPicker}
                onChange={(color) => updateTheme(pickerTarget, color)}
              />
            </div>

            <h4 className="text-xs font-bold text-white/50 mb-4 tracking-widest uppercase">Or pick a solid color</h4>

            <div className="grid grid-cols-5 gap-3 mb-4">
              {solidColorOptions.map((color, i) => (
                <button
                  key={`color-${i}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    updateTheme(pickerTarget, color);
                  }}
                  className={
                    `h-12 rounded-xl border border-white/10 transition-all duration-200`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>

            <h4 className="text-xs font-bold text-white/50 mb-4 tracking-widest uppercase">Or pick a preset gradient</h4>

            <div className="grid grid-cols-4 gap-3">
              {gradientOptions.map((g, i) => (
                <button
                  key={i}
                  onClick={(e) => {
                    e.stopPropagation();
                    updateTheme(pickerTarget, g);
                  }}
                  className={`
                    h-12 rounded-xl
                    bg-gradient-to-br ${g}
                    border border-white/10
                    hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]
                    transition-all duration-200
                  `}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <style>{`
            *{
               box-sizing:border-box;
            }

            body{
               margin:0;
               overflow:hidden;
               font-family:Inter,sans-serif;
            }

            @keyframes shimmer{
               0%{transform:translateX(-100%);}
               100%{transform:translateX(200%);}
            }

            @keyframes float{
               0%,100%{transform:translateY(0px);}
               50%{transform:translateY(-10px);}
            }

            @keyframes radar{
               from{transform:rotate(0deg);}
               to{transform:rotate(360deg);}
            }

            @keyframes cardFloat {
               0%,100% { transform: translateY(0px); }
               50% { transform: translateY(-8px); }
            }            @keyframes headerFloat {
               0%, 100% {
                  transform: translateY(0px) rotate(0deg);
                  border-color: rgba(255, 255, 255, 0.12);
                  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
               }
               50% {
                  transform: translateY(-6px) rotate(0.1deg);
                  border-color: rgba(6, 182, 212, 0.25);
                  box-shadow: 0 25px 60px rgba(6, 182, 212, 0.15), 0 0 25px rgba(6, 182, 212, 0.08);
               }
            }

            @keyframes team1Float {
               0%, 100% {
                  transform: translateY(0px) translateX(0px) rotate(0deg) scale(1);
                  border-color: rgba(255, 255, 255, 0.1);
                  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
               }
               50% {
                  transform: translateY(-5px) translateX(2px) rotate(0.2deg) scale(1.005);
                  border-color: rgba(34, 211, 238, 0.3);
                  box-shadow: 0 25px 70px rgba(34, 211, 238, 0.2), 0 0 30px rgba(34, 211, 238, 0.1);
               }
            }

            @keyframes team2Float {
               0%, 100% {
                  transform: translateY(0px) translateX(0px) rotate(0deg) scale(1);
                  border-color: rgba(255, 255, 255, 0.1);
                  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
               }
               50% {
                  transform: translateY(-5px) translateX(-2px) rotate(-0.2deg) scale(1.005);
                  border-color: rgba(251, 146, 60, 0.3);
                  box-shadow: 0 25px 70px rgba(251, 146, 60, 0.2), 0 0 30px rgba(251, 146, 60, 0.1);
               }
            }

            @keyframes liveFloat {
               0%, 100% {
                  transform: translateY(0px) scale(1);
                  border-color: rgba(239, 68, 68, 0.3);
                  box-shadow: 0 0 25px rgba(239, 68, 68, 0.1);
               }
               50% {
                  transform: translateY(-4px) scale(1.008);
                  border-color: rgba(239, 68, 68, 0.6);
                  box-shadow: 0 0 40px rgba(239, 68, 68, 0.25), 0 0 20px rgba(239, 68, 68, 0.15);
               }
            }

            @keyframes lastOverFloat {
               0%, 100% {
                  transform: translateY(0px) translateX(0px);
                  border-color: rgba(255, 255, 255, 0.12);
               }
               50% {
                  transform: translateY(-5px) translateX(2px);
                  border-color: rgba(255, 255, 255, 0.2);
               }
            }

            @keyframes strikerFloat {
               0%, 100% {
                  transform: translateY(0px) rotate(0deg);
                  border-color: rgba(255, 255, 255, 0.1);
                  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.18);
               }
               50% {
                  transform: translateY(-9px) rotate(0.3deg);
                  border-color: rgba(59, 130, 246, 0.25);
                  box-shadow: 0 25px 70px rgba(59, 130, 246, 0.18), 0 0 25px rgba(59, 130, 246, 0.1);
               }
            }

            @keyframes nonStrikerFloat {
               0%, 100% {
                  transform: translateY(0px) rotate(0deg);
                  border-color: rgba(255, 255, 255, 0.1);
                  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.18);
               }
               50% {
                  transform: translateY(-9px) rotate(-0.3deg);
                  border-color: rgba(34, 211, 238, 0.25);
                  box-shadow: 0 25px 70px rgba(34, 211, 238, 0.18), 0 0 25px rgba(34, 211, 238, 0.1);
               }
            }

            @keyframes bowlerFloat {
               0%, 100% {
                  transform: translateY(0px) rotate(0deg);
                  border-color: rgba(255, 255, 255, 0.1);
                  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.18);
               }
               50% {
                  transform: translateY(-8px) rotate(0.2deg);
                  border-color: rgba(249, 115, 22, 0.25);
                  box-shadow: 0 25px 70px rgba(249, 115, 22, 0.18), 0 0 25px rgba(249, 115, 22, 0.1);
               }
            }

            @keyframes eventFloat {
               0%, 100% {
                  transform: translateY(0px) rotate(0deg);
                  border-color: rgba(255, 255, 255, 0.1);
                  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.18);
               }
               50% {
                  transform: translateY(-8px) rotate(-0.2deg);
                  border-color: rgba(217, 70, 239, 0.25);
                  box-shadow: 0 25px 70px rgba(217, 70, 239, 0.18), 0 0 25px rgba(217, 70, 239, 0.1);
               }
            }

            @keyframes facecamFloat {
               0%, 100% {
                  transform: translateY(0px) rotate(0deg);
                  border-color: rgba(255, 255, 255, 0.1);
                  box-shadow: 0 25px 80px rgba(0, 0, 0, 0.18);
               }
               50% {
                  transform: translateY(-7px) rotate(0.1deg);
                  border-color: rgba(168, 85, 247, 0.25);
                  box-shadow: 0 30px 90px rgba(168, 85, 247, 0.2), 0 0 30px rgba(168, 85, 247, 0.1);
               }
            }

            @keyframes cardPulse {
               0%,100% { opacity: 0.08; }
               50% { opacity: 0.22; }
            }

            @keyframes cardLight {
               0% { transform: translateX(-120%) skewX(-20deg); opacity: 0; }
               50% { opacity: 0.35; }
               100% { transform: translateX(120%) skewX(-20deg); opacity: 0; }
            }

            @keyframes pulseGlow{
               0%,100%{
                  box-shadow:0 0 20px rgba(255,255,255,0.1);
                  border-color: rgba(255,255,255,0.15);
               }
               50%{
                  box-shadow:0 0 35px rgba(255,255,255,0.25);
                  border-color: rgba(255,255,255,0.35);
               }
            }

            @keyframes liveBar{
               0%{transform:translateX(-100%);}
               100%{transform:translateX(250%);}
            }

            @keyframes bounceDot{
               0%,100%{
                  transform:translateY(0px);
               }
               50%{
                  transform:translateY(-8px);
               }
            }

            @keyframes flicker{
               0%,18%,22%,25%,53%,57%,100%{
                  opacity:1;
               }
               20%,24%,55%{
                  opacity:0.4;
               }
            }

            @keyframes blink {
               0%,100% {
                  opacity: 1;
                  text-shadow: 0 0 12px rgba(255,255,255,0.9), 0 0 30px rgba(14,165,233,0.35);
               }
               50% {
                  opacity: 0.35;
                  text-shadow: 0 0 6px rgba(255,255,255,0.45), 0 0 15px rgba(14,165,233,0.2);
               }
            }

            .blink {
               animation: blink 1.5s ease-in-out infinite;
            }

            @keyframes scan{
               0%{
                  transform:translateY(-120%);
               }
               100%{
                  transform:translateY(120%);
               }
            }

            @keyframes spin {
               0% { transform: rotate(0deg); }
               100% { transform: rotate(360deg); }
            }

            .floating{
               animation:float 5s ease-in-out infinite;
            }

            .pulseGlow{
               animation:pulseGlow 3s ease-in-out infinite;
            }

            .flicker{
               animation:flicker 2s infinite;
            }

            .scanline{
               animation:scan 4s linear infinite;
            }

            .radar{
               animation:radar 12s linear infinite;
            }

            .bounceDot{
               animation:bounceDot 1s infinite;
            }
            
            .bg-animate-gradient {
              background-size: 200% 200%;
              animation: gradient-x 10s ease infinite;
            }

            @keyframes gradient-x {
              0%, 100% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
            }

            /* Custom React Colorful Styles to fit the app */
            .custom-picker .react-colorful {
              width: 100%;
              height: 200px;
            }
            .custom-picker .react-colorful__pointer {
              width: 24px;
              height: 24px;
            }

            @keyframes tech-grid-move {
              0% { background-position: 0 0; }
              100% { background-position: 28px 32px; }
            }

            .tech-grid {
              background-image: 
                linear-gradient(to right, rgba(6, 182, 212, 0.05) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(6, 182, 212, 0.05) 1px, transparent 1px);
              background-size: 14px 16px;
              animation: tech-grid-move 8s linear infinite;
            }

            @keyframes audio-visualizer-bar {
              0%, 100% { transform: scaleY(0.15); }
              50% { transform: scaleY(1); }
            }

            .visualizer-bar {
              transform-origin: bottom;
              animation: audio-visualizer-bar 1.2s ease-in-out infinite;
            }

            @keyframes sound-ripple {
              0% {
                transform: translate(-50%, -50%) scale(0.9);
                opacity: 0.7;
              }
              100% {
                transform: translate(-50%, -50%) scale(1.6);
                opacity: 0;
              }
            }

            .ripple-ring {
              animation: sound-ripple 3.5s cubic-bezier(0.1, 0.8, 0.3, 1) infinite;
            }

            @keyframes scanner-swipe {
              0% { left: 0%; opacity: 0; }
              10% { opacity: 1; }
              90% { opacity: 1; }
              100% { left: 100%; opacity: 0; }
            }

            .scanner-line {
              width: 8px;
              height: 100%;
              background: linear-gradient(to bottom, transparent, rgba(6, 182, 212, 0.65), transparent);
              box-shadow: 0 0 20px 4px rgba(6, 182, 212, 0.95);
              position: absolute;
              top: 0;
              left: 0;
              animation: scanner-swipe 4s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
            }

            @keyframes rotate-ccw {
              0% { transform: rotate(360deg); }
              100% { transform: rotate(0deg); }
            }

            .spin-ccw {
              animation: rotate-ccw 20s linear infinite;
            }
          `}</style>

      <div
        style={isBgSolid ? { backgroundColor: theme.background } : {}}
        className={`relative page-glow w-[1920px] h-[1080px] overflow-hidden ${isBgSolid ? '' : `bg-gradient-to-br ${theme.background}`} text-white`}
      >
        {/* PARTICLES */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute h-2 w-2 rounded-full bg-cyan-400 blur-sm floating"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDuration: `${4 + Math.random() * 8}s`,
              }}
            />
          ))}
        </div>

        {/* TOP GLOW */}
        <div className="absolute inset-x-0 top-0 h-[500px] bg-cyan-500/10 blur-[180px]" />

        {/* HEADER */}
        <GlassCard
          gradient={theme.header}
          className="mx-5 mt-4 min-h-[240px] px-10 py-8 overflow-visible"
          animateClass="animate-[headerFloat_16s_ease-in-out_infinite]"
        >
          <div className="absolute inset-0 overflow-hidden">
            <div className="scanline absolute inset-x-0 h-28 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
          </div>

          <div className="relative flex h-[210px] gap-6 items-center">
            {/* TEAM 1 */}
            <div
              style={isTeam1Solid ? { backgroundColor: theme.team1Card } : {}}
              className={`w-1/3 h-[270px] rounded-[32px] border border-white/10 hover:border-cyan-400/50 ${isTeam1Solid ? '' : `bg-gradient-to-br ${theme.team1Card} bg-animate-gradient`} shadow-[0_20px_60px_rgba(0,0,0,0.3)] hover:shadow-[0_0_35px_rgba(34,211,238,0.2)] backdrop-blur-3xl p-6 flex items-center justify-center transition-all duration-500 hover:scale-[1.03] group group/team1 relative overflow-hidden animate-[team1Float_8s_ease-in-out_infinite]`}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 to-transparent opacity-0 group-hover/team1:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="relative w-full flex flex-col gap-5">
                {/* TEAM NAME TOP */}
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowEditor("team1");
                  }}
                  className="
                    text-6xl
                    leading-none
                    font-black
                    tracking-wide
                    cursor-pointer
                    text-center
                    border border-cyan-300/20
                    hover:border-cyan-300/80
                    rounded-2xl
                    px-6 py-5
                    hover:shadow-[0_0_30px_rgba(6,182,212,0.35),inset_0_0_15px_rgba(6,182,212,0.15)]
                    bg-white/5
                    transition-all duration-300
                    hover:scale-[1.02]
                    active:scale-[0.98]
                  "
                >
                  {team1Name}
                </div>

                {/* EMPTY SCORE SPACE */}
                <div
                  className="
                    h-[150px]
                    border
                    border-cyan-300/20
                    hover:border-cyan-300/60
                    rounded-2xl
                    bg-black/30
                    backdrop-blur-md
                    transition-all duration-300
                    shadow-[inset_0_0_15px_rgba(0,0,0,0.5)]
                    relative overflow-hidden
                  "
                >
                  <div className="absolute inset-0 tech-grid opacity-60" />
                  <div className="scanner-line" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.05)_0%,transparent_70%)] animate-pulse" />
                </div>

                {/* TEAM NAME EDITOR */}
                {showEditor === "team1" && (
                  <div className="absolute top-0 left-0 z-[9999] w-[420px] rounded-3xl border border-white/10 bg-black/90 backdrop-blur-3xl p-6">
                    <input
                      type="text"
                      value={team1Name}
                      onChange={(e) => setTeam1Name(e.target.value)}
                      className="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-2xl font-bold text-white outline-none"
                    />

                    <button
                      onClick={() => setShowEditor(null)}
                      className="mt-4 w-full rounded-2xl bg-cyan-500/20 py-3 text-xl font-bold"
                    >
                      SAVE
                    </button>
                  </div>
                )}
              </div>
              <ColorPicker target="team1Card" />
            </div>

            {/* CENTER LIVE */}
            <div className="w-1/3 h-[210px] rounded-3xl border border-red-500/30 hover:border-red-500 bg-red-950/10 backdrop-blur-xl px-8 py-5 flex flex-col justify-between shadow-[0_0_25px_rgba(239,68,68,0.1)] hover:shadow-[0_0_40px_rgba(239,68,68,0.25)] transition-all duration-500 hover:scale-[1.02] relative overflow-hidden group group/live animate-[liveFloat_7s_ease-in-out_infinite] [animation-delay:0.8s]">
              <div className="absolute -inset-10 bg-red-500/5 blur-2xl group-hover/live:bg-red-500/10 transition-all duration-500 pointer-events-none" />
              {/* TOP LIVE */}
              <div className="flex justify-center z-10">
                <div className="flex items-center gap-3">
                  <span className="h-3 w-3 rounded-full bg-red-500 animate-ping" />
                  <div
                    className={`rounded-full ${theme.live?.startsWith('#') ? '' : `bg-gradient-to-r ${theme.live}`} px-6 py-2 text-lg font-black shadow-[0_0_20px_rgba(239,68,68,0.4)] animate-[pulseGlow_2s_infinite]`}
                    style={theme.live?.startsWith('#') ? { backgroundImage: `linear-gradient(to right, ${theme.live}, ${theme.live}80)` } : {}}
                  >
                    LIVE
                  </div>
                </div>
              </div>

              {/* EMPTY SPACE FOR OBS SCORE */}
              <div className="flex-1 flex items-center justify-center z-10 relative overflow-hidden rounded-2xl bg-black/20 border border-white/5">
                <div className="absolute inset-0 tech-grid opacity-30" />
                <div className="scanner-line" style={{ animationDelay: "1.5s" }} />
                <div className="w-full h-[80px]" />
              </div>

              {/* BOTTOM BAR */}
              <div className="z-10">
                <div className="relative h-3 w-full overflow-hidden rounded-full bg-white/10">
                  <div className="absolute inset-y-0 left-0 w-[45%] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                  <div className="absolute inset-y-0 w-40 bg-white/40 blur-md animate-[liveBar_2s_linear_infinite]" />
                </div>
              </div>
            </div>

            {/* TEAM 2 */}
            <div
              style={isTeam2Solid ? { backgroundColor: theme.team2Card } : {}}
              className={`w-1/3 h-[270px] rounded-[32px] border border-white/10 hover:border-orange-400/50 ${isTeam2Solid ? '' : `bg-gradient-to-br ${theme.team2Card} bg-animate-gradient`} shadow-[0_20px_60px_rgba(0,0,0,0.3)] hover:shadow-[0_0_35px_rgba(251,146,60,0.2)] backdrop-blur-3xl p-6 flex items-center justify-center transition-all duration-500 hover:scale-[1.03] group group/team2 relative overflow-hidden animate-[team2Float_8s_ease-in-out_infinite] [animation-delay:1.5s]`}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/5 to-transparent opacity-0 group-hover/team2:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="relative w-full flex flex-col gap-5">
                {/* TEAM NAME TOP */}
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowEditor("team2");
                  }}
                  className="
                    text-6xl
                    leading-none
                    font-black
                    tracking-wide
                    cursor-pointer
                    text-center
                    border border-orange-300/20
                    hover:border-orange-300/80
                    rounded-2xl
                    px-6 py-5
                    hover:shadow-[0_0_30px_rgba(249,115,22,0.35),inset_0_0_15px_rgba(249,115,22,0.15)]
                    bg-white/5
                    transition-all duration-300
                    hover:scale-[1.02]
                    active:scale-[0.98]
                  "
                >
                  {team2Name}
                </div>

                {/* EMPTY SCORE SPACE */}
                <div
                  className="
                    h-[150px]
                    border
                    border-orange-300/20
                    hover:border-orange-300/60
                    rounded-2xl
                    bg-black/30
                    backdrop-blur-md
                    transition-all duration-300
                    shadow-[inset_0_0_15px_rgba(0,0,0,0.5)]
                    relative overflow-hidden
                  "
                >
                  <div className="absolute inset-0 tech-grid opacity-60" style={{ animationDirection: "reverse" }} />
                  <div className="scanner-line" style={{ animationDelay: "2s" }} />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.05)_0%,transparent_70%)] animate-pulse" />
                </div>

                {/* TEAM 2 EDITOR */}
                {showEditor === "team2" && (
                  <div className="absolute top-0 right-0 z-[9999] w-[420px] rounded-3xl border border-white/10 bg-black/90 backdrop-blur-3xl p-6">
                    <input
                      type="text"
                      value={team2Name}
                      onChange={(e) => setTeam2Name(e.target.value)}
                      className="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-2xl font-bold text-white outline-none"
                    />

                    <button
                      onClick={() => setShowEditor(null)}
                      className="mt-4 w-full rounded-2xl bg-cyan-500/20 py-3 text-xl font-bold"
                    >
                      SAVE
                    </button>
                  </div>
                )}
              </div>
              <ColorPicker target="team2Card" />
            </div>
          </div>
          <ColorPicker target="header" />
        </GlassCard>

        {/* LAST OVER */}
        <div className="mx-5 mt-4 flex items-center gap-6">
          <div className="text-4xl font-black tracking-wide">OVERS</div>

          <GlassCard
            gradient={theme.lastOver}
            className="flex flex-1 items-center justify-center gap-5 py-4 px-8 min-h-[110px] relative overflow-hidden"
            animateClass="animate-[lastOverFloat_11s_ease-in-out_infinite] [animation-delay:2.2s]"
          >
            <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />
            <div className="scanner-line opacity-40 pointer-events-none" style={{ animationDelay: "2.5s" }} />
            <ColorPicker target="lastOver" />
          </GlassCard>
        </div>

        {/* MAIN GRID */}
        <div className="mx-5 mt-4 grid grid-cols-[1.7fr_0.9fr] gap-4">
          {/* LEFT */}
          <div className="grid grid-cols-2 gap-5 auto-rows-fr">
            {/* STRIKER */}
            <GlassCard
              gradient={theme.striker}
              className="min-h-[310px] p-4 flex flex-col rounded-[30px] border border-white/10 bg-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.18)]"
              animateClass="animate-[strikerFloat_9s_ease-in-out_infinite] [animation-delay:0.4s]"
            >
              <ColorPicker target="striker" />
              <span className="inline-block font-extrabold text-2xl tracking-[0.12em] bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(59,130,246,0.3)] animate-pulse">
                BATSMAN
              </span>
              <div className="mt-auto h-[90px] rounded-xl border border-white/10 hover:border-white/30 bg-black/30 backdrop-blur-md p-4 transition-all duration-300 shadow-[inset_0_0_10px_rgba(0,0,0,0.3)] relative overflow-hidden group/innercard">
                <div className="absolute inset-0 tech-grid opacity-25" />
                <div className="scanner-line opacity-50" style={{ animationDelay: "0.5s" }} />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover/innercard:animate-[shimmer_3s_linear_infinite]" />
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-white/70">

                </p>
              </div>
            </GlassCard>

            {/* NON STRIKER */}
            <GlassCard
              gradient={theme.nonStriker}
              className="min-h-[310px] p-4 flex flex-col rounded-[30px] border border-white/10 bg-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.18)]"
              animateClass="animate-[nonStrikerFloat_9s_ease-in-out_infinite] [animation-delay:2.8s]"
            >
              <span className="inline-block font-extrabold text-2xl tracking-[0.12em] bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(34,211,238,0.3)] animate-pulse">
                BATSMAN
              </span>
              <ColorPicker target="nonStriker" />
              <div className="mt-auto h-[90px] rounded-xl border border-white/10 hover:border-white/30 bg-black/30 backdrop-blur-md p-4 transition-all duration-300 shadow-[inset_0_0_10px_rgba(0,0,0,0.3)] relative overflow-hidden group/innercard">
                <div className="absolute inset-0 tech-grid opacity-25" style={{ animationDirection: "reverse" }} />
                <div className="scanner-line opacity-50" style={{ animationDelay: "1.2s" }} />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover/innercard:animate-[shimmer_3s_linear_infinite]" />
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-white/70">

                </p>
              </div>
            </GlassCard>

            {/* BOWLER */}
            <GlassCard
              gradient={theme.bowler}
              className="min-h-[290px] p-4 flex flex-col rounded-[30px] border border-white/10 bg-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.18)]"
              animateClass="animate-[bowlerFloat_10s_ease-in-out_infinite] [animation-delay:1.2s]"
            >
              <span className="inline-block font-extrabold text-2xl tracking-[0.12em] bg-gradient-to-r from-white via-orange-200 to-red-300 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(249,115,22,0.3)] animate-pulse">
                BOWLER
              </span>
              <ColorPicker target="bowler" />
              <div className="mt-auto h-[90px] rounded-xl border border-white/10 hover:border-white/30 bg-black/30 backdrop-blur-md p-4 transition-all duration-300 shadow-[inset_0_0_10px_rgba(0,0,0,0.3)] relative overflow-hidden group/innercard">
                <div className="absolute inset-0 tech-grid opacity-25" />
                <div className="scanner-line opacity-50" style={{ animationDelay: "1.8s" }} />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover/innercard:animate-[shimmer_3s_linear_infinite]" />
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-white/70">

                </p>
              </div>
            </GlassCard>

            {/* MATCH EVENT */}
            <GlassCard
              gradient={theme.event}
              className="min-h-[290px] p-6 flex flex-col justify-between rounded-[30px] border border-white/10 bg-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.18)] relative overflow-hidden"
              animateClass="animate-[eventFloat_12s_ease-in-out_infinite] [animation-delay:3.5s]"
            >
              <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />
              <div className="scanner-line opacity-40 pointer-events-none" style={{ animationDelay: "1s" }} />
              <span className="inline-block font-extrabold text-2xl tracking-[0.12em] bg-gradient-to-r from-white via-fuchsia-200 to-purple-300 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(217,70,239,0.3)] animate-pulse z-10">
                EVENT
              </span>
              <ColorPicker target="event" />
            </GlassCard>
          </div>


          <GlassCard
            gradient={theme.facecam}
            className="relative min-h-[640px] h-full overflow-hidden flex items-center justify-center rounded-[34px] border border-white/10 bg-white/10 shadow-[0_25px_80px_rgba(0,0,0,0.18)]"
            animateClass="animate-[facecamFloat_15s_ease-in-out_infinite] [animation-delay:1.8s]"
          >
            <ColorPicker target="facecam" />

            <div className="absolute left-1/2 top-1/2 h-[580px] w-[580px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-cyan-500/20 shadow-[0_0_30px_rgba(6,182,212,0.1)] radar" />

            <div className="absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dotted border-fuchsia-400/30 spin-ccw" />

            <div className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/20 radar" />

            <div className="absolute left-6 top-6 z-20 flex items-center gap-3">
              <div className="h-4 w-4 rounded-full bg-red-500 animate-ping" />

              <div
                className={`rounded-full ${theme.live?.startsWith('#') ? '' : `bg-gradient-to-r ${theme.live}`} px-6 py-2 text-xl font-black shadow-[0_0_20px_rgba(239,68,68,0.4)] animate-[pulseGlow_2s_infinite]`}
                style={theme.live?.startsWith('#') ? { backgroundImage: `linear-gradient(to right, ${theme.live}, ${theme.live}80)` } : {}}
              >
                LIVE
              </div>
              <p className="mt-4 text-xl text-white/70 font-semibold tracking-wider">LIVE COMMENTARY FEED</p>
            </div>

            {/* SOUNDWAVE RIPPLES */}
            <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] rounded-full border border-cyan-400/30 ripple-ring pointer-events-none" style={{ animationDelay: "0s" }} />
            <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] rounded-full border border-cyan-400/20 ripple-ring pointer-events-none" style={{ animationDelay: "1.1s" }} />
            <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] rounded-full border border-cyan-400/10 ripple-ring pointer-events-none" style={{ animationDelay: "2.2s" }} />

            <div className="absolute left-1/2 top-1/2 z-10 flex h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/45 backdrop-blur-2xl transition-all duration-500 hover:scale-105 group/mic shadow-[0_0_50px_rgba(6,182,212,0.15)] hover:shadow-[0_0_70px_rgba(6,182,212,0.35)]">
              <div className="absolute inset-0 rounded-full border border-cyan-300/20 group-hover/mic:border-cyan-300/60 animate-pulse transition-colors duration-500" />

              <div className="text-center flex flex-col items-center">
                <div className="mx-auto mb-2 flex h-24 w-24 items-center justify-center rounded-full bg-white/10 text-5xl transition-all duration-300 group-hover/mic:scale-110 group-hover/mic:bg-white/20 animate-bounce">
                  🎙️
                </div>
                
                {/* ACTIVE AUDIO VISUALIZER */}
                <div className="flex items-end justify-center gap-1 h-8 mt-2 overflow-hidden px-4">
                  {[...Array(11)].map((_, i) => {
                    const heights = ["h-3", "h-5", "h-7", "h-4", "h-6", "h-8", "h-5", "h-7", "h-3", "h-6", "h-4"];
                    const colors = [
                      "bg-cyan-400",
                      "bg-cyan-300",
                      "bg-sky-400",
                      "bg-sky-300",
                      "bg-indigo-400",
                      "bg-indigo-300",
                      "bg-fuchsia-400",
                      "bg-purple-400",
                      "bg-cyan-400",
                      "bg-sky-400",
                      "bg-cyan-300"
                    ];
                    const duration = 0.5 + ((i * 7) % 7) * 0.1;
                    const delay = ((i * 3) % 5) * 0.15;
                    return (
                      <div
                        key={i}
                        className={`w-1 rounded-full visualizer-bar ${heights[i % heights.length]} ${colors[i % colors.length]} shadow-[0_0_8px_rgba(6,182,212,0.6)]`}
                        style={{
                          animationDuration: `${duration}s`,
                          animationDelay: `${delay}s`,
                        }}
                      />
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="absolute bottom-16 left-0 z-20 w-full text-center">
              <div className="mb-5 flex justify-center gap-2">
                <div className="h-3 w-3 rounded-full bg-cyan-300 animate-bounce" />

                <div className="h-3 w-3 rounded-full bg-white animate-bounce delay-100" />

                <div className="h-3 w-3 rounded-full bg-fuchsia-300 animate-bounce delay-200" />
              </div>

              <h1 className="bg-gradient-to-r from-white via-cyan-300 to-white bg-clip-text text-6xl font-black text-transparent drop-shadow-[0_2px_10px_rgba(6,182,212,0.3)] animate-pulse">
                VIMAL RAJJ COMMENTARY
              </h1>

              <div className="mt-0 text-2xl tracking-[4px] text-white/70">
                CRICKET ANALYSIS • LIVE REACTIONS
              </div>
            </div>
          </GlassCard>
        </div>
      </div>

      {/* Root level theme modal to prevent clipping */}
      {renderThemeModal()}
    </>
  );
}
