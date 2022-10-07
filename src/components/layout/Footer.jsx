import { Link } from "react-router-dom";

import samiyaLogo from "../../assets/logos/samiya_logo.png";

const Footer = () => {
    return (
        <footer>
            <img src={samiyaLogo} alt="Samiya logo" />
            <ul>
                <li>
                    <Link to={"/"} preventScrollReset={false}>
                        About
                    </Link>
                </li>
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
        </footer>
    );
};

export default Footer;
