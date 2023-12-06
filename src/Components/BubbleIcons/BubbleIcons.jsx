import "./bubbleIcons.css";
import dataSkills from "../../Assets/Data/dataSkills.json";

import { useParallax } from "react-scroll-parallax";

function BubbleIcons() {
  const parallax = useParallax({ scale: [0, 0.9] });
  const bubblesData = dataSkills;

  return (
    <ul ref={parallax.ref}>
      {bubblesData.map((bubble) => (
        <li className="icons" key={bubble.id}>
          <img src={bubble.image} alt={bubble.description} />
          <span className="name">{bubble.name}</span>
        </li>
      ))}
    </ul>
  );
}

export default BubbleIcons;
