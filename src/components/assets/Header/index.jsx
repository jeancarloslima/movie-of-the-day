import { NavLink, Link } from "react-router"; // Use react-router-dom para web!

export default function Header() {
  return (
    <div className="flex flex-col p-4 pb-0 gap-4 border-b border-gray-300 md:gap-1 md:px-0">
      <Link to="/" className="cursor-pointer text-left md:text-center">
        <h1 className="text-2xl font-black md:py-4">Movie Of The Day</h1>
      </Link>

      <nav className="flex gap-8 text-xl md:justify-center md:border-t border-gray-300 md:min-w-full">
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            `hover:bg-gray-100 pb-2 md:p-2 ${isActive ? "border-b-3 font-semibold border-blue-500" : ""}`
          }
        >
          Home
        </NavLink>
        
        <NavLink 
          to="/archive" 
          className={({ isActive }) => 
            `hover:bg-gray-100 pb-2 md:p-2 ${isActive ? "border-b-3 font-semibold border-blue-500" : ""}`
          }
        >
          Archive
        </NavLink>

        <NavLink 
          to="/about" 
          className={({ isActive }) => 
            `hover:bg-gray-100 pb-2 md:p-2 ${isActive ? "border-b-3 font-semibold border-blue-500" : ""}`
          }
        >
          About
        </NavLink>
      </nav>
    </div>
  );
}