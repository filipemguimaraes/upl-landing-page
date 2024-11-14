import React from "react";
import { Card, CardContent, Typography, Button, Divider } from "@mui/material";
import Grid from "@mui/material/Grid2";
import "./CallToAction.css";

// Array containing the actions
const actions = [
  {
    title: "Adere à nossa Comunidade WhatsApp",
    text: "Participa diretamente nas discussões que estão a moldar o futuro do partido. Unidos, trocamos ideias e definimos o caminho para um Portugal mais liberal. Entrar no grupo WhatsApp.",
    buttonText: "ENTRAR NO GRUPO WHATSAPP",
  },
  {
    title: "Contribui com um Donativo para a Campanha",
    text: "O teu apoio financeiro é essencial para mantermos a campanha viva e levarmos as nossas ideias a cada canto de Portugal. Cada contribuição conta!",
    buttonText: "FAZER UM DONATIVO",
  },
  {
    title: "No Dia das Eleições, Vota Lista U",
    text: "O culminar do nosso trabalho conjunto. No dia das eleições, faz a diferença: vota na Lista U para que possamos restaurar os valores liberais e construir um futuro mais justo e livre.",
    buttonText: "INSCREVER-ME NA CONVENÇÃO",
  },
];

export const CallToAction = () => {
  return (
    <Grid container spacing={4} className="call-to-action">
      {actions.map((action, index) => (
        <Grid item xs={12} md={6} key={index}>
          <Card className="cta-card">
            <CardContent>
              <Typography variant="h5" className="cta-title">
                {action.title}
              </Typography>
              <Divider className="cta-divider" />
              <Typography variant="body1" className="cta-text">
                {action.text}
              </Typography>
              <Button variant="contained" color="error" className="cta-button">
                {action.buttonText}
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
