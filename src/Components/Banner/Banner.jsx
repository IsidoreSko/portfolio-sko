import "./banner.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

function Banner() {
  return (
    <div>
      <div className="banner">
        <div className="port-folio font">Portfolio</div>
        <div className="port-folio">
          <span>Olivier Shmoel Khan</span>
        </div>
      </div>
      <h1 className="">Développeur Web front-end</h1>
      <div className="blink-banner">
        <span>Scroll</span>
        <ArrowDownwardIcon className="arrow" />
      </div>
    </div>
  );
}

export default Banner;
