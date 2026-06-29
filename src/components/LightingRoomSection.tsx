import { useEffect, useRef, useState } from "react";

export default function LightingRoomSection() {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);

  useEffect(() => {
    let cleanup: (() => void) | undefined;
    let cancelled = false;

    async function mountScene() {
      try {
        const { createRoomScene } = await import("../3d-room/main.js");
        if (cancelled || !mountRef.current) return;

        cleanup = createRoomScene(mountRef.current);
      } catch (error) {
        if (!cancelled) {
          setLoadError(
            error instanceof Error ? error.message : "Scena 3D nu a putut fi incarcata."
          );
        }
      }
    }

    mountScene();

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-[#08090b] pb-20 text-white md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-[0.78fr_1.22fr] lg:gap-14">
        <div className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/55">
            Camera 3D
          </p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            Lumina schimba atmosfera unui interior
          </h2>
          <p className="mt-5 text-base leading-7 text-white/68 md:text-lg">
            Ajusteaza intensitatea si temperatura din consola pentru a vedea cum
            aceeasi camera poate deveni mai calda, mai neutra sau mai tehnica.
          </p>
          <div className="mt-8 grid gap-4 text-sm text-white/62 sm:grid-cols-2 lg:grid-cols-1">
            <div className="border-l border-white/18 pl-4">
              <span className="block font-semibold text-white">Intensitate</span>
              Controleaza cat de puternic domina lumina ambientul.
            </div>
            <div className="border-l border-white/18 pl-4">
              <span className="block font-semibold text-white">Temperatura</span>
              Treci de la lumina calda la o atmosfera neutra sau rece.
            </div>
          </div>
        </div>

        <div className="relative min-h-[500px] overflow-hidden rounded-lg border border-white/12 bg-[#ede9e4] shadow-[0_32px_90px_rgba(0,0,0,0.45)] md:min-h-[620px]">
          {loadError ? (
            <div className="grid h-[500px] place-items-center px-6 text-center text-sm text-black/70 md:h-[620px]">
              {loadError}
            </div>
          ) : (
            <div ref={mountRef} className="absolute inset-0" />
          )}

          <div className="pointer-events-none absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/55 via-black/12 to-transparent p-6 md:p-8">
            <p className="max-w-xl text-sm text-white/78">
              Trage cu mouse-ul pentru a roti camera. Panoul din dreapta controleaza
              scenariul de lumina.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
