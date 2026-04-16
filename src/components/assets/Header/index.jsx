import { Link } from "react-router";

export default function Header() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/archive">Archive</Link>
            <Link to="/about">About</Link>
        </nav>
    )
}