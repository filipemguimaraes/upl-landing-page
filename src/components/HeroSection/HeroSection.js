import React from "react";
import { Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import "./HeroSection.css";

export const HeroSection = () => {
  return (
    <Grid container xs={12} id="hero-section" className="hero-section">
      <Grid item xs={12} className="hero-content">
        <Typography variant="h3" id="hero-title">
          O Liberalismo Precisa de Ti
        </Typography>
        <Typography variant="h5" id="hero-subtitle">
          Portugal Precisa de Nós
        </Typography>
        <Typography variant="body1" id="hero-text">
          Este é o momento de fazermos mais e melhor. Não podemos ser apenas
          mais um partido no panorama político. Precisamos de ser a força que
          inspira, que desafia, que lidera. O liberalismo é coragem, é visão, é
          acreditar que o futuro pode ser diferente e que está nas nossas mãos
          construí-lo.
          <br />
          Esta candidatura é muito mais do que uma candidatura à liderança da
          Iniciativa Liberal. Representa a coragem, a abertura, a
          responsabilidade e a ação que têm faltado, não apenas para liderar a
          Iniciativa Liberal, mas para liderar um movimento que devolva ao
          indivíduo a esperança, a confiança e a liberdade. <br />
          Unidos, podemos construir um partido que inspire, que seja
          responsável, que marque nas pessoas um verdadeiro desígnio nacional, o
          desígnio de colocar Portugal dentro das dez economias mais
          desenvolvidas da Europa, que seja corajoso e em que as ações sejam
          mais fortes do que as palavras.
        </Typography>
        <div id="hero-button-container">
          <Button variant="contained">
            <a
              href="https://www.unidospeloliberalismo.pt/_files/ugd/83af3f_c98461c43c5a4d6cafe39c48ab988a91.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              VER MANIFESTO
            </a>
          </Button>

          <Button variant="contained">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSe2GTdXUFEvavO0bZhHeSdQlBELIviU5jNy5r1vxev02gMowQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              SUBSCREVER
            </a>
          </Button>
        </div>
      </Grid>
    </Grid>
  );
};
