import Header from "../layout/Header";
import Footer from "../layout/Footer";

// images
import homeWide from "../../assets/photos/home_wide.png";

const Home = () => {
    return (
        <div id="home">
            <div id="home-first">
                <Header />
                <div id="home_body">
                    <section id="hero">
                        <img src={homeWide} alt="samiya people" />
                        <section>
                            Samiya International is a global mission agency
                            committed to church planting among the poor and the
                            marginalized in unreached nations around the world.
                            <button type="button">Learn more</button>
                        </section>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
