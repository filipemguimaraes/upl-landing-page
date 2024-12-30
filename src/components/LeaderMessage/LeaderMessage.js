import React from "react";
import { Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import "./LeaderMessage.css";
import LeaderImage from "../../assets/images/team/Rui_Malheiro.jpg";
import Logo from "../../assets/images/logo-branco.png";

export const LeaderMessage = () => {
  return (
    <Grid container spacing={2} className="leader-message">
      <Grid item xs={12} className="leader-image-container">
        <img src={LeaderImage} alt="Leader" style={{ width: "100%" }} />
      </Grid>
      <Grid item xs={12} className="leader-text-container">
        <Typography variant="h4" className="leader-message-title">
          "Mensagem do candidato"
        </Typography>
        <Button variant="contained" className="leader-button">
          <a href="#team-section" className="nav-link">
            CONHECER RESTANTE DA EQUIPA
          </a>
        </Button>
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
      </Grid>
    </Grid>
  );
};
