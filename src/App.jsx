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

const GlassCard = ({ children, className = "", gradient, onClick }) => {
  const isSolid = gradient && (gradient.startsWith('#') || /^[a-zA-Z]+$/.test(gradient));
  
  return (
    <div
      style={isSolid ? { backgroundColor: gradient } : {}}
      className={`
        
     
  group relative overflow-hidden rounded-[28px]

         border border-white/15
         bg-white/5
         ${isSolid ? '' : `bg-gradient-to-br ${gradient}`}
         backdrop-blur-3xl
         shadow-[0_25px_70px_rgba(0,0,0,0.18)]
         transition-all duration-500
         transform-gpu
         hover:-translate-y-2
         hover:shadow-[0_35px_100px_rgba(0,0,0,0.25)]
         animate-[cardFloat_14s_ease-in-out_infinite]
        
         before:absolute
         before:inset-0
         before:bg-[linear-gradient(130deg,rgba(255,255,255,0.12),transparent_40%)]
         before:pointer-events-none

         ${className}
      `}
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
          
          ${
            pickerTarget === target
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
                  box-shadow:0 0 20px rgba(0,255,255,0.18);
               }
               50%{
                  box-shadow:0 0 50px rgba(0,255,255,0.35);
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
            
            /* Custom React Colorful Styles to fit the app */
            .custom-picker .react-colorful {
              width: 100%;
              height: 200px;
            }
            .custom-picker .react-colorful__pointer {
              width: 24px;
              height: 24px;
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
        >
          <div className="absolute inset-0 overflow-hidden">
            <div className="scanline absolute inset-x-0 h-28 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
          </div>

          <div className="relative flex h-[210px] gap-6 items-center">
            {/* TEAM 1 */}
            <div className="w-1/3 h-[270px] rounded-[32px] border border-white/15 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.16)] backdrop-blur-3xl p-6 flex items-center justify-center">
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
        border border-cyan-300/40
        rounded-2xl
        px-6 py-5
        hover:shadow-[0_0_20px_rgba(0,255,255,0.35)]
        transition-all
      "
                >
                  {team1Name}
                </div>

                {/* EMPTY SCORE SPACE */}
                <div
                  className="
        h-[150px]
        border
        border-cyan-300/40
        rounded-2xl
        bg-black/20
        backdrop-blur-md
      "
                ></div>

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
            </div>

            {/* CENTER LIVE */}
            <div className="w-1/3 h-[210px] rounded-3xl border border-red-400/30 bg-black/15 backdrop-blur-xl px-8 py-5 flex flex-col justify-between">
              {/* TOP LIVE */}
              <div className="flex justify-center">
                <div className="flex items-center gap-3">
                  <span className="h-3 w-3 rounded-full bg-red-500 animate-ping" />
                  <div
                    className={`rounded-full ${theme.live?.startsWith('#') ? '' : `bg-gradient-to-r ${theme.live}`} px-6 py-2 text-lg font-black pulseGlow`}
                    style={theme.live?.startsWith('#') ? { backgroundImage: `linear-gradient(to right, ${theme.live}, ${theme.live}80)` } : {}}
                  >
                    LIVE
                  </div>
                </div>
              </div>

              {/* EMPTY SPACE FOR OBS SCORE */}
              <div className="flex-1 flex items-center justify-center">
                <div className="w-full h-[80px]" />
              </div>

              {/* BOTTOM BAR */}
              <div>
                <div className="relative h-3 w-full overflow-hidden rounded-full bg-white/10">
                  <div className="absolute inset-y-0 left-0 w-[45%] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                  <div className="absolute inset-y-0 w-40 bg-white/40 blur-md animate-[liveBar_2s_linear_infinite]" />
                </div>
              </div>
            </div>

            {/* TEAM 2 */}
            <div className="w-1/3 h-[270px] rounded-[32px] border border-white/15 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.16)] backdrop-blur-3xl p-6 flex items-center justify-center">
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
        border border-orange-300/40
        rounded-2xl
        px-6 py-5
        hover:shadow-[0_0_20px_rgba(255,165,0,0.35)]
        transition-all
      "
                >
                  {team2Name}
                </div>

                {/* EMPTY SCORE SPACE */}
                <div
                  className="
        h-[150px]
        border
        border-orange-300/40
        rounded-2xl
        bg-black/20
        backdrop-blur-md
      "
                ></div>

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
            </div>
          </div>
          <ColorPicker target="header" />
        </GlassCard>

        {/* LAST OVER */}
        <div className="mx-5 mt-4 flex items-center gap-6">
          <div className="text-4xl font-black tracking-wide">OVERS</div>

          <GlassCard
            gradient={theme.lastOver}
            className="flex flex-1 items-center justify-center gap-5 py-4 px-8 min-h-[110px]"
          >
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
            >
              <ColorPicker target="striker" />
              <span className="font-bold text-2xl tracking-[0.08em] blink">
                BATSMAN
              </span>
              <div className="mt-auto h-[90px] rounded-xl border border-white/10 bg-black/20 backdrop-blur-md p-4">
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-white/70">
                   
                </p>
              </div>
            </GlassCard>

            {/* NON STRIKER */}
            <GlassCard
              gradient={theme.nonStriker}
              className="min-h-[310px] p-4 flex flex-col rounded-[30px] border border-white/10 bg-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.18)]"
            >
              <span className="font-bold text-2xl tracking-[0.08em] blink">
                BATSMAN
              </span>
              <ColorPicker target="nonStriker" />
              <div className="mt-auto h-[90px] rounded-xl border border-white/10 bg-black/20 backdrop-blur-md p-4">
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-white/70">
                   
                </p>
              </div>
            </GlassCard>

            {/* BOWLER */}
            <GlassCard
              gradient={theme.bowler}
              className="min-h-[290px] p-4 flex flex-col rounded-[30px] border border-white/10 bg-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.18)]"
            >
              <span className="font-bold text-2xl tracking-[0.08em] blink">
                BOWLER
              </span>
              <ColorPicker target="bowler" />
              <div className="mt-auto h-[90px] rounded-xl border border-white/10 bg-black/20 backdrop-blur-md p-4">
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-white/70">
                   
                </p>
              </div>
            </GlassCard>

            {/* MATCH EVENT */}
            <GlassCard
              gradient={theme.event}
              className="min-h-[290px] p-6 flex flex-col justify-between rounded-[30px] border border-white/10 bg-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.18)]"
            >
              <ColorPicker target="event" />
            </GlassCard>
          </div>

          {/* FACECAM */}
          <GlassCard
            gradient={theme.facecam}
            className="relative min-h-[640px] h-full overflow-hidden flex items-center justify-center rounded-[34px] border border-white/10 bg-white/10 shadow-[0_25px_80px_rgba(0,0,0,0.18)]"
          >
            <ColorPicker target="facecam" />

            <div className="absolute left-1/2 top-1/2 h-[580px] w-[580px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/20 radar" />

            <div className="absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-fuchsia-300/20 animate-spin" />

            <div className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 radar" />

            <div className="absolute left-6 top-6 z-20 flex items-center gap-3">
              <div className="h-4 w-4 rounded-full bg-red-500 animate-ping" />

              <div
                className={`rounded-full ${theme.live?.startsWith('#') ? '' : `bg-gradient-to-r ${theme.live}`} px-6 py-2 text-xl font-black`}
                style={theme.live?.startsWith('#') ? { backgroundImage: `linear-gradient(to right, ${theme.live}, ${theme.live}80)` } : {}}
              >
                LIVE
              </div>
              <p className="mt-4 text-xl text-white/70">LIVE COMMENTARY FEED</p>
            </div>

            <div className="absolute left-1/2 top-1/2 z-10 flex h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/30 backdrop-blur-2xl">
              <div className="absolute inset-0 rounded-full border border-cyan-300/20 animate-pulse" />

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-white/10 text-5xl">
                  🎙️
                </div>
              </div>
            </div>

            <div className="absolute bottom-16 left-0 z-20 w-full text-center">
              <div className="mb-5 flex justify-center gap-2">
                <div className="h-3 w-3 rounded-full bg-cyan-300 animate-bounce" />

                <div className="h-3 w-3 rounded-full bg-white animate-bounce delay-100" />

                <div className="h-3 w-3 rounded-full bg-fuchsia-300 animate-bounce delay-200" />
              </div>

              <h1 className="bg-gradient-to-r from-white via-cyan-300 to-white bg-clip-text text-6xl font-black text-transparent">
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
