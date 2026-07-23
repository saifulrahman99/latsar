import { useState, useMemo, useRef } from "react";
import { Hero } from "@/components/Hero";
import { SearchBox } from "@/components/SearchBox";
import { Stats } from "@/components/Stats";
import { ParticipantCard } from "@/components/ParticipantCard";
import { EmptyState } from "@/components/EmptyState";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useTheme } from "@/hooks/useTheme";
import { participants } from "@/data/participants";
import { filterParticipants } from "@/utils/filterParticipants";

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [search, setSearch] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);

  const filtered = useMemo(() => filterParticipants(participants, search), [search]);

  const handleClear = () => {
    setSearch("");
    searchRef.current?.focus();
  };

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-gray-900 transition-colors duration-300 dark:bg-zinc-950 dark:text-zinc-100">
      <Hero />

      <main className="mx-auto w-full max-w-7xl flex-1 px-4 pb-16 pt-10 sm:px-6">
        <div className="mb-10 space-y-5">
          <SearchBox
            value={search}
            onChange={setSearch}
            onClear={handleClear}
            inputRef={searchRef}
          />
          <Stats total={participants.length} showing={filtered.length} />
        </div>

        {filtered.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((participant, idx) => (
              <ParticipantCard key={participant.id} participant={participant} index={idx} />
            ))}
          </div>
        )}
      </main>

      <Footer />
      <ThemeToggle theme={theme} onToggle={toggleTheme} />
      <ScrollToTop />
    </div>
  );
}
