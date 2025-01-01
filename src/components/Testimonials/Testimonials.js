import React, { useState, useMemo } from "react";
import { Typography, Paper, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import doubleQuotesIcon from "../../assets/svg/double-quotes.svg";
import "./Testimonials.css";
import { testimonials } from "../../assets/textConst";

const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const Testimonials = () => {
  const shuffledTestimonials = useMemo(
    () => shuffleArray(testimonials),
    [testimonials]
  );

  const [visibleTestimonials, setVisibleTestimonials] = useState(3);

  const showMoreTestimonials = () => {
    setVisibleTestimonials(visibleTestimonials + 3);
    window.scrollBy(0, 400);
  };

  const showLessTestimonials = () => {
    setVisibleTestimonials(visibleTestimonials - 3);
    window.scrollBy(0, -600);
  };

  return (
    <div id="testimonials-section" className="testimonials-section">
      <Grid container justifyContent="center">
        <Grid
          item
          xs={12}
          md={3}
          className="left-section"
          display="flex"
          flexDirection="column"
        >
          <Typography variant="h5" className="testimonials-title">
            Testemunhos de membros
          </Typography>
          <img
            src={doubleQuotesIcon}
            alt="Quotes"
            style={{ width: "100%", maxHeight: "100px" }}
          />
        </Grid>

        <Grid item xs={12} md={9} className="right-section">
          {shuffledTestimonials
            .slice(0, visibleTestimonials)
            .map((testimonial, index) => (
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
          <Grid container justifyContent="center" spacing={4}>
            {visibleTestimonials < testimonials.length && (
              <Grid item xs={12} style={{ textAlign: "center" }}>
                <Button
                  className="show-button show-more"
                  onClick={showMoreTestimonials}
                >
                  Ver mais testemunhos
                </Button>
              </Grid>
            )}

            {visibleTestimonials > 3 && (
              <Grid item xs={12} style={{ textAlign: "center" }}>
                <Button
                  className="show-button show-less"
                  onClick={showLessTestimonials}
                >
                  Ver menos testemunhos
                </Button>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
