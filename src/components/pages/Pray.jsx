import { ScrollRestoration } from "react-router-dom";

// comps
import Header from "../layout/Header";
import Footer from "../layout/Footer";

// images
import horizontalPlaying from "../../assets/photos/horizontal_praying.png";

const Pray = () => {
    return (
        <div id="pray">
            <div id="pray-first">
                <Header />
                <section id="hero">
                    <img src={horizontalPlaying} alt="samiya people" />
                    <section>
                        <h1>Prayer is Vital to Global Missions</h1>
                        Prayer for global missions changes our hearts as we
                        learn more about the world and rejoice in lives changed
                        by the gospel.
                        <button type="button">
                            <a href="#current-prayers">
                                Current prayers <span>⇩</span>
                            </a>
                        </button>
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
                </section>
            </div>
            <section id="current-prayers">
                <section>
                    <h1>Praying for Builders</h1>
                    Pray for builders to come and build new buildings for our
                    children in the slums. Pray that God would burden short term
                    teams from North American and Europe to come to Africa and
                    build schools and homes where the kids we support can live
                    and attend school.
                </section>
                <section>
                    <h1>Lift up the financial needs of Samiya</h1>
                    Lift up the financial needs of Samiya International. We are
                    praying and trusting God for more financial support so that
                    we can continue our ministries. We are specifically trusting
                    God for the finances to pay for 1 year of rent on our office
                    and for 1 year of rent on our directors home in order to
                    allow our project to be sustainable.
                </section>
            </section>
            <section id="specific-prayers">
                <section>
                    <h1>More to pray for </h1>
                    <ul>
                        <li>
                            Join us in praying for our missionary families, new
                            believers, and the work of planting new churches
                            among unreached people groups.
                        </li>
                        <li>
                            Form a prayer group that meets regularly. Use the
                            monthly prayer calendar as well as updates you
                            receive from Samiya International to form a prayer
                            team that consistently and routinely blesses our
                            ministry.
                        </li>
                        <li>
                            Take a different kind of mission trip and pray
                            on-site at one of our Samiya International field
                            locations. Locations vary each year – contact us for
                            details!
                        </li>
                        <li>
                            Pray for missionaries, specifically that God will
                            continue to make us aware of the needs of the people
                            we serve and how to most effectively reach them with
                            the Good News.
                        </li>
                        <li>
                            Pray for the world—that God’s glory will be known
                            among the unreached, the suffering, the poor, and
                            the persecuted.
                        </li>
                    </ul>
                </section>
            </section>
            <Footer />
            <ScrollRestoration />
        </div>
    );
};

export default Pray;
