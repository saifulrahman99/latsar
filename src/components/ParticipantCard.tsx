import { useState, useRef, useEffect } from "react";
import { ExternalLink, Copy, Check, MoreHorizontal } from "lucide-react";
import type { Participant } from "@/types/participant";

interface ParticipantCardProps {
  participant: Participant;
  index: number;
}

export function ParticipantCard({ participant, index }: ParticipantCardProps) {
  const [imgError, setImgError] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [copied, setCopied] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(participant.drive);
      setCopied(true);
      setShowMenu(false);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.open(participant.drive, "_blank", "noopener,noreferrer");
    }
  };

  const initials = participant.name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] dark:border-zinc-800 dark:bg-zinc-900 dark:hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
      {/* Photo */}
      <div className="relative aspect-square w-full overflow-hidden bg-gray-100 dark:bg-zinc-800">
        {!imgLoaded && !imgError && (
          <div className="absolute inset-0 animate-pulse bg-gray-200 dark:bg-zinc-700" />
        )}

        {imgError ? (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-500 to-violet-500 text-4xl font-semibold tracking-wide text-white">
            {initials}
          </div>
        ) : (
          <img
            src={participant.photo}
            alt={`Foto ${participant.name}`}
            loading="lazy"
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgError(true)}
            className={`h-full w-full object-cover transition-all duration-500 group-hover:scale-[1.03] ${
              imgLoaded ? "opacity-100" : "absolute opacity-0"
            }`}
          />
        )}

        {/* Badge number */}
        <span className="absolute left-3 top-3 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-white/90 text-[11px] font-semibold text-gray-700 backdrop-blur-sm dark:bg-zinc-900/80 dark:text-zinc-300">
          {index + 1}
        </span>

        {/* Menu */}
        <div ref={menuRef} className="absolute right-3 top-3 z-10">
          {copied ? (
            <div className="flex h-7 items-center gap-1 rounded-full bg-emerald-500/90 px-2.5 text-[11px] font-medium text-white backdrop-blur-sm">
              <Check className="h-3 w-3" />
              Tersalin
            </div>
          ) : (
            <>
              <button
                onClick={() => setShowMenu(!showMenu)}
                aria-label="Opsi link berkas"
                className="flex h-7 w-7 items-center justify-center rounded-full bg-white/80 text-gray-500 opacity-0 backdrop-blur-sm transition-all duration-200 hover:bg-white hover:text-gray-900 group-hover:opacity-100 dark:bg-zinc-900/70 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
              >
                <MoreHorizontal className="h-4 w-4" />
              </button>
              {showMenu && (
                <div className="absolute right-0 top-8 z-20 overflow-hidden rounded-xl border border-gray-100 bg-white shadow-xl dark:border-zinc-700 dark:bg-zinc-800">
                  <button
                    onClick={handleCopyLink}
                    className="flex w-full items-center gap-2.5 px-4 py-2.5 text-left text-[13px] text-gray-600 transition-colors hover:bg-gray-50 dark:text-zinc-400 dark:hover:bg-zinc-700"
                  >
                    <Copy className="h-3.5 w-3.5" />
                    Salin Link
                  </button>
                  <button
                    onClick={() => {
                      window.open(participant.drive, "_blank", "noopener,noreferrer");
                      setShowMenu(false);
                    }}
                    className="flex w-full items-center gap-2.5 px-4 py-2.5 text-left text-[13px] text-gray-600 transition-colors hover:bg-gray-50 dark:text-zinc-400 dark:hover:bg-zinc-700"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    Buka di Tab Baru
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Info */}
      <div className="px-4 pb-4 pt-3.5">
        <h3 className="mb-3 text-[14px] leading-snug font-medium text-gray-900 dark:text-zinc-100">
          {participant.name}
        </h3>

        <a
          href={participant.drive}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Buka berkas ${participant.name}`}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-4 py-2.5 text-[13px] font-medium text-white shadow-sm transition-all duration-200 hover:from-blue-500 hover:to-violet-500 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500 active:scale-[0.98] dark:from-blue-500 dark:to-violet-500 dark:hover:from-blue-400 dark:hover:to-violet-400"
        >
          <ExternalLink className="h-3.5 w-3.5" />
          Buka Berkas
        </a>
      </div>
    </div>
  );
}
