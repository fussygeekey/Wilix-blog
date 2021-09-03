import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <ul className="list-group list-group-horizontal">
                <li className="list-group-item">
                    <Link to="/" className="text-decoration-none">
                        Home
                    </Link>
                </li>
                <li className="list-group-item">
                    <Link to="/register" className="text-decoration-none">
                        Sign in
                    </Link>
                </li>
                <li className="list-group-item">
                    <Link to="/login" className="text-decoration-none">
                        Sign up
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

const Header = () => {
    return (
        <header className="shadow-sm mb-5 pt-2 pb-2 bg-white">
            <div className="container d-flex justify-content-between align-items-center">
                <Link to="/" className="text-decoration-none">
                    <h1 className="h1">
                        Wilix Blog
                    </h1>
                </Link>
                <NavBar />
            </div>
        </header>
    );
};

export default Header;