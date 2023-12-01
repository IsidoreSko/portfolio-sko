import "./banner.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

function Banner() {
  return (
    <div>
      <div className="banner">
        <div className="port-folio font">Portfolio</div>
        <div className="port-folio">
          <span>&nbsp;Olivier Shmoel Khan&nbsp;</span>
        </div>
      </div>
      <h1 className="">Développeur Web</h1>
      <div className="blink-banner">
        <span>Scroll</span>
        <ArrowDownwardIcon
          style={{ fontSize: "4rem", marginBottom: "-1rem" }}
        />
      </div>
    </div>
  );
}

export default Banner;
