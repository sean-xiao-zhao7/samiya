import { ScrollRestoration } from "react-router-dom";

// comps
import Header from "../layout/Header";
import Footer from "../layout/Footer";

// images
import horizontalContact from "../../assets/photos/horizontal_contact.png";

const Contact = () => {
    return (
        <div id="contact">
            <Header />
            <section id="hero">
                <img src={horizontalContact} alt="samiya people" />
            </section>
            <section id="contact-content">
                <section>
                    <h1>Contact Samiya</h1>
                    <p>
                        Thank you for caring enough about prayer to reach this
                        page! May you grow in faith and joy as you partner with
                        us in praying for the nations.
                    </p>
                </section>
            </section>
            <Footer />
            <ScrollRestoration />
        </div>
    );
};

export default Contact;
