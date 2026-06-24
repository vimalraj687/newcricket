import React, { useEffect, useState, useRef } from "react";
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
      {/* High-end metallic laser sweep moving from left to right */}
      <div className="laser-sweep-top" style={{ animationDelay: `${Math.random() * 4}s` }} />

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
  const [team1Score, setTeam1Score] = useState("");
  const [team2Score, setTeam2Score] = useState("Bowling");
  const [liveScore, setLiveScore] = useState("");
  const [showEditor, setShowEditor] = useState(null);
  console.log(liveTick);

  // --- CAMERA & OVERLAY CONSOLE STATES ---
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [cameraStream, setCameraStream] = useState(null);
  const [cameraDevices, setCameraDevices] = useState([]);
  const [selectedCameraId, setSelectedCameraId] = useState("");
  const [cameraLayoutMode, setCameraLayoutMode] = useState("classic"); // 'classic' | 'pip' | 'full'
  const [isFlipped, setIsFlipped] = useState(true);
  const [isStreamMode, setIsStreamMode] = useState(false); // Toggle edit mode vs live stream mode
  const [shutterActive, setShutterActive] = useState(false);
  const [isConsoleOpen, setIsConsoleOpen] = useState(false); // Controls drawer panel

  const videoRef = useRef(null);

  // Keyboard shortcut listener to toggle overlay mode
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key.toLowerCase() === "h" && e.target.tagName !== "INPUT" && e.target.tagName !== "TEXTAREA") {
        setIsStreamMode((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Fetch camera devices list
  const getCameraDevices = async () => {
    try {
      const devices = await navigator.mediaDevices.enumerateDevices();
      const videoDevices = devices.filter((d) => d.kind === "videoinput");
      setCameraDevices(videoDevices);
      if (videoDevices.length > 0 && !selectedCameraId) {
        setSelectedCameraId(videoDevices[0].deviceId);
      }
    } catch (err) {
      console.error("Error listing camera devices:", err);
    }
  };

  // Start the video stream
  const startCamera = async (deviceId) => {
    // Clean up current stream first
    if (cameraStream) {
      cameraStream.getTracks().forEach((track) => track.stop());
    }

    setShutterActive(true);
    setTimeout(() => setShutterActive(false), 800);

    const constraints = {
      video: deviceId ? { deviceId: { exact: deviceId } } : true,
      audio: false, // video only for stream overlays
    };

    try {
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      setCameraStream(stream);
      setIsCameraOn(true);
      
      // Re-list devices to get labels after permission is granted
      await getCameraDevices();
    } catch (err) {
      console.error("Error accessing camera:", err);
      alert("Could not access camera. Please check camera permissions in your browser.");
      setIsCameraOn(false);
    }
  };

  // Stop the video stream
  const stopCamera = () => {
    if (cameraStream) {
      cameraStream.getTracks().forEach((track) => track.stop());
      setCameraStream(null);
    }
    setIsCameraOn(false);
  };

  // Automatically request device labels on permission granted or device state changes
  useEffect(() => {
    if (isCameraOn) {
      getCameraDevices();
    }
  }, [isCameraOn]);

  // Bind media stream to video element when stream or layout changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.srcObject = cameraStream;
    }
  }, [cameraStream, cameraLayoutMode, isCameraOn]);

  // Clean up camera stream on unmount
  useEffect(() => {
    return () => {
      if (cameraStream) {
        cameraStream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [cameraStream]);

  // --- END OF CAMERA STATES ---

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
    if (isStreamMode) return null;
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

  const renderUpdateModal = () => {
    if (!showEditor) return null;

    let title = "";
    let inputs = null;

    if (showEditor === "team1") {
      title = "UPDATE TEAM 1";
      inputs = (
        <>
          <div className="mb-4">
            <label className="text-xs font-bold text-white/50 mb-2 block tracking-widest">TEAM NAME</label>
            <input
              type="text"
              value={team1Name}
              onChange={(e) => setTeam1Name(e.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-xl font-bold text-white outline-none focus:border-cyan-500/50"
            />
          </div>
          <div className="mb-6">
            <label className="text-xs font-bold text-white/50 mb-2 block tracking-widest">TEAM SCORE</label>
            <input
              type="text"
              value={team1Score}
              onChange={(e) => setTeam1Score(e.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-xl font-bold text-white outline-none focus:border-cyan-500/50"
            />
          </div>
        </>
      );
    } else if (showEditor === "team2") {
      title = "UPDATE TEAM 2";
      inputs = (
        <>
          <div className="mb-4">
            <label className="text-xs font-bold text-white/50 mb-2 block tracking-widest">TEAM NAME</label>
            <input
              type="text"
              value={team2Name}
              onChange={(e) => setTeam2Name(e.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-xl font-bold text-white outline-none focus:border-orange-500/50"
            />
          </div>
          <div className="mb-6">
            <label className="text-xs font-bold text-white/50 mb-2 block tracking-widest">TEAM SCORE</label>
            <input
              type="text"
              value={team2Score}
              onChange={(e) => setTeam2Score(e.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-xl font-bold text-white outline-none focus:border-orange-500/50"
            />
          </div>
        </>
      );
    } else if (showEditor === "liveScore") {
      title = "UPDATE LIVE INFO";
      inputs = (
        <div className="mb-6">
          <label className="text-xs font-bold text-white/50 mb-2 block tracking-widest">LIVE SCORE / MATCH DETAILS</label>
          <input
            type="text"
            value={liveScore}
            onChange={(e) => setLiveScore(e.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-xl font-bold text-white outline-none focus:border-red-500/50"
          />
        </div>
      );
    }

    return (
      <div
        className="absolute inset-0 z-[9999999] bg-black/70 backdrop-blur-sm flex items-center justify-center"
        onClick={() => setShowEditor(null)}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="
            w-[420px]
            p-6
            rounded-3xl
            border border-white/20
            bg-black/95
            backdrop-blur-3xl
            shadow-[0_0_60px_rgba(255,255,255,0.15)]
            flex flex-col
          "
        >
          <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
            <h3 className="text-lg font-black text-white tracking-widest">{title}</h3>
            <button
              onClick={() => setShowEditor(null)}
              className="px-4 py-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors font-bold text-sm"
            >
              CLOSE
            </button>
          </div>

          <div className="flex-1">
            {inputs}
            <button
              onClick={() => setShowEditor(null)}
              className="w-full rounded-2xl bg-cyan-500/20 hover:bg-cyan-500/30 text-white py-4 text-lg font-bold transition-all"
            >
              SAVE CHANGES
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderWebcamFeed = (modeClass) => {
    if (!isCameraOn) {
      // Offline fallback: cyber technical grid with offline info
      return (
        <div className={`camera-overlay-container ${modeClass} grid-cyber flex flex-col items-center justify-center gap-3 border border-dashed border-cyan-500/30 bg-black/60`}>
          <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
          <span className="text-[10px] font-black tracking-[0.2em] text-white/50">CAM OFFLINE</span>
          {!isStreamMode && (
            <button
              onClick={() => startCamera(selectedCameraId)}
              className="px-4 py-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/40 text-[9px] font-black tracking-widest text-cyan-300 border border-cyan-500/30 transition-all cursor-pointer"
            >
              START
            </button>
          )}
        </div>
      );
    }

    return (
      <div className={`camera-overlay-container ${modeClass}`}>
        {/* Shutter Animation Overlay */}
        {shutterActive && (
          <div className="absolute inset-0 bg-black z-30 animate-[shutterClose_0.8s_ease-in-out_forwards]" />
        )}
        
        {/* Futuristic Scanline */}
        <div className="camera-scanner" />
        
        {/* Live HUD details overlay in corner of video */}
        <div className="absolute top-3 left-4 z-10 flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-[8px] font-black tracking-wider text-cyan-300">CAM FEED 01</span>
        </div>

        {/* Streaming Video */}
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className={`w-full h-full object-cover transition-transform duration-500 ${isFlipped ? 'scale-x-[-1]' : ''} ${shutterActive ? 'shutter-active' : ''}`}
        />
      </div>
    );
  };

  const renderControlConsole = () => {
    // Hidden in Stream Mode (so it's clean for capture)
    if (isStreamMode) {
      // Show a tiny indicator to exit stream mode on mouse hover in the top-right corner
      return (
        <div 
          onClick={() => setIsStreamMode(false)}
          className="fixed top-0 right-0 w-8 h-8 opacity-0 hover:opacity-40 transition-opacity bg-cyan-500/20 border-b border-l border-cyan-400/30 rounded-bl-xl flex items-center justify-center cursor-pointer z-[999999]"
          title="Exit Stream Mode (or press 'H')"
        >
          👁️
        </div>
      );
    }

    return (
      <>
        {/* Floating Toggle Button */}
        <button
          onClick={() => setIsConsoleOpen(!isConsoleOpen)}
          className={`console-toggle-btn ${isConsoleOpen ? 'panel-open' : ''}`}
          style={{ 
            color: '#fff',
            borderColor: isConsoleOpen ? '#06b6d4' : 'rgba(255,255,255,0.15)'
          }}
          title="Toggle Control Console"
        >
          <span className="text-2xl">{isConsoleOpen ? "✕" : "⚙️"}</span>
        </button>

        {/* Drawer Console */}
        <div className={`console-panel ${isConsoleOpen ? 'open' : ''}`}>
          {/* Header */}
          <div className="p-6 border-b border-white/10 flex items-center justify-between bg-black/40">
            <div>
              <h2 className="text-xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500">
                OBS CONSOLE
              </h2>
              <p className="text-[10px] font-bold text-white/40 tracking-wider">LIVE BROADCAST CONTROLLER</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="rec-dot"></span>
              <span className="rec-text">LIVE</span>
            </div>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-8 scrollbar-thin">
            
            {/* Stream Mode Toggle Widget */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 space-y-3">
              <h3 className="text-xs font-bold text-white/50 tracking-widest uppercase">STREAM CAPTURE</h3>
              <button
                onClick={() => {
                  setIsStreamMode(true);
                  setIsConsoleOpen(false);
                }}
                className="w-full bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-500 hover:to-rose-600 text-white py-3.5 px-4 rounded-xl font-black text-sm tracking-[0.15em] transition-all shadow-[0_0_20px_rgba(239,68,68,0.25)] hover:shadow-[0_0_25px_rgba(239,68,68,0.4)] flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>🔴</span> ACTIVATE STREAM MODE
              </button>
              <p className="text-[10px] text-white/40 text-center leading-relaxed">
                Hides all editor gears, color pickers, and console toggles. <br/>
                Press <span className="text-cyan-300 font-bold bg-white/10 px-1.5 py-0.5 rounded">H</span> or hover top-right to exit.
              </p>
            </div>

            {/* Webcam Configuration Widget */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold text-white/60 tracking-widest uppercase">📹 CAMERA SETTINGS</h3>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${isCameraOn ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-white/5 text-white/40'}`}>
                  {isCameraOn ? "ONLINE" : "OFFLINE"}
                </span>
              </div>

              {/* Cam Switch Toggle */}
              <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-xl p-4">
                <span className="text-sm font-bold text-white/80">Enable Webcam Feed</span>
                <button
                  onClick={() => isCameraOn ? stopCamera() : startCamera(selectedCameraId)}
                  className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors duration-300 cursor-pointer ${isCameraOn ? 'bg-cyan-500' : 'bg-white/10'}`}
                >
                  <span className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform duration-300 ${isCameraOn ? 'translate-x-6' : 'translate-x-1'}`} />
                </button>
              </div>

              {/* Camera Source Selector */}
              {isCameraOn && (
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-white/40 tracking-wider block">CAMERA SOURCE</label>
                  <select
                    value={selectedCameraId}
                    onChange={(e) => {
                      setSelectedCameraId(e.target.value);
                      startCamera(e.target.value);
                    }}
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-sm font-semibold text-white outline-none focus:border-cyan-400"
                  >
                    {cameraDevices.length === 0 ? (
                      <option value="">Default Source</option>
                    ) : (
                      cameraDevices.map((device) => (
                        <option key={device.deviceId} value={device.deviceId}>
                          {device.label || `Camera ${device.deviceId.slice(0, 5)}`}
                        </option>
                      ))
                    )}
                  </select>
                </div>
              )}

              {/* Layout Mode Selector */}
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-white/40 tracking-wider block">CAM LAYOUT MODE</label>
                <div className="grid grid-cols-3 gap-2 bg-black/40 border border-white/10 rounded-xl p-1">
                  {[
                    { id: 'classic', label: 'Classic' },
                    { id: 'pip', label: 'Circle PiP' },
                    { id: 'full', label: 'Full Panel' }
                  ].map((mode) => (
                    <button
                      key={mode.id}
                      onClick={() => setCameraLayoutMode(mode.id)}
                      className={`py-2 px-1 text-xs font-bold rounded-lg transition-all cursor-pointer ${cameraLayoutMode === mode.id ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' : 'text-white/60 hover:text-white'}`}
                    >
                      {mode.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mirror Toggle */}
              {isCameraOn && (
                <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-xl p-4">
                  <span className="text-sm font-bold text-white/80">Mirror Feed (Flip Horizontal)</span>
                  <button
                    onClick={() => setIsFlipped(!isFlipped)}
                    className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors duration-300 cursor-pointer ${isFlipped ? 'bg-cyan-500' : 'bg-white/10'}`}
                  >
                    <span className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform duration-300 ${isFlipped ? 'translate-x-6' : 'translate-x-1'}`} />
                  </button>
                </div>
              )}
            </div>

            {/* Quick Scoreboard Editor */}
            <div className="space-y-4 pt-4 border-t border-white/10">
              <h3 className="text-xs font-bold text-white/60 tracking-widest uppercase">🏆 QUICK MATCH STATS</h3>
              
              {/* Team 1 Score */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-cyan-400 tracking-wider block uppercase">{team1Name} SCORE</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={team1Score}
                    onChange={(e) => setTeam1Score(e.target.value)}
                    placeholder="e.g. 182/4 (18.2)"
                    className="flex-1 bg-black/40 border border-cyan-500/20 rounded-xl px-4 py-2.5 text-sm font-bold text-white outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              {/* Team 2 Score */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-orange-400 tracking-wider block uppercase">{team2Name} SCORE</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={team2Score}
                    onChange={(e) => setTeam2Score(e.target.value)}
                    placeholder="e.g. Bowling"
                    className="flex-1 bg-black/40 border border-orange-500/20 rounded-xl px-4 py-2.5 text-sm font-bold text-white outline-none focus:border-orange-400"
                  />
                </div>
              </div>

              {/* Live Info */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-red-400 tracking-wider block uppercase">Live Match Info</label>
                <input
                  type="text"
                  value={liveScore}
                  onChange={(e) => setLiveScore(e.target.value)}
                  placeholder="e.g. INDIA NEED 18 RUNS IN 10 BALLS"
                  className="w-full bg-black/40 border border-red-500/20 rounded-xl px-4 py-2.5 text-sm font-bold text-white outline-none focus:border-red-400"
                />
              </div>
            </div>
            
          </div>

          {/* Footer Info */}
          <div className="p-4 border-t border-white/10 bg-black/50 text-center text-[9px] text-white/30 tracking-wider font-semibold">
            CRICKET BROADCAST ENGINE v2.0
          </div>
        </div>
      </>
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
            
            /* Staggered Card Entrance Animations (Left-to-Right / Directional) */
            @keyframes slideInLeft {
               0% { transform: translateX(-150px) scale(0.95); opacity: 0; filter: blur(6px); }
               100% { transform: translateX(0) scale(1); opacity: 1; filter: blur(0); }
            }

            @keyframes slideInRight {
               0% { transform: translateX(150px) scale(0.95); opacity: 0; filter: blur(6px); }
               100% { transform: translateX(0) scale(1); opacity: 1; filter: blur(0); }
            }

            @keyframes slideInUp {
               0% { transform: translateY(100px) scale(0.95); opacity: 0; filter: blur(6px); }
               100% { transform: translateY(0) scale(1); opacity: 1; filter: blur(0); }
            }

            @keyframes slideInDown {
               0% { transform: translateY(-100px) scale(0.98); opacity: 0; filter: blur(4px); }
               100% { transform: translateY(0) scale(1); opacity: 1; filter: blur(0); }
            }

            .card-entrance-top {
               animation: slideInDown 1.2s cubic-bezier(0.16, 1, 0.3, 1) both;
            }

            .card-entrance-left {
               animation: slideInLeft 1.2s cubic-bezier(0.16, 1, 0.3, 1) both;
            }

            .card-entrance-right {
               animation: slideInRight 1.2s cubic-bezier(0.16, 1, 0.3, 1) both;
            }

            .card-entrance-center {
               animation: slideInUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) both;
            }

            /* Horizontal Particle Drift Animation (Left-to-Right) */
            @keyframes particleDrift {
               0% { transform: translate(0, 0) scale(0.6); opacity: 0; }
               10% { opacity: 0.7; }
               90% { opacity: 0.7; }
               100% { transform: translate(350px, -60px) scale(1.3); opacity: 0; }
            }

            .particle-drift {
               animation: particleDrift var(--drift-duration, 15s) linear infinite;
            }

            /* Metallic Text Shimmer (Left-to-Right) */
            @keyframes textShimmer {
               0% { background-position: -200% center; }
               100% { background-position: 200% center; }
            }

            .text-shimmer-cyan {
               background: linear-gradient(
                  90deg,
                  #ffffff 0%,
                  #b5f5fe 20%,
                  #06b6d4 40%,
                  #3b82f6 60%,
                  #b5f5fe 80%,
                  #ffffff 100%
               );
               background-size: 200% auto;
               -webkit-background-clip: text;
               background-clip: text;
               color: transparent;
               animation: textShimmer 4s linear infinite;
            }

            .text-shimmer-gold {
               background: linear-gradient(
                  90deg,
                  #ffffff 0%,
                  #fef08a 20%,
                  #eab308 40%,
                  #f97316 60%,
                  #fef08a 80%,
                  #ffffff 100%
               );
               background-size: 200% auto;
               -webkit-background-clip: text;
               background-clip: text;
               color: transparent;
               animation: textShimmer 4s linear infinite;
            }

            .text-shimmer-white {
               background: linear-gradient(
                  90deg,
                  #e2e8f0 0%,
                  #ffffff 25%,
                  #94a3b8 50%,
                  #ffffff 75%,
                  #e2e8f0 100%
               );
               background-size: 200% auto;
               -webkit-background-clip: text;
               background-clip: text;
               color: transparent;
               animation: textShimmer 5s linear infinite;
            }

            /* Laser Edge Glow Sweep (Left-to-Right) */
            @keyframes borderGlowSweep {
               0% { left: -100%; }
               100% { left: 200%; }
            }

            .laser-sweep-top {
               position: absolute;
               top: 0;
               left: -100%;
               height: 2px;
               width: 40%;
               background: linear-gradient(90deg, transparent, rgba(34, 211, 238, 0.8), rgba(236, 72, 153, 0.8), transparent);
               filter: blur(0.5px);
               pointer-events: none;
               animation: borderGlowSweep 6s cubic-bezier(0.4, 0, 0.2, 1) infinite;
            }

            @keyframes hudScan {
               0%, 100% { top: 10%; opacity: 0.2; }
               50% { top: 90%; opacity: 0.8; }
            }

            @keyframes eqBounce {
               0%, 100% { transform: scaleY(0.25); }
               50% { transform: scaleY(1); }
            }

            .eq-bar {
               transform-origin: bottom;
               animation: eqBounce 1s ease-in-out infinite;
            }

            /* Custom React Colorful Styles */
            .custom-picker .react-colorful {
               width: 100%;
               height: 200px;
            }
            .custom-picker .react-colorful__pointer {
               width: 24px;
               height: 24px;
            }

            /* Camera and Stream Console CSS */
            @keyframes shutterClose {
               0% { transform: scale(1.2); filter: brightness(1) blur(0px); }
               50% { transform: scale(0.85); filter: brightness(0) blur(12px); }
               100% { transform: scale(1); filter: brightness(1) blur(0px); }
            }
            .shutter-active {
               animation: shutterClose 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
            }

            @keyframes scannerSweep {
               0% { top: 0%; opacity: 0.1; }
               20% { opacity: 0.9; }
               80% { opacity: 0.9; }
               100% { top: 100%; opacity: 0.1; }
            }
            .camera-scanner {
               position: absolute;
               left: 0;
               width: 100%;
               height: 5px;
               background: linear-gradient(90deg, transparent, #06b6d4, #d946ef, transparent);
               box-shadow: 0 0 12px rgba(6, 182, 212, 0.8), 0 0 24px rgba(217, 70, 239, 0.8);
               pointer-events: none;
               z-index: 20;
               animation: scannerSweep 4s linear infinite;
            }

            @keyframes recPulse {
               0%, 100% { transform: scale(1); opacity: 0.5; }
               50% { transform: scale(1.3); opacity: 1; }
            }
            .rec-dot {
               display: inline-block;
               width: 10px;
               height: 10px;
               background-color: #ef4444;
               border-radius: 50%;
               box-shadow: 0 0 10px #ef4444;
               animation: recPulse 1.2s ease-in-out infinite;
            }

            .console-panel {
               position: fixed;
               top: 0;
               right: 0;
               height: 100%;
               width: 380px;
               background: rgba(9, 12, 28, 0.92);
               backdrop-filter: blur(28px);
               border-left: 1px solid rgba(255, 255, 255, 0.12);
               box-shadow: -15px 0 50px rgba(0, 0, 0, 0.6);
               z-index: 999999;
               transform: translateX(100%);
               transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
               display: flex;
               flex-direction: column;
            }
            .console-panel.open {
               transform: translateX(0);
            }
            
            .console-toggle-btn {
               position: fixed;
               top: 20px;
               right: 20px;
               z-index: 999998;
               background: rgba(15, 23, 42, 0.6);
               border: 1px solid rgba(255, 255, 255, 0.12);
               backdrop-filter: blur(12px);
               border-radius: 50%;
               width: 54px;
               height: 54px;
               display: flex;
               align-items: center;
               justify-content: center;
               cursor: pointer;
               box-shadow: 0 10px 30px rgba(0,0,0,0.3);
               transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
            }
            .console-toggle-btn:hover {
               background: rgba(15, 23, 42, 0.95);
               border-color: rgba(6, 182, 212, 0.5);
               box-shadow: 0 0 20px rgba(6, 182, 212, 0.4);
               transform: scale(1.08) rotate(30deg);
            }
            .console-toggle-btn.panel-open {
               transform: rotate(90deg);
            }

            .camera-overlay-container {
               position: relative;
               background: #080a14;
               overflow: hidden;
               border: 1.5px solid rgba(255, 255, 255, 0.1);
               box-shadow: inset 0 0 30px rgba(0,0,0,0.9);
               transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
            }
            .camera-overlay-container.pip-mode {
               width: 220px;
               height: 220px;
               border-radius: 50%;
               border-color: rgba(6, 182, 212, 0.45);
               box-shadow: 0 0 30px rgba(6, 182, 212, 0.3);
            }
            .camera-overlay-container.full-mode {
               position: absolute;
               inset: 0;
               width: 100%;
               height: 100%;
               border-radius: 34px;
               border: none;
            }

            /* Technical background grids for offline view */
            .grid-cyber {
               background-size: 20px 20px;
               background-image: 
                  linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px);
            }
         `}</style>

      <div
        style={isBgSolid ? { backgroundColor: theme.background } : {}}
        className={`relative page-glow w-[1920px] h-[1080px] overflow-hidden ${isBgSolid ? '' : `bg-gradient-to-br ${theme.background}`} text-white`}
      >
        {/* PARTICLES WITH STABLE DETERMINISTIC VALUES TO PREVENT FLICKER */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(30)].map((_, i) => {
            const left = `${(i * 37) % 100}%`;
            const top = `${(i * 23) % 100}%`;
            const duration = `${12 + (i % 6) * 4}s`;
            const delay = `${-(i * 0.8)}s`;
            return (
              <div
                key={i}
                className="absolute h-2 w-2 rounded-full bg-cyan-400 blur-sm particle-drift"
                style={{
                  left,
                  top,
                  "--drift-duration": duration,
                  animationDelay: delay,
                }}
              />
            );
          })}
        </div>

        {/* TOP GLOW */}
        <div className="absolute inset-x-0 top-0 h-[500px] bg-cyan-500/10 blur-[180px]" />

        {/* HEADER */}
        <div className="card-entrance-top mx-5 mt-4">
          <GlassCard
            gradient={theme.header}
            className="min-h-[240px] px-10 py-8 overflow-visible"
          >
            <div className="absolute inset-0 overflow-hidden">
              <div className="scanline absolute inset-x-0 h-28 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
            </div>

            <div className="relative flex h-[210px] gap-6 items-center">
              {/* TEAM 1 */}
              <div
                className="card-entrance-left w-1/3 h-[270px] rounded-[32px] border border-white/15 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.16)] backdrop-blur-3xl p-6 flex items-center justify-center"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="relative w-full flex flex-col gap-5">
                  {/* TEAM NAME TOP */}
                  <div
                    onClick={(e) => {
                      if (isStreamMode) return;
                      e.stopPropagation();
                      setShowEditor("team1");
                    }}
                    className={`
                      text-6xl
                      leading-none
                      font-black
                      tracking-wide
                      text-center
                      border border-cyan-300/40
                      rounded-2xl
                      px-6 py-5
                      transition-all
                      text-shimmer-cyan
                      ${isStreamMode ? '' : 'cursor-pointer hover:shadow-[0_0_20px_rgba(0,255,255,0.35)]'}
                    `}
                  >
                    {team1Name}
                  </div>

                  {/* SCORE DISPLAY WITH HUD ANIMATIONS */}
                  <div
                    className="
          relative
          overflow-hidden
          h-[110px]
          border
          border-cyan-300/40
          rounded-2xl
          bg-black/20
          backdrop-blur-md
        "
                  >
                    {/* Corner HUD lines and scanning line */}
                    <div className="absolute inset-0 pointer-events-none opacity-60">
                      <div className="absolute top-2 left-2 w-3.5 h-3.5 border-t-2 border-l-2 border-cyan-400/60 rounded-tl" />
                      <div className="absolute top-2 right-2 w-3.5 h-3.5 border-t-2 border-r-2 border-cyan-400/60 rounded-tr" />
                      <div className="absolute bottom-2 left-2 w-3.5 h-3.5 border-b-2 border-l-2 border-cyan-400/60 rounded-bl" />
                      <div className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b-2 border-r-2 border-cyan-400/60 rounded-br" />
                      <div className="absolute inset-x-2 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/35 to-transparent animate-[hudScan_4s_ease-in-out_infinite]" />
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                      {/* Rotating circles */}
                      <div className="absolute h-20 w-20 rounded-full border border-dashed border-cyan-500/10 animate-[spin_30s_linear_infinite]" />
                      <div className="absolute h-28 w-28 rounded-full border border-dashed border-cyan-500/5 animate-[spin_45s_linear_infinite_reverse]" />
                      <div className="absolute h-[120px] w-[120px] bg-[conic-gradient(from_0deg,transparent_50%,rgba(6,182,212,0.08)_100%)] rounded-full animate-spin pointer-events-none" />

                      {/* Score Value */}
                      <span className="relative z-10 text-5xl font-black tracking-wider text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
                        {team1Score}
                      </span>
                    </div>
                  </div>

                  {/* UPDATE BUTTON */}
                  {!isStreamMode && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowEditor("team1");
                      }}
                      className="
                        w-full py-2 rounded-xl border border-cyan-400/20 bg-cyan-500/5 hover:bg-cyan-500/25
                        text-[10px] font-black tracking-[0.25em] text-cyan-300 hover:text-white
                        transition-all duration-300 cursor-pointer shadow-[0_0_15px_rgba(6,182,212,0.1)]
                      "
                    >
                      UPDATE
                    </button>
                  )}
                </div>
              </div>

              {/* CENTER LIVE */}
              <div
                className="card-entrance-center w-1/3 h-[210px] rounded-3xl border border-red-400/30 bg-black/15 backdrop-blur-xl px-8 py-5 flex flex-col justify-between"
                style={{ animationDelay: "0.3s" }}
              >
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

                {/* LIVE MATCH INFO DISPLAY */}
                <div className="flex-1 flex items-center justify-center">
                  <span className="text-2xl font-black tracking-wider text-cyan-300 drop-shadow-[0_0_10px_rgba(34,211,238,0.4)] blink">
                    {liveScore}
                  </span>
                </div>

                {/* BOTTOM BAR & UPDATE */}
                <div className="flex flex-col gap-2.5">
                  {!isStreamMode && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowEditor("liveScore");
                      }}
                      className="
                        w-full py-1.5 rounded-lg border border-red-500/20 bg-red-500/5 hover:bg-red-500/25
                        text-[9px] font-black tracking-[0.25em] text-red-400 hover:text-white
                        transition-all duration-300 cursor-pointer
                      "
                    >
                      UPDATE
                    </button>
                  )}
                  <div className="relative h-3 w-full overflow-hidden rounded-full bg-white/10">
                    <div className="absolute inset-y-0 left-0 w-[45%] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                    <div className="absolute inset-y-0 w-40 bg-white/40 blur-md animate-[liveBar_2s_linear_infinite]" />
                  </div>
                </div>
              </div>

              {/* TEAM 2 */}
              <div
                className="card-entrance-right w-1/3 h-[270px] rounded-[32px] border border-white/15 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.16)] backdrop-blur-3xl p-6 flex items-center justify-center"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="relative w-full flex flex-col gap-5">
                  {/* TEAM NAME TOP */}
                  <div
                    onClick={(e) => {
                      if (isStreamMode) return;
                      e.stopPropagation();
                      setShowEditor("team2");
                    }}
                    className={`
                      text-6xl
                      leading-none
                      font-black
                      tracking-wide
                      text-center
                      border border-orange-300/40
                      rounded-2xl
                      px-6 py-5
                      transition-all
                      text-shimmer-gold
                      ${isStreamMode ? '' : 'cursor-pointer hover:shadow-[0_0_20px_rgba(255,165,0,0.35)]'}
                    `}
                  >
                    {team2Name}
                  </div>

                  {/* SCORE DISPLAY WITH HUD ANIMATIONS */}
                  <div
                    className="
          relative
          overflow-hidden
          h-[110px]
          border
          border-orange-300/40
          rounded-2xl
          bg-black/20
          backdrop-blur-md
        "
                  >
                    {/* Corner HUD lines and scanning line */}
                    <div className="absolute inset-0 pointer-events-none opacity-60">
                      <div className="absolute top-2 left-2 w-3.5 h-3.5 border-t-2 border-l-2 border-orange-400/60 rounded-tl" />
                      <div className="absolute top-2 right-2 w-3.5 h-3.5 border-t-2 border-r-2 border-orange-400/60 rounded-tr" />
                      <div className="absolute bottom-2 left-2 w-3.5 h-3.5 border-b-2 border-l-2 border-orange-400/60 rounded-bl" />
                      <div className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b-2 border-r-2 border-orange-400/60 rounded-br" />
                      <div className="absolute inset-x-2 h-[1px] bg-gradient-to-r from-transparent via-orange-400/35 to-transparent animate-[hudScan_4s_ease-in-out_infinite]" style={{ animationDelay: "2s" }} />
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                      {/* Rotating circles */}
                      <div className="absolute h-20 w-20 rounded-full border border-dashed border-orange-500/10 animate-[spin_35s_linear_infinite]" />
                      <div className="absolute h-28 w-28 rounded-full border border-dashed border-orange-500/5 animate-[spin_40s_linear_infinite_reverse]" />
                      <div className="absolute h-[120px] w-[120px] bg-[conic-gradient(from_0deg,transparent_50%,rgba(249,115,22,_0.08)_100%)] rounded-full animate-spin pointer-events-none" />

                      {/* Score Value */}
                      <span className="relative z-10 text-5xl font-black tracking-wider text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
                        {team2Score}
                      </span>
                    </div>
                  </div>

                  {/* UPDATE BUTTON */}
                  {!isStreamMode && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowEditor("team2");
                      }}
                      className="
                        w-full py-2 rounded-xl border border-orange-400/20 bg-orange-500/5 hover:bg-orange-500/25
                        text-[10px] font-black tracking-[0.25em] text-orange-300 hover:text-white
                        transition-all duration-300 cursor-pointer shadow-[0_0_15px_rgba(249,115,22,0.1)]
                      "
                    >
                      UPDATE
                    </button>
                  )}
                </div>
              </div>
            </div>
            <ColorPicker target="header" />
          </GlassCard>
        </div>

        {/* LAST OVER */}
        <div
          className="card-entrance-left mx-5 mt-4 flex items-center gap-6"
          style={{ animationDelay: "0.1s" }}
        >
          <div className="text-4xl font-black tracking-wide">OVERS</div>

          <GlassCard
            gradient={theme.lastOver}
            className="flex flex-1 items-center gap-5 py-4 px-8 min-h-[110px]"
          >
            {/* Animated Overs ball tracker */}
            <div className="flex gap-6 items-center relative z-10 w-full justify-around pr-14">
              {/* {[...Array(6)].map((_, idx) => {
                const isBallActive = idx === (liveTick % 6);
                return (
                  <div key={idx} className="relative flex flex-col items-center gap-1.5">
                    <div className={`
                      h-12 w-12 rounded-full border flex items-center justify-center font-black text-lg transition-all duration-500
                      ${isBallActive
                        ? "bg-gradient-to-r from-cyan-400 to-blue-500 border-cyan-300 scale-110 shadow-[0_0_15px_rgba(34,211,238,0.7)] text-white"
                        : "bg-black/40 border-white/10 text-white/50"
                      }
                    `}>
                      {idx + 1}
                    </div>
                    {isBallActive && (
                      <div className="absolute -inset-1 rounded-full border border-cyan-400/40 animate-ping pointer-events-none" />
                    )}
                  </div>
                );
              })} */}
            </div>
            <ColorPicker target="lastOver" />
          </GlassCard>
        </div>

        {/* FACECAM / CAMERA (Middle, centered, less space) */}
        <div
          className="card-entrance-center mx-5 mt-4 flex justify-center items-center"
          style={{ animationDelay: "0.3s" }}
        >
          <GlassCard
            gradient={theme.facecam}
            className="relative w-[1000px] h-[290px] overflow-hidden rounded-[34px] border border-white/10 bg-white/10 shadow-[0_25px_80px_rgba(0,0,0,0.18)]"
          >
            <ColorPicker target="facecam" />

            {/* Quick Layout Mode Changer overlay in Edit Mode */}
            {!isStreamMode && (
              <div className="absolute top-4 left-4 z-50 flex gap-1.5 bg-black/60 backdrop-blur-md p-1.5 rounded-xl border border-white/10">
                {[
                  { id: 'classic', icon: '🎙️' },
                  { id: 'pip', icon: '📹' },
                  { id: 'full', icon: '🖥️' }
                ].map((mode) => (
                  <button
                    key={mode.id}
                    onClick={() => setCameraLayoutMode(mode.id)}
                    className={`h-7 w-8 rounded-lg flex items-center justify-center text-sm transition-all cursor-pointer ${cameraLayoutMode === mode.id ? 'bg-cyan-500/30 text-white border border-cyan-400/45 scale-105' : 'text-white/40 hover:text-white hover:scale-105'}`}
                    title={`Switch to ${mode.id} mode`}
                  >
                    {mode.icon}
                  </button>
                ))}
              </div>
            )}

            {cameraLayoutMode === 'full' ? (
              // ----------------- FULL MODE LAYOUT -----------------
              <div className="relative w-full h-full">
                {/* Full screen video */}
                {renderWebcamFeed('full-mode')}
                
                {/* Tech details HUD Overlay at the bottom */}
                <div className="absolute bottom-5 left-6 right-6 z-20 flex justify-between items-end">
                  {/* Glass Box text details */}
                  <div className="bg-black/75 backdrop-blur-xl px-6 py-4 rounded-2xl border border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.4)] flex flex-col justify-center animate-[slideInUp_0.8s_ease-out_both]">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                      <p className="text-[10px] font-black tracking-[0.2em] text-white/50">LIVE CAMERA TRANSMISSION</p>
                    </div>
                    <h1 className="text-2xl font-black leading-none text-shimmer-cyan">
                      VIMAL RAJJ COMMENTARY
                    </h1>
                  </div>

                  {/* Shutter quick toggle for OBS */}
                  {!isStreamMode && (
                    <button
                      onClick={() => isCameraOn ? stopCamera() : startCamera(selectedCameraId)}
                      className={`px-4 py-2 rounded-xl text-[10px] font-black tracking-widest border transition-all cursor-pointer flex items-center gap-2 ${isCameraOn ? 'bg-red-500/20 text-red-400 border-red-500/30' : 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30'}`}
                    >
                      {isCameraOn ? "DISCONNECT CAM" : "CONNECT CAM"}
                    </button>
                  )}
                </div>
              </div>
            ) : (
              // ----------------- CLASSIC OR PIP LAYOUT -----------------
              <div className="flex w-full h-full items-center px-12 gap-10">
                {/* Left Area (Mic radar or Circle webcam) */}
                {cameraLayoutMode === 'pip' ? (
                  // Circle webcam PiP
                  renderWebcamFeed('pip-mode flex-shrink-0')
                ) : (
                  // Classic animated radar indicator
                  <div className="relative w-[220px] h-[220px] flex-shrink-0 flex items-center justify-center rounded-2xl bg-black/30 border border-white/10">
                    <div className="absolute inset-0 rounded-2xl border border-cyan-300/20 animate-pulse" />
                    <div className="absolute h-[190px] w-[190px] rounded-full border border-cyan-300/20 radar" />
                    <div className="absolute h-[150px] w-[150px] rounded-full border border-fuchsia-300/20 animate-spin" />
                    <div className="absolute h-[110px] w-[110px] rounded-full border border-white/20 radar" />
                    <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-black/40 backdrop-blur-2xl">
                      <span className="text-3xl">🎙️</span>
                    </div>
                  </div>
                )}

                {/* Right text layout */}
                <div className="flex-grow flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-3.5 w-3.5 rounded-full bg-red-500 animate-ping" />
                    <div
                      className={`rounded-full ${theme.live?.startsWith('#') ? '' : `bg-gradient-to-r ${theme.live}`} px-5 py-1 text-sm font-black tracking-widest`}
                      style={theme.live?.startsWith('#') ? { backgroundImage: `linear-gradient(to right, ${theme.live}, ${theme.live}80)` } : {}}
                    >
                      LIVE
                    </div>
                    <p className="text-sm font-semibold tracking-[0.2em] text-white/50">COMMENTARY FEED</p>
                  </div>

                  <h1 className="text-4xl font-black leading-none text-shimmer-cyan">
                    VIMAL RAJJ COMMENTARY
                  </h1>

                  <div className="mt-2 text-lg tracking-[3px] text-white/70 font-medium">
                    CRICKET ANALYSIS • LIVE REACTIONS
                  </div>

                  <div className="mt-4 flex gap-1.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-cyan-300 animate-bounce" />
                    <div className="h-2.5 w-2.5 rounded-full bg-white animate-bounce delay-100" />
                    <div className="h-2.5 w-2.5 rounded-full bg-fuchsia-300 animate-bounce delay-200" />
                  </div>
                </div>
              </div>
            )}
          </GlassCard>
        </div>

        {/* BOTTOM THREE CARDS */}
        <div className="mx-5 mt-4 grid grid-cols-3 gap-5">
          {/* STRIKER */}
          <div className="card-entrance-left" style={{ animationDelay: "0.4s" }}>
            <GlassCard
              gradient={theme.striker}
              className="min-h-[310px] p-4 flex flex-col rounded-[30px] border border-white/10 bg-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.18)]"
            >
              <ColorPicker target="striker" />
              <span className="font-bold text-2xl tracking-[0.08em] text-shimmer-white">
                BATSMAN
              </span>
              <div className="mt-auto h-[90px] rounded-xl border border-white/10 bg-black/20 backdrop-blur-md p-4 flex items-center justify-center">
                <div className="flex items-end gap-1.5 px-2 h-12">
                  {[...Array(10)].map((_, idx) => (
                    <div
                      key={idx}
                      className="w-1.5 bg-gradient-to-t from-cyan-400 to-indigo-500 rounded-full eq-bar"
                      style={{
                        height: "100%",
                        animationDelay: `${idx * 0.1}s`,
                        animationDuration: `${0.6 + (idx % 3) * 0.25}s`
                      }}
                    />
                  ))}
                </div>
              </div>
            </GlassCard>
          </div>

          {/* NON STRIKER */}
          <div className="card-entrance-center" style={{ animationDelay: "0.5s" }}>
            <GlassCard
              gradient={theme.nonStriker}
              className="min-h-[310px] p-4 flex flex-col rounded-[30px] border border-white/10 bg-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.18)]"
            >
              <span className="font-bold text-2xl tracking-[0.08em] text-shimmer-white">
                BATSMAN
              </span>
              <ColorPicker target="nonStriker" />
              <div className="mt-auto h-[90px] rounded-xl border border-white/10 bg-black/20 backdrop-blur-md p-4 flex items-center justify-center">
                <div className="flex items-end gap-1.5 px-2 h-12">
                  {[...Array(10)].map((_, idx) => (
                    <div
                      key={idx}
                      className="w-1.5 bg-gradient-to-t from-emerald-400 to-cyan-500 rounded-full eq-bar"
                      style={{
                        height: "100%",
                        animationDelay: `${idx * 0.1}s`,
                        animationDuration: `${0.8 + (idx % 3) * 0.2}s`
                      }}
                    />
                  ))}
                </div>
              </div>
            </GlassCard>
          </div>

          {/* BOWLER */}
          <div className="card-entrance-right" style={{ animationDelay: "0.6s" }}>
            <GlassCard
              gradient={theme.bowler}
              className="min-h-[290px] p-4 flex flex-col rounded-[30px] border border-white/10 bg-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.18)]"
            >
              <span className="font-bold text-2xl tracking-[0.08em] text-shimmer-white">
                BOWLER
              </span>
              <ColorPicker target="bowler" />
              <div className="mt-auto h-[90px] rounded-xl border border-white/10 bg-black/20 backdrop-blur-md p-4 flex items-center justify-center">
                <div className="flex items-end gap-1.5 px-2 h-12">
                  {[...Array(10)].map((_, idx) => (
                    <div
                      key={idx}
                      className="w-1.5 bg-gradient-to-t from-rose-500 to-amber-500 rounded-full eq-bar"
                      style={{
                        height: "100%",
                        animationDelay: `${idx * 0.1}s`,
                        animationDuration: `${0.7 + (idx % 3) * 0.22}s`
                      }}
                    />
                  ))}
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>

      {/* Root level theme modal to prevent clipping */}
      {renderThemeModal()}
      {renderUpdateModal()}
      {renderControlConsole()}
    </>
  );
}

