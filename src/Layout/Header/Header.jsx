import "./header.css";

import "./header.css";
// import logoSko from "../../Assets/Images/pictures/logoSko.png";

import * as React from "react";
// import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

// function NavBar() {
//   return (
//     <div className="navbar-content">
//       {/* <div>{<img src={logoSko} alt="" />}</div> */}
//       <Stack spacing={2} direction="row-reverse" sx={{ left: "555" }}>
//         <a href="#aboutMe">
//           <Button
//             className="button-nav"
//             sx={{
//               color: "var(--fourth-color)",
//               fontSize: "0.9rem",
//               fontWeight: "900",
//             }}
//             variant="text"
//           >
//             PRESENTATION
//           </Button>
//         </a>
//         <a href="#skills">
//           <Button
//             className="button-nav"
//             sx={{
//               color: "var(--fourth-color)",
//               fontSize: "0.9rem",
//               fontWeight: "900",
//             }}
//             variant="text"
//           >
//             COMPETENCES
//           </Button>
//         </a>
//         <a href="#projects">
//           <Button
//             className="button-nav"
//             sx={{
//               color: "var(--fourth-color)",
//               fontSize: "0.9rem",
//               fontWeight: "900",
//             }}
//             variant="text"
//           >
//             PROJETS
//           </Button>
//         </a>
//         <a href="#contact">
//           <Button
//             className="button-nav"
//             sx={{
//               color: "var(--fourth-color)",
//               fontSize: "0.9rem",
//               fontWeight: "900",
//             }}
//             variant="text"
//           >
//             CONTACTEZ-MOI
//           </Button>
//         </a>
//       </Stack>
//     </div>
//   );
// }

// export default NavBar;

// import * as React from 'react';
// import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";

const buttons = [
  <Button
    key="one"
    sx={{
      borderColor: "var(--fourth-color)",
      // backgroundColor: "var(--third-color)",
    }}
  >
    <a href="#contact">CONTACTEZ-MOI</a>
  </Button>,
  <Button key="two" sx={{ borderColor: "var(--fourth-color)" }}>
    <a href="#projects">PROJETS</a>
  </Button>,
  <Button key="three" sx={{ borderColor: "var(--fourth-color)" }}>
    <a href="#skills">COMPETENCES</a>
  </Button>,
  <Button key="four" sx={{ borderColor: "var(--fourth-color)" }}>
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
        color: "rgb(255, 0, 234)",

        "& > *": {
          m: 1,
        },
      }}
    >
      <ButtonGroup size="large" aria-label="large secondary button group">
        {buttons}
      </ButtonGroup>
    </Box>
  );
}
