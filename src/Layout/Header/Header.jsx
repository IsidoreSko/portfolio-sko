import "./header.css";
import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function TextButtons() {
  return (
    <div>
      <Stack direction="row" spacing={2} className="navbar-content">
        <Button>
          <a href="#aboutMe">PRESENTATION</a>
        </Button>
        <Button>
          <a href="#skills">COMPETENCES</a>
        </Button>
        <Button>
          <a href="#projects">PROJETS</a>
        </Button>
        <Button>
          <a href="#contact">CONTACTEZ-MOI</a>
        </Button>
      </Stack>
    </div>
  );
}
