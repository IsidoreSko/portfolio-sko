import "./projects.css";
import React from "react";
import Card from "../../Components/Card/Card";
import dataProjects from "../../Assets/Data/dataProjects.json";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import Carousel from "../../Components/Carousel/Carousel";

import GitHubIcon from "@mui/icons-material/GitHub";
import PreviewIcon from "@mui/icons-material/Preview";

function Projects() {
  const [open, setOpen] = React.useState(false);
  const [selectedProjectId, setSelectedProjectId] = React.useState(null);

  const handleOpen = (projectId) => {
    setOpen(true);
    setSelectedProjectId(projectId);
  };

  const handleClose = () => setOpen(false);
  const project = dataProjects.find((item) => item.id === selectedProjectId);

  return (
    <>
      <section id="projects">
        <div className="cards-container">
          <h2>Projets réalisés</h2>
          {dataProjects.map((dataProject) => (
            <Button
              className="button-card"
              key={dataProject.id}
              onClick={() => handleOpen(dataProject.id)}
            >
              <Card dataProjects={dataProject} />
            </Button>
          ))}
        </div>
        <div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box className="modal">
              {project && (
                <Carousel slides={project.images} slidesId={project.id} />
              )}
              <Typography
                id="modal-description"
                sx={{
                  mt: 2,
                }}
              >
                {project && project.description}
              </Typography>
              <div className="project-infos">
                {project && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-href"
                  >
                    <GitHubIcon className="git-eye-icon" />
                    <span className="link-title">Voir le code</span>
                  </a>
                )}
                {project && project.site ? (
                  <a
                    href={project.site}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-href"
                  >
                    <PreviewIcon className="git-eye-icon" />
                    <span className="link-title">Voir le site</span>
                  </a>
                ) : null}
                <p className="project-languages">
                  {project && project.languages.join(", ")}
                </p>
              </div>
            </Box>
          </Modal>
        </div>
      </section>
    </>
  );
}

export default Projects;
