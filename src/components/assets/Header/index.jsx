import { Link } from "react-router";

export default function Header() {
  return (
    <div className="flex flex-col p-4 pb-0 gap-1 border-b border-gray-300 md:px-0">
      <h1 className="text-2xl font-bold md:text-center md:py-4">Movie Of The Day</h1>
      <nav className="flex gap-8 text-xl md:justify-center md:border-t border-gray-300 md:min-w-dvw">
        <Link className="border-b-3 font-semibold border-blue-500 hover:bg-gray-100 pb-2 md:p-2" to="/">Home</Link>
        <Link className="hover:bg-gray-100 pb-2 md:p-2" to="/archive">Archive</Link>
        <Link className="hover:bg-gray-100 pb-2 md:p-2" to="/about">About</Link>
      </nav>
    </div>
  );
}
