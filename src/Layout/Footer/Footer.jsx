import "./footer.css";

import CopyrightIcon from "@mui/icons-material/Copyright";

function Footer() {
  return (
    <div className="footer-container">
      <CopyrightIcon />
      <span className="copyright">
        Olivier Shmoel Khan ; Tous droits réservés
      </span>
    </div>
  );
}

export default Footer;
