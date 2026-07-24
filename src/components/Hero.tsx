import { siteConfig } from "@/data/participants";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-gray-100 bg-gradient-to-b from-gray-50/80 to-white py-16 sm:py-20 dark:from-zinc-900/50 dark:to-zinc-950 dark:border-zinc-800/60">
      <div className="pointer-events-none absolute inset-0">
        {/* Left shapes */}
        <div className="hero-shape hero-square-1" />
        <div className="hero-shape hero-square-2" />
        <div className="hero-shape hero-circle-1" />
        <div className="hero-shape hero-circle-2" />
        <div className="hero-shape hero-triangle-1" />
        <div className="hero-shape hero-cross-1" />
        <div className="hero-shape hero-dot-1" />

        {/* Right shapes */}
        <div className="hero-shape hero-square-3" />
        <div className="hero-shape hero-square-4" />
        <div className="hero-shape hero-circle-3" />
        <div className="hero-shape hero-circle-4" />
        <div className="hero-shape hero-triangle-2" />
        <div className="hero-shape hero-cross-2" />
        <div className="hero-shape hero-dot-2" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2 className="mb-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-zinc-100">
          {siteConfig.groupName}
        </h2>
        <p className="mb-10 text-base text-gray-500 sm:text-lg dark:text-zinc-400">
          {siteConfig.subtitle} Tahun {siteConfig.year}
        </p>

        <div className="hero-photo-wrapper relative mx-auto max-w-2xl">
          <div className="hero-photo-glow" />

          <div className="relative overflow-hidden rounded-2xl border border-gray-200/80 shadow-2xl dark:border-zinc-700/60">
            <img
              src="/foto-bersama.jpg"
              alt="Foto bersama Kelompok 4 Latsar CPNS"
              className="aspect-video w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
