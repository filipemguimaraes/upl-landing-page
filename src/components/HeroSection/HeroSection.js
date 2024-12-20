import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import "./HeroSection.css";

export const HeroSection = () => {
  return (
    <Grid container xs={12} id="hero-section" className="hero-section">
      <Grid item xs={12} className="hero-content">
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
          <a
            href="https://www.unidospeloliberalismo.pt/_files/ugd/cb2a52_3d6a20f645134306b292574dd0cec699.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            CONHECE O NOSSO MANIFESTO
          </a>
        </Button>
      </Grid>
      <Grid item xs={12} className="join-us">
        <Button variant="contained" className="join-button">
          JUNTA-TE A NÓS!
        </Button>
      </Grid>
      <Grid item xs={12} className="pink-line" />
    </Grid>
  );
};
