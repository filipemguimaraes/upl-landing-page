import React, { useState } from "react";
import { Typography, Paper, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import doubleQuotesIcon from "../../assets/svg/double-quotes.svg";
import "./Testimonials.css";
import { testimonials } from "../../assets/textConst";

export const Testimonials = () => {
  // State to manage the number of displayed testimonials
  const [visibleTestimonials, setVisibleTestimonials] = useState(3);

  // Function to handle loading more testimonials
  const showMoreTestimonials = () => {
    setVisibleTestimonials(visibleTestimonials + 3);
    window.scrollBy(0, 400);
  };

  // Function to handle showing less testimonials and scrolling up
  const showLessTestimonials = () => {
    setVisibleTestimonials(visibleTestimonials - 3);
    // Scroll the page up by 100px
    window.scrollBy(0, -600);
  };

  return (
    <div className="testimonials-section">
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
          {testimonials
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
