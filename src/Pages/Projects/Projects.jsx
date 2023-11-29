import "./projects.css";
import React from "react";
import Card from "../../Components/Card/Card";
import dataProjets from "../../Assets/Data/dataProjects.json";

function Projects() {
  return (
    <section id="projects">
      <h3>Projets</h3>
      <div className="cards-container">
        {dataProjets.map((dataProjet) => (
          <Card dataProjects={dataProjet} key={dataProjet.id} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
