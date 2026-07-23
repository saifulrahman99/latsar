import { Users, Eye } from "lucide-react";

interface StatsProps {
  total: number;
  showing: number;
}

export function Stats({ total, showing }: StatsProps) {
  const isFiltered = showing !== total;

  return (
    <div className="flex items-center justify-center gap-6 text-sm text-gray-500 dark:text-zinc-400">
      <div className="flex items-center gap-2">
        <Users className="h-4 w-4" />
        <span>
          <span className="font-medium text-gray-700 dark:text-zinc-300">{total}</span> Total Peserta
        </span>
      </div>
      {isFiltered && (
        <div className="flex items-center gap-2">
          <Eye className="h-4 w-4" />
          <span>
            Menampilkan{" "}
            <span className="font-medium text-gray-700 dark:text-zinc-300">{showing}</span> dari {total}{" "}
            peserta
          </span>
        </div>
      )}
    </div>
  );
}
