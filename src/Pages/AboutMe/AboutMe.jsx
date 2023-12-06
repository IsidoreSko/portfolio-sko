import "./aboutMe.css";

import Pic from "../../Assets/pictures/pic.webp";

function AboutMe() {
  return (
    <section id="aboutMe">
      <div className="to-present">
        <p>
          "Animé par la passion pour les technologies d'avenir, j'ai entrepris
          une reconversion professionnelle dans le secteur dynamique du
          développement web. Mon parcours m'a mené à suivre une formation
          rigoureuse en intégration et développement web chez OpenClassrooms, où
          j'ai obtenu un titre RNCP de niveau 5, équivalent à un bac +2. Au
          cours de cette formation, j'ai développé des compétences solides en
          création d'applications web. Conscient de l'évolution constante dans
          ce domaine, je suis déterminé à continuer d'apprendre et d'élargir mes
          compétences pour rester à la pointe de la technologie. Je suis à la
          recherche d'une opportunité où je pourrais apporter ma contribution
          tout en continuant à grandir professionnellement dans l'univers
          passionnant du développement web."
        </p>
      </div>
      <div className="title-pic">
        <h2>A propos de moi</h2>
        <img className="pic-me" src={Pic} alt="Olivier Shmoel Khan portrait" />
      </div>
    </section>
  );
}

export default AboutMe;
