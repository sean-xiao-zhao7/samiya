import Header from "../layout/Header";
import Footer from "../layout/Footer";

// images
import homeWide from "../../assets/photos/home_wide.png";

const Home = () => {
    return (
        <div id="home">
            <Header />
            <div id="home_body">
                <section id="hero">
                    <img src={homeWide} alt="samiya people" />
                    <section>
                        Samiya exists to help underprivileged children, youth,
                        and women to rise out of abject poverty and to become
                        kingdom minded Christians who successfully contribute to
                        God's global economy.
                    </section>
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
