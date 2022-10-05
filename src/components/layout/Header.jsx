import samiyaLogo from "../../assets/logos/samiya_logo.png";

const Header = ({ introElementRef }) => {
    return (
        <header>
            <img src={samiyaLogo} alt="Samiya logo" />
            <ul>
                <li>
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
                </li>
                <li>
                    <a href="#">Pray</a>
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
