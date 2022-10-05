import samiyaLogo from "../../assets/logos/samiya_logo.png";

const Footer = () => {
    return (
        <footer>
            <img src={samiyaLogo} alt="Samiya logo" />
            <ul>
                <li>
                    <a href="">About Samiya</a>
                </li>
                <li>
                    <a href="">Pray with us</a>
                </li>
                <li>
                    <a href="">Projects</a>
                </li>
                <li>
                    <a href="">Donate</a>
                </li>
                <li>
                    <a href="">Contact</a>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;
