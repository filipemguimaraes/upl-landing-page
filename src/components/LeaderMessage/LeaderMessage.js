import React from "react";
import { Box, Typography, Button } from "@mui/material";
import "./LeaderMessage.css";
import LeaderImage from "../../assets/images/leader-image.jpg";

export const LeaderMessage = () => {
  return (
    <Box className="leader-message">
      <Box className="leader-content">
        <Box className="leader-image-container">
          <img src={LeaderImage} alt="Leader" className="leader-image" />
        </Box>

        <Box className="leader-text-container">
          <Typography variant="h4" className="leader-message-title">
            "Mensagem do candidato"
          </Typography>
          <Button variant="contained" className="leader-button">
            CONHECER RESTANTE DA EQUIPA
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
