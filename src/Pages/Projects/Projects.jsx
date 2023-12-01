import "./projects.css";
import React from "react";
import Card from "../../Components/Card/Card";
import dataProjects from "../../Assets/Data/dataProjects.json";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import Carousel from "../../Components/Carousel/Carousel";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  height: "450px",
  bgcolor: "var(--sec-color)",
  border: "4px solid var(--fourth-color)",
  boxShadow: 24,
  p: 4,
  borderRadius: "30px",
};

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
        <h2>Projets réalisés</h2>
        <div className="cards-container">
          {dataProjects.map((dataProjet) => (
            <Button
              key={dataProjet.id}
              onClick={() => handleOpen(dataProjet.id)}
              style={{
                margin: "0px",
                padding: "0px",
              }}
            >
              <Card dataProjects={dataProjet} />
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
            <Box sx={style}>
              {project && (
                <Carousel slides={project.images} slidesId={project.title} />
              )}
              <Typography
                id="modal-modal-description"
                sx={{ mt: 2, textAlign: "justify", fontSize: "1.2rem" }}
              >
                {project && project.description}
              </Typography>
            </Box>
          </Modal>
        </div>
      </section>
    </>
  );
}

export default Projects;
