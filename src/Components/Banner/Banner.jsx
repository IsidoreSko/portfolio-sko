import "./banner.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

function Banner() {
  return (
    <div className="banner">
      <div>
        <div className="port-folio font">Portfolio</div>
        <div className="port-folio">
          <span>&nbsp;Olivier Shmoel Khan&nbsp;</span>
        </div>
      </div>

      <div className="blink">
        <span>Scroll</span>
        <ArrowDownwardIcon
          style={{ fontSize: "4rem", marginBottom: "-1rem" }}
        />
      </div>
    </div>
  );
}

export default Banner;
