import "./header.css";
import * as React from "react";
import Button from "@mui/material/Button";

import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";

const buttons = [
  <Button
    key="one"
    sx={{
      borderColor: "var(--sec-color)",
    }}
  >
    <a href="#contact">CONTACTEZ-MOI</a>
  </Button>,
  <Button key="two" sx={{ borderColor: "var(--sec-color)" }}>
    <a href="#projects">PROJETS</a>
  </Button>,
  <Button key="three" sx={{ borderColor: "var(--sec-color)" }}>
    <a href="#skills">COMPETENCES</a>
  </Button>,
  <Button key="four" sx={{ borderColor: "var(--sec-color)" }}>
    <a href="#aboutMe">PRESENTATION</a>
  </Button>,
];

export default function NavBar() {
  return (
    <Box
      className="navbar-content"
      sx={{
        display: "flex",
        flexDirection: "row-reverse",
        alignItems: "center",
        borderRadius: "20px",
        color: "white",
        // borderColor: "#f0f097",

        "& > *": {
          m: 1,
        },
      }}
      // InputLabelProps={{
      //   style: { color: "var(--sec-color)" },
      // }}
    >
      <ButtonGroup size="large" aria-label="large secondary button group">
        {buttons}
      </ButtonGroup>
    </Box>
  );
}
