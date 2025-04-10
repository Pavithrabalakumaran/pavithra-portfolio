import React from "react";
import "./style.css";
import zomato from "../../download (1).jfif";
import covid from "../../covid.jfif"
import todo from "../../todo.jfif"
import netflix from "../../netflix.png"
import goa from "../../goa.jfif"
import digilearn from "../../digilearn.jpg"
import cslogo from "../../cslogo.svg"

const Projects = () => {
  return (
    <section id="projects">
      <div className="projects-container">
        <h2 className="projects-heading">Projects</h2>

        <div className="projects-grid">

        <div className="project-card">
            <img src={cslogo} className="project-image" alt="DigiLearn" />
            <h3 className="project-title">ClinixSphere</h3>
            <p className="project-description">
            Designed and implemented a fully responsive healthcare company portfolio website from Figma wireframes iwhich also includes a blog section with full CRUD operations and pagination for both admins and users.


            </p>
            <a href="https://www.clinixsphere.in/" className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>

        <div className="project-card">
            <img src={digilearn} className="project-image" alt="DigiLearn" />
            <h3 className="project-title">DigiLearn</h3>
            <p className="project-description">
            DigiLearn is an online learning platform designed to help users to acquire new skills. The UI is designed for ease of navigation, allowing to select courses based on their interests.


            </p>
            <a href="https://digi-learn-two.vercel.app/" className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>

          <div className="project-card">
            <img src={zomato} className="project-image" alt="Zomato" />
            <h3 className="project-title">Zomato Clone</h3>
            <p className="project-description">
              Constructed a static online food ordering service akin to Swiggy/Zomato,
              enabling users to see top restaurants and their details.
            </p>
            <a href="https://zomato-clone-pavithra.netlify.app/" className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>

          <div className="project-card">
            <img src={covid} className="project-image" alt="Covid Dashboard" />
            <h3 className="project-title">Covid Dashboard</h3>
            <p className="project-description">
              Developed a platform to track Covid-19 cases in India state-wise, utilizing
              React Router and Recharts for dynamic data visualization.
            </p>
            <a href="https://coviddbpavi.ccbp.tech/" className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>

          <div className="project-card">
            <img src={todo} className="project-image" alt="Todos Application" />
            <h3 className="project-title">Todos Application</h3>
            <p className="project-description">
              Built a To-Do List app using HTML, CSS, and JavaScript with real-time task
              updates, responsive design, and local storage for data persistence.
            </p>
            <a href="https://todosjsprjt.ccbp.tech/" className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>

          <div className="project-card">
            <img src={netflix} className="project-image" alt="Covid Dashboard" />
            <h3 className="project-title">Netflix</h3>
            <p className="project-description">
            Built a visually appealing Netflix clone using HTML for structure and CSS for styling to replicate the popular
streaming platform’s interface.

            </p>
            <a href="https://statuesque-clone-ntflix.netlify.app/" className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>

          <div className="project-card">
            <img src={goa} className="project-image" alt="Goa tourism" />
            <h3 className="project-title">Goa - Tourism Website</h3>
            <p className="project-description">
            It is curated with high-quality content highlighting key
            attractions, events, and cultural experiences.
            </p>
            <a href="https://exploregoav2.ccbp.tech/" className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
