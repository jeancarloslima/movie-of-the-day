import { useState } from "react";
import { Link } from "react-router";

export default function Header() {
    const [telaAtiva, setTelaAtiva] = useState("Home");

  return (
    <div className="flex flex-col p-4 pb-0 gap-4 border-b border-gray-300 md:gap-1 md:px-0">
      <h1 className="text-2xl font-bold md:text-center md:py-4">Movie Of The Day</h1>
      <nav className="flex gap-8 text-xl md:justify-center md:border-t border-gray-300 md:min-w-dvw">
        <Link onClick={() => setTelaAtiva("Home")} className={`hover:bg-gray-100 pb-2 md:p-2 ${telaAtiva === "Home" ? "border-b-3 font-semibold border-blue-500" : ""}`} to="/">Home</Link>
        <Link onClick={() => setTelaAtiva("Archive")} className={`hover:bg-gray-100 pb-2 md:p-2 ${telaAtiva === "Archive" ? "border-b-3 font-semibold border-blue-500" : ""}`} to="/archive">Archive</Link>
        <Link onClick={() => setTelaAtiva("About")} className={`hover:bg-gray-100 pb-2 md:p-2 ${telaAtiva === "About" ? "border-b-3 font-semibold border-blue-500" : ""}`} to="/about">About</Link>
      </nav>
    </div>
  );
}
