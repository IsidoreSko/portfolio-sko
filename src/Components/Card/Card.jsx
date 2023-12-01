import "./card.css";

function Card({ dataProjects }) {
  return (
    <div className="card">
      <img
        src={dataProjects.cover}
        alt={dataProjects.title}
        className="card-cover"
      />
    </div>
  );
}

export default Card;
