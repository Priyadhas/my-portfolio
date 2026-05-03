export default function Footer() {
  return (
    <footer className="mt-32 py-10 border-t border-white/5 bg-[#0b0f19] relative z-10 text-center">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 text-zinc-50 font-bold tracking-tight text-lg">
             PRIYA M D
          </div>
          <p className="text-sm text-zinc-500 font-medium">
             © {new Date().getFullYear()} — Software Engineer.
          </p>
      </div>
    </footer>
  );
}
