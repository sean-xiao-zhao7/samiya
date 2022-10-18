import { useRef } from "react";

// comps
import Header from "../layout/Header";
import Footer from "../layout/Footer";

// images
import verticalSitting from "../../assets/photos/vertical_sitting.jpeg";
import verticalSittingYellow from "../../assets/photos/vertical_sitting_yellow.jpeg";
import homeWide from "../../assets/photos/home_wide.jpeg";
import horizontalSitting from "../../assets/photos/horizontal_sitting.jpeg";

const Home = () => {
    const introElementRef = useRef(null);

    return (
        <div id="home">
            <div id="home-first">
                <Header introElementRef={introElementRef} />
                <section id="hero">
                    <img src={homeWide} alt="samiya people" />
                    <section>
                        Samiya International is a global mission agency
                        committed to church planting among the poor and the
                        marginalized in unreached nations around the world.
                        <button type="button">
                            <a href="#intro">Learn more</a>
                        </button>
                        <button type="button">
                            <a
                                href="https://www.paypal.com/donate/?hosted_button_id=32LAEJ9YFPLZE"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Support us
                            </a>
                        </button>
                    </section>
                </section>
            </div>
            <section id="intro" ref={introElementRef}>
                <img src={verticalSitting} alt="samiya people sitting" />
                <section>
                    <h1>
                        Samiya International equips and empowers orphans and
                        widows
                    </h1>
                    <h1>
                        to become successful entrepreneurs and leaders in their
                        community, revealing to each child, woman and teen how
                        God sees them in the Bible.
                    </h1>

                    <h1>
                        Empowering them to become whom God created them to be by
                        providing high-quality education, and meeting their
                        basic needs of food clothing and shelter.
                    </h1>
                </section>
            </section>
            <section id="whatwillyoudo">
                <section>
                    <h1>What will you do?</h1>
                    <h1>
                        Samiya International specializes in connecting North
                        American churches with God's heart for the unreached
                        poor worldwide.
                    </h1>
                    <h1>
                        James 1:27 tells us that “religion that is pure and
                        faultless is this, to look after widows and orphans in
                        their distress and to keep oneself from being polluted
                        by the world.”
                    </h1>
                    <button type="button">
                        <a
                            href="https://www.paypal.com/donate/?hosted_button_id=32LAEJ9YFPLZE"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Support us!
                        </a>
                    </button>
                </section>
                <img src={horizontalSitting} alt="samiya people" />
            </section>
            <section id="newsletter">
                <section>
                    <h1>Follow us!</h1>
                    <h1>Sign up for Samiya International's newsletter:</h1>
                    <h1>Updates from our missions agency.</h1>
                    <h1>
                        Prayers for supporting Samiya International's church
                        planting efforts worldwide.
                    </h1>
                    <button type="button">Subscribe</button>
                </section>
                <img src={verticalSittingYellow} alt="samiya people sitting" />
            </section>
            <Footer />
        </div>
    );
};

export default Home;
