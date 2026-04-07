import Calculator from "../components/Calculator";

import { useTheme } from "../hooks/useTheme";
export default function HomePage() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 to-black text-white flex flex-col items-center justify-center px-4">
      {/* Header */}
      <div className="text-center mb-6">
        <div className="text-center mb-6 flex items-center gap-4">
          <h1 className="text-3xl md:text-4xl font-bold">
            Smart Dev Calculator
          </h1>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 transition"
          >
            <FontAwesomeIcon icon={isDark ? faSun : faM} />
          </button>
        </div>
        <p className="text-zinc-400 mt-2 text-sm">
          A modern calculator built with React + TypeScript + Tailwind
        </p>
      </div>

      {/* Calculator */}
      <Calculator />

      {/* Footer */}
      <p className="text-xs text-zinc-500 mt-6">
        Built by Mark Alexis Posadas 🚀
      </p>
    </div>
  );
}
