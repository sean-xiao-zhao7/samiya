import samiyaLogo from "../../assets/logos/samiya_logo.png";

const Header = () => {
    return (
        <header>
            <img src={samiyaLogo} alt="Samiya logo" />
            <ul>
                <li>About Us</li>
                <li>Pray</li>
                <li>Projects</li>
                <li>Donate</li>
                <li>Contact</li>
            </ul>
        </header>
    );
};

export default Header;
