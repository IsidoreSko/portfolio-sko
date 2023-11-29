import "./card.css";

function Card({ dataProjects }) {
  return (
    <div className="card">
      <img
        src={dataProjects.cover}
        alt={dataProjects.title}
        className="card-cover"
      />
      <h2 className="card-title">{dataProjects.title}</h2>
    </div>
  );
}

export default Card;
