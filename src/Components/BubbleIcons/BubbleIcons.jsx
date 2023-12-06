import "./bubbleIcons.css";
import dataSkills from "../../Assets/Data/dataSkills.json";

function BubbleIcons() {
  const bubblesData = dataSkills;

  return (
    <ul className="ul-icon">
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
