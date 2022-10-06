import { ScrollRestoration } from "react-router-dom";

// comps
import Header from "../layout/Header";
import Footer from "../layout/Footer";

// images
import horizontalProjects from "../../assets/photos/horizontal_projects.png";

const Projects = () => {
    return (
        <div id="projects">
            <Header />
            <section id="hero">
                <img src={horizontalProjects} alt="samiya people" />
            </section>
            <section id="projects-content">
                <section>
                    <h1>Current Projects</h1>
                    <h1>Soccer Programs in the Uganda slums</h1>
                    <p>
                        Praise God for the children’s programs we are running in
                        the slums in Uganda. We thank God for bringing on board
                        two new soccer coaches who are willing to come and
                        volunteer to teach our street children how to play
                        soccer and share the gospel with our young people{" "}
                    </p>
                    <h1>Women’s Skills Training Program in the Slums</h1>
                    <p>
                        Two of our workers have begun a women’s program in the
                        slum where they are teaching women how to sew clothing,
                        to create leather shoes and jewelry to sell in order to
                        have a sustainable business. Our workers have been
                        teaching these women the Bible for 30 mins a day at the
                        beginning of our program and we have seen 7 muslim women
                        come to trust Christ Jesus as their saviour. Pray for
                        our two female workers to have wisdom in facilitating
                        the project and that many other women will trust in
                        Jesus as their Lord and Saviour.
                    </p>
                    <h1>Bible Teaching to Homeless Teenage boys</h1>
                    <p>
                        Give thanks for two of our male workers who have been
                        discipling and teaching the homeless teenage boys in our
                        program about Jesus Christ. We are watching the boys
                        come alive as they recognize that Christ died to save
                        them from the curse of sin and death and to give them
                        new life in him. Seven of our boys were saved and
                        baptized in a rain barrel earlier this year.
                    </p>
                    <h1>Samiya International Training Initiatives</h1>
                    <p>
                        Give thanks for the strong training initiatives Samiya
                        International has begun for college age students and for
                        the fruit we have seen from the coaching training. Pray
                        for the continued success of these initiatives and that
                        God would be guiding and encouraging everyone involved.
                    </p>
                </section>
            </section>
            <Footer />
            <ScrollRestoration />
        </div>
    );
};

export default Projects;
