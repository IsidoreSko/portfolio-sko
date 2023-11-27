import "./contact.css";
import NavBar from "../../Layout/Header/Header";
import ContactForm from "../../Components/Form/Form";

function Contact() {
  return (
    <section id="contact">
      <NavBar />
      <div className="contact-container">
        <h3>Contactez-moi</h3>
      </div>
      <ContactForm />
    </section>
  );
}

export default Contact;
