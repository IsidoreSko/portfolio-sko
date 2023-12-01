import "./form.css";

import { useState } from "react";
import { TextField, Button, Grid, Box } from "@mui/material";
import emailjs from "emailjs-com";

import Contact from "../../Assets/pictures/contact.png";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs
      .send(
        "service_m0ucmmq",
        "template_qbg62go",
        templateParams,
        "vpxND3Whh9p5bgq1a"
      )
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
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ height: "100%" }}
      >
        <Grid item xs={12} md={4} sx={{}}>
          <Box sx={{ p: 2 }}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      className="blink-contact"
                      src={Contact}
                      alt="Contact"
                      style={{
                        width: "18rem",
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    sx={{
                      mt: 2,
                      color: "var(--sec-color)",
                      fontSize: "1.2rem",
                      fontWeight: "300",
                      "& .MuiInputLabel-root": {
                        color: "var(--sec-color)",
                      },
                      "& .Mui-focused .MuiInputLabel-root": {
                        color: "var(--sec-color)",
                        transform: "translate(14px, -6px) scale(0.75)",
                      },
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "var(--sec-color)",
                        },
                        "&:hover fieldset": {
                          borderColor: "var(--third-color)",
                        },
                        "&.Mui-focused fieldset": {
                          border: "1px solid var(--sec-color)",
                        },
                      },
                    }}
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
                    sx={{
                      mt: 2,
                      color: "var(--sec-color)",
                      fontSize: "1.2rem",
                      fontWeight: "300",
                      "& .MuiInputLabel-root": {
                        color: "var(--sec-color)",
                      },
                      "& .Mui-focused .MuiInputLabel-root": {
                        color: "var(--sec-color)",
                        transform: "translate(14px, -6px) scale(0.75)",
                      },
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "var(--sec-color)",
                        },
                        "&:hover fieldset": {
                          borderColor: "var(--third-color)",
                        },
                        "&.Mui-focused fieldset": {
                          border: "1px solid var(--sec-color)",
                        },
                      },
                    }}
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
                    sx={{
                      mt: 2,
                      color: "var(--sec-color)",
                      fontSize: "1.2rem",
                      fontWeight: "300",
                      "& .MuiInputLabel-root": {
                        color: "var(--sec-color)",
                      },
                      "& .Mui-focused .MuiInputLabel-root": {
                        color: "var(--sec-color)",
                        transform: "translate(14px, -6px) scale(0.75)",
                      },
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "var(--sec-color)",
                        },
                        "&:hover fieldset": {
                          borderColor: "var(--third-color)",
                        },
                        "&.Mui-focused fieldset": {
                          border: "1px solid var(--sec-color)",
                        },
                      },
                    }}
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
                      border: "1px solid var(--sec-color)",
                      color: "var(--sec-color)",
                      fontSize: "1.2rem",
                      fontWeight: "300",
                    }}
                  >
                    Submit
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
