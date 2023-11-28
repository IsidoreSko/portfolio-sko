import "./form.css";

import { useState } from "react";
import { TextField, Button, Grid, Box } from "@mui/material";

import Contact from "../../Assets/Images/pictures/contact.png";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
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
                        width: "21rem",
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    // sx={{
                    //   border: "1px solid var(--sec-color)",
                    // }}
                    sx={{
                      mt: 2,
                      border: "1px solid var(--sec-color)",
                      color: "var(--sec-color)",
                      fontSize: "1.2rem",
                      fontWeight: "300",
                    }}
                    fullWidth
                    label="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    margin="normal"
                    required
                    InputLabelProps={{
                      style: { color: "var(--sec-color)" },
                    }}
                  />
                  <TextField
                    // sx={{
                    //   border: "1px solid ",
                    // }}
                    sx={{
                      mt: 2,
                      border: "1px solid var(--sec-color)",
                      color: "var(--sec-color)",
                      fontSize: "1.2rem",
                      fontWeight: "300",
                    }}
                    fullWidth
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    margin="normal"
                    required
                    type="email"
                    InputLabelProps={{
                      style: { color: "var(--sec-color)" },
                    }}
                  />
                  <TextField
                    // sx={{
                    //   border: "1px solid var(--sec-color)",
                    // }}
                    sx={{
                      mt: 2,
                      border: "1px solid var(--sec-color)",
                      color: "var(--sec-color)",
                      fontSize: "1.2rem",
                      fontWeight: "300",
                    }}
                    fullWidth
                    label="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    margin="normal"
                    required
                    multiline
                    rows={2}
                    InputLabelProps={{
                      style: { color: "var(--sec-color)" },
                    }}
                    InputProps={{
                      sx: {
                        "& .MuiOutlinedInput-root": {
                          "&.Mui-focused fieldset": {
                            borderColor: "green", // Couleur du cadre lors du focus
                          },
                        },
                      },
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
