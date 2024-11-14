import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import "./HeroSection.css";

export const HeroSection = () => {
  return (
    <Box component="section" id="hero-section" className="hero-section">
      <Grid container>
        <Grid item xs={12} md={6}>
          <Box className="hero-content">
            <Typography variant="h3" className="hero-title">
              O Liberalismo Precisa de Ti
            </Typography>
            <Typography variant="h5" className="hero-subtitle">
              Portugal Precisa de Nós
            </Typography>
            <Typography variant="body1" className="hero-text">
              Para mudar Portugal, temos primeiro de mudar o Partido. Unidos,
              podemos refundar o Partido e devolver-lhe os valores Liberais que
              sempre defendemos. Com coragem e ambição, reformaremos a nossa
              estrutura, restaurando a liberdade, transparência e mérito.
            </Typography>
            <Button variant="contained" className="manifesto-button">
              CONHECE O NOSSO MANIFESTO
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Box className="join-us">
        <Button variant="contained" className="join-button">
          JUNTA-TE A NÓS!
        </Button>
      </Box>
      <Box className="pink-line" />
    </Box>
  );
};
