import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-dark text-light fixed-bottom pt-3 pb-3">
            <div className="container d-flex justify-content-between align-items-center">
                <Link to="/" className="text-decoration-none">
                    Wilix blog
                </Link>
                <span>
                    © 2021, Wilix blog by Eugene Semenenko
                </span>
            </div>
        </footer>
    );
};

export default Footer;