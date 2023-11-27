import "./bubbleIcons.css";

import css from "../../Assets/Images/icons/css.png";
import html from "../../Assets/Images/icons/html.png";
import js from "../../Assets/Images/icons/js.png";
import react from "../../Assets/Images/icons/react.jpg";
import vscode from "../../Assets/Images/icons/vscode.jpg";
import gitHub from "../../Assets/Images/icons/gitHub.jpg";
import lighthouse from "../../Assets/Images/icons/lighthouse.jpg";
import swagger from "../../Assets/Images/icons/swagger.jpg";
import sass from "../../Assets/Images/icons/sass.jpg";

import { useParallax } from "react-scroll-parallax";

const bubblesData = [
  {
    id: "a1",
    image: vscode,
    description: "VS code icon",
    name: "Vs Code",
  },
  {
    id: "a2",
    image: react,
    description: "React icon",
    name: "React",
  },
  {
    id: "a3",
    image: css,
    description: "Css icon",
    name: "CSS",
  },
  {
    id: "a4",
    image: html,
    description: "Html icon",
    name: "HTML",
  },
  {
    id: "a5",
    image: js,
    description: "Js icon",
    name: "JavaScript",
  },
  {
    id: "a6",
    image: lighthouse,
    description: "lighthouse icon",
    name: "Lighthouse",
  },
  {
    id: "a7",
    image: gitHub,
    description: "GitHub icon",
    name: "GitHub",
  },
  {
    id: "a8",
    image: sass,
    description: "Sass icon",
    name: "Sass",
  },
  {
    id: "a9",
    image: swagger,
    description: "Svagger icon",
    name: "Swagger",
  },
];

function BubbleIcons() {
  const parallax = useParallax({ scale: [0, 1] });

  return (
    <>
      <ul ref={parallax.ref}>
        {bubblesData.map((bubble) => (
          <li className="icons" key={bubble.id}>
            <img src={bubble.image} alt={bubble.description} />
            <span className="name">{bubble.name}</span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default BubbleIcons;
