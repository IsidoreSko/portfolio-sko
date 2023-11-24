import "./aboutMe.css";
import { useParallax } from "react-scroll-parallax";

function AboutMe() {
  const parallax = useParallax({ scale: [0.05, 2.3] });
  return (
    <section id="about-me">
      <h3>Qui suis-je?</h3>
      <div ref={parallax.ref} className="to-present">
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
    </section>
  );
}

export default AboutMe;
