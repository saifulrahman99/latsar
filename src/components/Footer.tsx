export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white py-8 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <p className="text-sm text-gray-400 dark:text-zinc-500">
          &copy; {new Date().getFullYear()} Kelompok 4 &middot; Latsar CPNS
        </p>
      </div>
    </footer>
  );
}
