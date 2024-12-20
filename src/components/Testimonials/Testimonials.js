import React from "react";
import { Typography, Paper, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import doubleQuotesIcon from "../../assets/svg/double-quotes.svg";
import "./Testimonials.css";
import { testimonials } from "../../assets/textConst";

export const Testimonials = () => {
  return (
    <div className="testimonials-section">
      <Grid container justifyContent="center" spacing={4}>
        <Grid
          item
          xs={12}
          md={3}
          className="left-section"
          display="flex"
          flexDirection="column"
        >
          <Typography variant="h4" className="testimonials-title">
            Testemunhos de membros
          </Typography>
          <img
            src={doubleQuotesIcon}
            alt="Quotes"
            style={{ width: "100%", maxHeight: "200px" }}
          />
        </Grid>

        <Grid item xs={12} md={9} className="right-section">
          {testimonials.map((testimonial, index) => (
            <Paper
              key={index}
              className="testimonial"
              elevation={3}
              style={{ margin: "10px", padding: "20px" }}
            >
              <Typography variant="body1" style={{ whiteSpace: "pre-wrap" }}>
                "{testimonial.quote}"
              </Typography>
              <Typography
                variant="subtitle1"
                style={{
                  fontWeight: "bold",
                  textAlign: "right",
                  marginTop: "10px",
                }}
              >
                - {testimonial.author}
              </Typography>
            </Paper>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" className="testimonials-button">
          <a
            href="https://linktr.ee/unidospeloliberalismo"
            target="_blank"
            rel="noopener noreferrer"
          >
            JUNTA-TE A ESTES E OUTROS MEMBROS NA NOSSA COMUNIDADE NO WHATSAPP!{" "}
          </a>
        </Button>
      </Grid>
    </div>
  );
};
