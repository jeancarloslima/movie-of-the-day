import { Link } from "react-router";

export default function Header() {
  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-2xl font-bold md:text-center md:py-4">Movie Of The Day</h1>
      <nav className="flex gap-8 text-xl md:justify-center">
        <Link className="border-b-3 font-semibold border-blue-500 hover:bg-gray-100 md:p-2" to="/">Home</Link>
        <Link className="hover:bg-gray-100 md:p-2" to="/archive">Archive</Link>
        <Link className="hover:bg-gray-100 md:p-2" to="/about">About</Link>
      </nav>
    </div>
  );
}
