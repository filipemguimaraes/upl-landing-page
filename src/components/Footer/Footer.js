import React from "react";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import "./Footer.css";

export const Footer = () => {
  return (
    <Grid container className="footer-container">
      <Grid item xs={12} className="join-us">
        <Button variant="contained" className="join-button">
          <a
            href="https://unidospeloliberalismo.pt/comunidade"
            target="_blank"
            rel="noopener noreferrer"
            className="join-link"
          >
            <WhatsAppIcon className="whatsapp-icon" />
            <span>JUNTA-TE A NÓS!</span>
          </a>
        </Button>
      </Grid>
      <Grid item xs={12} className="pink-line" />
    </Grid>
  );
};
