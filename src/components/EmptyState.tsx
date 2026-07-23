import { SearchX } from "lucide-react";

export function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-24 text-center">
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-gray-100 dark:bg-zinc-800">
        <SearchX className="h-10 w-10 text-gray-400 dark:text-zinc-500" />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-zinc-100">
        Tidak ada peserta ditemukan
      </h3>
      <p className="text-sm text-gray-500 dark:text-zinc-400">Silakan coba kata kunci lain.</p>
    </div>
  );
}
