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
                <h1>Current Projects</h1>
                <h1>Soccer Programs in the Uganda slums</h1>
                <p>
                    Praise God for the children’s programs we are running in the
                    slums in Uganda. We thank God for bringing on board two new
                    soccer coaches who are willing to come and volunteer to
                    teach our street children how to play soccer and share the
                    gospel with our young people{" "}
                </p>
                <h1>Soccer Programs in the Uganda slums</h1>
            </section>
            <Footer />
        </div>
    );
};

export default Projects;
