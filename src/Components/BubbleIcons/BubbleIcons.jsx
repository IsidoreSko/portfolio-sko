import "./bubbleIcons.css";
import dataSkills from "../../Assets/Data/dataSkills.json";

// import css from "../../Assets/Images/icons/css.png";
// import html from "../../Assets/Images/icons/html.png";
// import js from "../../Assets/Images/icons/js.png";
// import react from "../../Assets/Images/icons/react.jpg";
// import redux from "../../Assets/Images/icons/redux.jpg";
// import sass from "../../Assets/Images/icons/sass.jpg";

import { useParallax } from "react-scroll-parallax";

// const bubblesData = [
//   {
//     id: "a1",
//     image: redux,
//     description: "Redux icon",
//     name: "Redux",
//   },
//   {
//     id: "a2",
//     image: react,
//     description: "React icon",
//     name: "React",
//   },
//   {
//     id: "a3",
//     image: css,
//     description: "Css icon",
//     name: "CSS",
//   },
//   {
//     id: "a4",
//     image: html,
//     description: "Html icon",
//     name: "HTML",
//   },
//   {
//     id: "a5",
//     image: js,
//     description: "Js icon",
//     name: "JavaScript",
//   },
//   {
//     id: "a6",
//     image: sass,
//     description: "Sass icon",
//     name: "Sass",
//   },
// ];

function BubbleIcons() {
  const parallax = useParallax({ scale: [0, 1.5] });
  const bubblesData = dataSkills;
  console.log(bubblesData);

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
