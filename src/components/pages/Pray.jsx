// comps
import Header from "../layout/Header";
import Footer from "../layout/Footer";

// images
import homeWide from "../../assets/photos/home_wide.png";

const Pray = () => {
    return (
        <div id="pray">
            <div id="pray-first">
                <Header />
                <section id="hero">
                    <img src={homeWide} alt="samiya people" />
                    <section>
                        Samiya International is a global mission agency
                        committed to church planting among the poor and the
                        marginalized in unreached nations around the world.
                        <button type="button">Learn more</button>
                        <button type="button">Support us</button>
                    </section>
                </section>
            </div>
            <section id="this-month">
                <h1>Praying for Builders</h1>
                Pray for builders to come and build new buildings for our
                children in the slums. Pray that God would burden short term
                teams from North American and Europe to come to Africa and build
                schools and homes where the kids we support can live and attend
                school.
            </section>
            <Footer />
        </div>
    );
};

export default Pray;
