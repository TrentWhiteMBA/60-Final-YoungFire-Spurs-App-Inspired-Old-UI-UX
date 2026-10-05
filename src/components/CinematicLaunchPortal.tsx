import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Flame } from 'lucide-react';

interface CinematicLaunchPortalProps {
  onLaunchComplete: () => void;
}

type LaunchStage =
  | 'black-beacon'
  | 'world-map'
  | 'sa-locked'
  | 'sa-zooming'
  | 'stinger-flame'
  | 'fade-to-welcome';

export const CinematicLaunchPortal: React.FC<CinematicLaunchPortalProps> = ({ onLaunchComplete }) => {
  const [stage, setStage] = useState<LaunchStage>('black-beacon');
  const timersRef = useRef<Array<ReturnType<typeof setTimeout>>>([]);
  const isExitingRef = useRef(false);

  const clearAllTimers = useCallback(() => {
    timersRef.current.forEach((t) => clearTimeout(t));
    timersRef.current = [];
  }, []);

  // Smooth exit helper that always fades out cleanly over 1.5s before unmounting
  const triggerSmoothExit = useCallback(() => {
    if (isExitingRef.current) return;
    isExitingRef.current = true;
    clearAllTimers();
    setStage('fade-to-welcome');
    const exitTimer = setTimeout(() => {
      onLaunchComplete();
    }, 1500);
    timersRef.current.push(exitTimer);
  }, [clearAllTimers, onLaunchComplete]);

  // Starts (or restarts) the full cinematic sequence when the user clicks the Blue Dot:
  // 1. World Map -> San Antonio Lock (5s) -> Slow Zoom into Blue Dot (4s) -> Stinger Page (5s) -> Smooth Welcome Reveal (1.5s)
  const startProcessFromBeginning = useCallback(() => {
    isExitingRef.current = false;
    clearAllTimers();

    // Step 1: Lock beacon over San Antonio street map for 5 full seconds (5000ms)
    setStage('sa-locked');

    const tZoom = setTimeout(() => {
      // Step 2: Slowly zoom in toward the Blue Dot over 4 full seconds (4000ms)
      setStage('sa-zooming');

      const tStinger = setTimeout(() => {
        // Step 3: Reveal the YoungFire Holy Flame Stinger page and hold for 5 seconds (5000ms)
        setStage('stinger-flame');

        const tFadeWelcome = setTimeout(() => {
          // Step 4: Slowly bring in the Welcome page with a smooth 1.5s dissolve
          triggerSmoothExit();
        }, 5000);
        timersRef.current.push(tFadeWelcome);
      }, 4000);
      timersRef.current.push(tStinger);
    }, 5000);

    timersRef.current.push(tZoom);
  }, [clearAllTimers, triggerSmoothExit]);

  // Reset back to the very beginning (Pitch-Black Beacon -> World Map waiting for Blue Dot click)
  const resetToInitialWorldBeacon = useCallback(() => {
    isExitingRef.current = false;
    clearAllTimers();
    setStage('black-beacon');
    const tWorld = setTimeout(() => {
      setStage('world-map');
    }, 1200);
    timersRef.current.push(tWorld);
  }, [clearAllTimers]);

  // Preload critical map & welcome assets on mount to prevent any image decoding flashes
  useEffect(() => {
    const preloadUrls = [
      '/san_antonio_dark_map.png',
      '/IMG_3520.jpg',
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80'
    ];
    preloadUrls.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Initial Boot:
  // 0ms -> 1200ms: Pure Pitch-Black Living Water Blue Beacon
  // 1200ms+: World Map with pulsing Blue Dot waiting for the user to click the Blue Dot to start the process
  useEffect(() => {
    const tWorld = setTimeout(() => {
      setStage((prev) => (prev === 'black-beacon' ? 'world-map' : prev));
    }, 1200);

    timersRef.current.push(tWorld);

    return () => {
      clearAllTimers();
    };
  }, [clearAllTimers]);

  const handleBlueDotClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (stage === 'black-beacon' || stage === 'world-map') {
      // User clicked the Blue Dot on the initial screen: launch the 5s SA lock -> 4s zoom -> Stinger -> Welcome sequence
      startProcessFromBeginning();
    } else {
      // User clicked the Blue Dot while already in progress: restart the process from the very beginning
      resetToInitialWorldBeacon();
      const tStart = setTimeout(() => {
        startProcessFromBeginning();
      }, 1800);
      timersRef.current.push(tStart);
    }
  };

  const isMapAndBeaconVisible =
    stage === 'black-beacon' ||
    stage === 'world-map' ||
    stage === 'sa-locked' ||
    stage === 'sa-zooming';

  const isStingerVisible = stage === 'stinger-flame' || stage === 'fade-to-welcome';

  return (
    <div
      className={`fixed inset-0 z-[100] overflow-hidden bg-black select-none flex items-center justify-center transition-opacity duration-[1500ms] ease-in-out ${
        stage === 'fade-to-welcome'
          ? 'opacity-0 pointer-events-none'
          : 'opacity-100 pointer-events-auto'
      }`}
    >
      <style>{`
        @keyframes livingWaterPulse {
          0% {
            transform: scale(0.85);
            opacity: 0.95;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            transform: scale(4.2);
            opacity: 0;
          }
        }
        @keyframes stingerCrestBreathe {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 40px rgba(245, 158, 11, 0.35), 0 0 80px rgba(245, 158, 11, 0.15);
          }
          50% {
            transform: scale(1.04);
            box-shadow: 0 0 60px rgba(245, 158, 11, 0.55), 0 0 110px rgba(234, 88, 12, 0.28);
          }
        }
        .animate-living-water {
          animation: livingWaterPulse 2.2s cubic-bezier(0, 0.2, 0.8, 1) infinite;
        }
        .animate-stinger-crest {
          animation: stingerCrestBreathe 3.2s ease-in-out infinite;
        }
      `}</style>

      {/* ==================================================================== */}
      {/* 1A. WORLD GLOBE MAP LAYER                                            */}
      {/* ==================================================================== */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-all duration-[1800ms] ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none ${
          stage === 'world-map'
            ? 'opacity-45 scale-100'
            : stage === 'sa-locked' || stage === 'sa-zooming' || isStingerVisible
            ? 'opacity-0 scale-[2.2]'
            : 'opacity-0 scale-95'
        }`}
        style={{
          backgroundImage: `radial-gradient(circle at 48% 54%, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.92) 100%), url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80')`,
          filter: 'grayscale(100%) contrast(140%) brightness(55%)',
          transformOrigin: '48% 54%'
        }}
      />

      {/* ==================================================================== */}
      {/* 1B. SAN ANTONIO DARK VECTOR STREET MAP (/san_antonio_dark_map.png)   */}
      {/*     Locks for 5s ('sa-locked'), then zooms into Blue Dot over 4s     */}
      {/* ==================================================================== */}
      <div
        className={`absolute inset-0 bg-cover bg-center pointer-events-none ${
          stage === 'sa-zooming'
            ? 'transition-all duration-[4000ms] ease-in-out opacity-95'
            : 'transition-all duration-[1400ms] ease-out'
        } ${
          stage === 'sa-locked'
            ? 'opacity-90 scale-100'
            : stage === 'sa-zooming'
            ? 'opacity-95 scale-[3.1]'
            : 'opacity-0 scale-110'
        }`}
        style={{
          backgroundImage: `radial-gradient(circle at 50% 52%, rgba(0,0,0,0.04) 0%, rgba(0,0,0,0.72) 100%), url('/san_antonio_dark_map.png')`,
          filter: 'contrast(130%) brightness(96%)',
          transformOrigin: '50% 52%'
        }}
      />

      {/* ==================================================================== */}
      {/* 2. LIVING WATER BLUE DOT BEACON OVER JHOW SAN ANTONIO                 */}
      {/*    Clickable at any time to start/restart the process from beginning */}
      {/* ==================================================================== */}
      <div
        className={`absolute z-20 flex flex-col items-center justify-center cursor-pointer group ${
          stage === 'sa-zooming'
            ? 'transition-all duration-[4000ms] ease-in-out'
            : 'transition-all duration-[1200ms] ease-out'
        } ${isMapAndBeaconVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{
          top: stage === 'black-beacon' ? '50%' : stage === 'world-map' ? '54%' : '52%',
          left: stage === 'black-beacon' ? '50%' : stage === 'world-map' ? '48%' : '50%',
          transform:
            stage === 'sa-zooming'
              ? 'translate(-50%, -50%) scale(1.45)'
              : 'translate(-50%, -50%) scale(1)'
        }}
        onClick={handleBlueDotClick}
        title="Click Blue Dot to Start Sanctuary Launch"
      >
        {/* Concentric Living Water Pulse Rings */}
        <div className="relative flex items-center justify-center w-28 h-28">
          <div className="absolute w-14 h-14 rounded-full border border-cyan-400 animate-living-water" />
          <div
            className="absolute w-14 h-14 rounded-full border border-cyan-300 animate-living-water"
            style={{ animationDelay: '0.75s' }}
          />
          <div
            className="absolute w-14 h-14 rounded-full border border-sky-300/70 animate-living-water"
            style={{ animationDelay: '1.5s' }}
          />
          {/* Radiant Solid Cyan Beacon Core */}
          <div
            className={`w-5 h-5 rounded-full bg-cyan-400 transition-all duration-500 ease-out ${
              stage === 'sa-zooming'
                ? 'shadow-[0_0_55px_22px_rgba(6,182,212,0.95)] scale-125'
                : 'shadow-[0_0_35px_14px_rgba(6,182,212,0.85)] group-hover:scale-125'
            }`}
          />
        </div>

        {/* Minimalist Interactive Beacon Prompt (Visible on World Map & San Antonio Lock) */}
        <div
          className={`mt-2 flex flex-col items-center pointer-events-none transition-opacity duration-700 ${
            stage === 'world-map' || stage === 'sa-locked' ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="px-4 py-1.5 rounded-full bg-black/85 border border-cyan-400/60 backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.35)]">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-cyan-300 font-bold">
              {stage === 'world-map' ? 'Tap Blue Dot To Enter Sanctuary' : 'Sanctuary Beacon Locked'}
            </span>
          </div>
          <span className="mt-1.5 font-mono text-[9px] uppercase tracking-[0.18em] text-slate-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
            Joshua House of Worship • San Antonio, TX
          </span>
        </div>
      </div>

      {/* ==================================================================== */}
      {/* 3. OFFICIAL YOUNGFIRE HOLY FLAME STINGER PAGE                        */}
      {/*    Uses the exact Black Frame + White Square + Black Flame Logo      */}
      {/* ==================================================================== */}
      <div
        className={`fixed inset-0 z-40 bg-black flex flex-col items-center justify-center transition-all duration-[1100ms] ease-in-out ${
          isStingerVisible
            ? 'opacity-100 scale-100 pointer-events-auto'
            : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        {/* Subtle San Antonio Map Ghost Backdrop Under Stinger for Visual Continuity */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at center, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.96) 100%), url('/san_antonio_dark_map.png')`,
            filter: 'contrast(130%) brightness(85%)'
          }}
        />

        {/* Ambient Warm Gold & Obsidian Radial Glow */}
        <div className="absolute w-[420px] h-[420px] rounded-full bg-amber-500/15 blur-3xl pointer-events-none" />

        {/* Exact YoungFire Flame Crest Logo from User Reference Screenshot */}
        <div className="relative z-10 flex flex-col items-center">
          <div
            className="w-28 h-28 sm:w-32 sm:h-32 rounded-[30px] bg-black border-2 border-amber-500/65 flex items-center justify-center animate-stinger-crest"
          >
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-[22px] bg-white flex items-center justify-center shadow-inner">
              <Flame className="w-11 h-11 sm:w-13 sm:h-13 text-black fill-current drop-shadow-sm" />
            </div>
          </div>

          {/* Brand Typography */}
          <h1 className="mt-7 font-['Outfit'] text-2xl sm:text-3xl font-black uppercase tracking-[0.22em] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
            YOUNG<span className="text-amber-400">FIRE</span> SANCTUARY
          </h1>
          <div className="mt-2 font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] text-slate-300 font-bold">
            JOSHUA HOUSE OF WORSHIP • SAN ANTONIO, TX
          </div>
          <div className="mt-1 font-mono text-[9px] uppercase tracking-[0.22em] text-amber-400/90">
            SAN ANTONIO • LIVING WATERS • EST. 2015
          </div>
        </div>
      </div>

      {/* Bottom Controls: Blue Dot Restart Trigger + Skip/Enter Button */}
      <div className="absolute bottom-8 z-50 flex items-center gap-3">
        {stage !== 'black-beacon' && stage !== 'world-map' && (
          <button
            onClick={handleBlueDotClick}
            className="px-4 py-2 rounded-full border border-cyan-400/40 bg-black/75 backdrop-blur-md font-mono text-[10px] uppercase tracking-widest text-cyan-300 hover:text-white hover:border-cyan-400 transition-all cursor-pointer flex items-center gap-2 shadow-[0_0_15px_rgba(6,182,212,0.25)]"
            title="Restart Launch Sequence from the Beginning"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_2px_rgba(6,182,212,0.85)] animate-pulse" />
            <span>Replay Beacon</span>
          </button>
        )}

        <button
          onClick={triggerSmoothExit}
          className="px-5 py-2 rounded-full border border-white/20 bg-black/70 backdrop-blur-md font-mono text-[10px] uppercase tracking-widest text-slate-300 hover:text-white hover:border-white/40 transition-all cursor-pointer"
        >
          {isStingerVisible ? 'Enter Sanctuary →' : 'Skip Intro'}
        </button>
      </div>
    </div>
  );
};
