import { useEffect, useRef, useState } from "react";

const HeroVideo = "/videos/HeroVideo.mp4";

export default function Hero() {
  const [isVideoReady, setIsVideoReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleReady = async () => {
      try {
        await video.play();

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setIsVideoReady(true);
          });
        });
      } catch {
        setIsVideoReady(true);
      }
    };

    video.addEventListener("canplay", handleReady);
    video.addEventListener("playing", handleReady);

    video.load();

    return () => {
      video.removeEventListener("canplay", handleReady);
      video.removeEventListener("playing", handleReady);
    };
  }, []);

  return (
    <section className="relative w-screen h-screen overflow-hidden bg-black text-white">
      {!isVideoReady && <LightLoader />}

      <div
        className={`hidden md:flex h-full transition-opacity duration-700 ${
          isVideoReady ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="absolute right-0 top-0 w-[70vw] h-full overflow-hidden z-0">
          <video
            ref={videoRef}
            className="absolute right-0 top-0 w-full h-full object-cover"
            muted
            loop
            playsInline
            preload="auto"
            style={{
              clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)",
            }}
          >
            <source src={HeroVideo} type="video/mp4" />
          </video>
        </div>

        <div className="relative z-10 flex h-full ml-[4vw] px-6 items-center">
          <div className="space-y-6 max-w-lg">
            <h1 className="text-4xl font-extrabold tracking-tight w-[28vw]">
              Iluminat Arhitectural.
              <br />
              Din 1996.
            </h1>

            <p className="text-white/70 w-[28vw] text-md">
              Prin experiență, profesionalism și o înțelegere profundă a modului
              în care lumina influențează percepția unui spațiu, Orion Grup
              creează interioare și proiecte arhitecturale în care estetica și
              funcționalitatea coexistă natural.
            </p>

            <div className="flex flex-col lg:flex-row items-start gap-3 sm:gap-4">
              <button className="rounded-xl bg-primary text-ink px-6 py-3 font-semibold shadow-lg hover:bg-primary/90 active:translate-y-px transition text-xs">
                Începe-ți proiectul
              </button>

              <button className="rounded-xl bg-secondary text-ink px-6 py-3 font-semibold shadow inline-flex items-center gap-2 hover:bg-secondary/90 active:translate-y-px transition text-xs">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="currentColor"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
                Camera 3D
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`flex flex-col md:hidden h-full transition-opacity duration-700 ${
          isVideoReady ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex flex-col justify-center items-center h-[50vh] px-6 text-center gap-4 pt-12">
          <h1 className="text-3xl font-extrabold tracking-tight">
            Iluminat Arhitectural.
            <br />
            Din 1996.
          </h1>

          <p className="text-white/70 text-sm max-w-md">
            Prin experiență, profesionalism și o înțelegere profundă a modului în
            care lumina influențează percepția unui spațiu, Orion Grup creează
            interioare și proiecte arhitecturale premium.
          </p>

          <div className="flex gap-3 mt-2">
            <button className="rounded-xl bg-primary text-ink px-4 py-2 font-semibold shadow-lg hover:bg-primary/90 active:translate-y-px transition text-sm">
              Începe-ți proiectul
            </button>

            <button className="rounded-xl bg-secondary text-ink px-4 py-2 font-semibold shadow inline-flex items-center gap-2 hover:bg-secondary/90 active:translate-y-px transition text-sm">
              Camera 3D
            </button>
          </div>
        </div>

        <div className="w-full h-[50vh] px-6 pb-6">
          <div className="w-full h-full rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center shadow-xl overflow-hidden">
            <video
              className="w-full h-full object-cover"
              muted
              loop
              playsInline
              preload="auto"
              autoPlay
            >
              <source src={HeroVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}

function LightLoader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_45%)]" />

      <div className="absolute top-0 left-1/2 h-full w-[18vw] -translate-x-1/2 rotate-[12deg] bg-gradient-to-b from-white/40 via-white/10 to-transparent blur-2xl animate-[loader-beam_1.8s_ease-in-out_infinite]" />

      <div className="absolute top-0 left-[30%] h-full w-[12vw] rotate-[-10deg] bg-gradient-to-b from-primary/40 via-primary/10 to-transparent blur-2xl animate-[loader-beam_2.2s_ease-in-out_infinite]" />

      <div className="absolute top-0 right-[28%] h-full w-[12vw] rotate-[8deg] bg-gradient-to-b from-secondary/35 via-secondary/10 to-transparent blur-2xl animate-[loader-beam_2.4s_ease-in-out_infinite]" />

      <div className="relative z-10 flex flex-col items-center gap-8 px-6 text-center">
        <div className="relative flex h-24 w-24 items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-white/10" />
          <div className="absolute inset-3 rounded-full border border-white/20" />
          <div className="absolute h-12 w-12 rounded-full bg-white/90 shadow-[0_0_45px_rgba(255,255,255,0.9)] animate-[bulb-pulse_1.4s_ease-in-out_infinite]" />
          <div className="absolute h-20 w-20 rounded-full bg-white/10 blur-xl animate-[bulb-pulse_1.4s_ease-in-out_infinite]" />
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-white/50">
            Orion Grup
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">
            Aprindem scena
          </h2>
          <p className="mt-3 text-sm text-white/50">
            Se încarcă experiența vizuală...
          </p>
        </div>

        <div className="h-[2px] w-56 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-1/2 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.9)] animate-[loader-line_1.2s_ease-in-out_infinite]" />
        </div>
      </div>

      <style>
        {`
          @keyframes loader-beam {
            0%, 100% {
              opacity: 0.25;
              transform: translateY(-8%) scaleX(0.85);
            }
            50% {
              opacity: 0.85;
              transform: translateY(4%) scaleX(1.15);
            }
          }

          @keyframes bulb-pulse {
            0%, 100% {
              opacity: 0.65;
              transform: scale(0.92);
            }
            50% {
              opacity: 1;
              transform: scale(1.08);
            }
          }

          @keyframes loader-line {
            0% {
              transform: translateX(-120%);
            }
            100% {
              transform: translateX(240%);
            }
          }
        `}
      </style>
    </div>
  );
}