import "./form.css";

import { useState } from "react";
import { TextField, Button, Grid, Box } from "@mui/material";
import emailjs from "emailjs-com";

import Contact from "../../Assets/pictures/contact.webp";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Paramètres du modèle du formulaire:
    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    // utilisation de la bibliothèque emailjs:
    emailjs
      .send(
        "service_m0ucmmq",
        "template_qbg62go",
        templateParams,
        "vpxND3Whh9p5bgq1a"
      )

      // Promesses pour la gestion du résultat de l'envoi de l'e-mail:
      .then(
        (response) => {
          console.log(
            "Message envoyé avec succès!",
            response.status,
            response.text
          );
          alert("Message envoyé avec succès !");
          setName("");
          setEmail("");
          setMessage("");
        },
        (err) => {
          console.log("Échec de l'envoi du message.", err);
          alert("Une erreur s'est produite lors de l'envoi du message.");
        }
      );
  };

  return (
    <Box>
      <Grid className="container-form">
        <Grid item xs={12} md={4}>
          <Box sx={{ p: 2 }}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Box className="box-form">
                    <div className="contact-title">
                      <h2>Me contacter</h2>
                      <img
                        className="blink-contact"
                        src={Contact}
                        alt="Contact"
                      />
                    </div>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    className="TextField"
                    fullWidth
                    label="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    margin="normal"
                    required
                    inputProps={{
                      style: { color: "var(--sec-color)" },
                    }}
                    InputProps={{
                      style: { caretColor: "var(--sec-color)" },
                    }}
                  />
                  <TextField
                    className="TextField"
                    fullWidth
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    margin="normal"
                    required
                    type="email"
                    inputProps={{
                      style: { color: "var(--sec-color)" },
                    }}
                    InputProps={{
                      style: { caretColor: "var(--sec-color)" },
                    }}
                  />
                  <TextField
                    className="TextField"
                    fullWidth
                    label="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    margin="normal"
                    required
                    multiline
                    rows={2}
                    inputProps={{
                      style: { color: "var(--sec-color)" },
                    }}
                    InputProps={{
                      style: { caretColor: "var(--sec-color)" },
                    }}
                  />
                  <Button
                    className="submit"
                    variant="outlined"
                    type="submit"
                    sx={{
                      mt: 2,
                    }}
                  >
                    Envoyer
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
