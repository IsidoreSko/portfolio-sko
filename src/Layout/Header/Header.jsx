import "./header.css";
import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

// import Box from "@mui/material/Box";
// import ButtonGroup from "@mui/material/ButtonGroup";

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

// const buttons = [
//   <Button
//     key="one"
//     sx={{
//       borderColor: "var(--sec-color)",
//     }}
//   >
//     <a href="#contact">CONTACTEZ-MOI</a>
//   </Button>,
//   <Button key="two" sx={{ borderColor: "var(--sec-color)" }}>
//     <a href="#projects">PROJETS</a>
//   </Button>,
//   <Button key="three" sx={{ borderColor: "var(--sec-color)" }}>
//     <a href="#skills">COMPETENCES</a>
//   </Button>,
//   <Button key="four" sx={{ borderColor: "var(--sec-color)" }}>
//     <a href="#aboutMe">PRESENTATION</a>
//   </Button>,
// ];

// export default function NavBar() {
//   return (
//     <Box
//       className="navbar-content"
//       sx={{
//         display: "flex",
//         flexDirection: "row-reverse",
//         alignItems: "center",
//         borderRadius: "20px",
//         color: "white",
//         "& > *": {
//           m: 1,
//         },
//       }}
//     >
//       <ButtonGroup size="large" aria-label="large secondary button group">
//         {buttons}
//       </ButtonGroup>
//     </Box>
//   );
// }
