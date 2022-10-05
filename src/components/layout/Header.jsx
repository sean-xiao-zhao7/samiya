import { Link } from "react-router-dom";

// images
import samiyaLogo from "../../assets/logos/samiya_logo.png";

const Header = ({ introElementRef }) => {
    let aboutUsEl;
    if (introElementRef) {
        aboutUsEl = (
            <a
                href="#"
                onClick={(e) => {
                    e.preventDefault();
                    introElementRef.current.scrollIntoView({
                        behavior: "smooth",
                    });
                }}
            >
                About Us
            </a>
        );
    } else {
        aboutUsEl = <Link to={"/"}>About Us</Link>;
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
                    <a href="#">Projects</a>
                </li>
                <li>
                    <a href="#">Donate</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
        </header>
    );
};

export default Header;
