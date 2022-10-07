import { Link } from "react-router-dom";

// images
import samiyaLogo from "../../assets/logos/samiya_logo.png";

const Header = ({ introElementRef }) => {
    let aboutUsEl;
    if (introElementRef) {
        aboutUsEl = (
            <a
                href="/#"
                onClick={(e) => {
                    e.preventDefault();
                    introElementRef.current.scrollIntoView({
                        behavior: "smooth",
                    });
                }}
            >
                About
            </a>
        );
    } else {
        aboutUsEl = <Link to={"/"}>About</Link>;
    }

    return (
        <header>
            <img src={samiyaLogo} alt="Samiya logo" />
            <ul>
                <li>{aboutUsEl}</li>
                <li>
                    <Link to={"/pray"}>Pray</Link>
                </li>
                <li>
                    <Link to={"/projects"}>Projects</Link>
                </li>
                <li>
                    <a
                        href="https://www.paypal.com/donate/?hosted_button_id=32LAEJ9YFPLZE"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Donate
                    </a>
                </li>
                <li>
                    <Link to={"/contact"}>Contact</Link>
                </li>
            </ul>
        </header>
    );
};

export default Header;
