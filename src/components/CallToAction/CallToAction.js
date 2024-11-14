import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Divider,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import "./CallToAction.css";

export const CallToAction = () => {
  return (
    <Grid container spacing={4} className="call-to-action">
      <Grid item xs={12} md={6}>
        <Card className="cta-card">
          <CardContent>
            <Typography variant="h5" className="cta-title">
              Adere à nossa Comunidade WhatsApp
            </Typography>
            <Divider className="cta-divider" />
            <Typography variant="body1" className="cta-text">
              Participa diretamente nas discussões que estão a moldar o futuro
              do partido. Unidos, trocamos ideias e definimos o caminho para um
              Portugal mais liberal. Entrar no grupo WhatsApp.
            </Typography>
            <Button variant="contained" color="error" className="cta-button">
              ENTRAR NO GRUPO WHATSAPP
            </Button>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={6}>
        <Card className="cta-card">
          <CardContent>
            <Typography variant="h5" className="cta-title">
              Contribui com um Donativo para a Campanha
            </Typography>
            <Divider className="cta-divider" />
            <Typography variant="body1" className="cta-text">
              O teu apoio financeiro é essencial para mantermos a campanha viva
              e levarmos as nossas ideias a cada canto de Portugal. Cada
              contribuição conta!
            </Typography>
            <Button variant="contained" color="error" className="cta-button">
              FAZER UM DONATIVO
            </Button>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={6}>
        <Card className="cta-card">
          <CardContent>
            <Typography variant="h5" className="cta-title">
              No Dia das Eleições, Vota Lista U
            </Typography>
            <Divider className="cta-divider" />
            <Typography variant="body1" className="cta-text">
              O culminar do nosso trabalho conjunto. No dia das eleições, faz a
              diferença: vota na Lista U para que possamos restaurar os valores
              liberais e construir um futuro mais justo e livre.
            </Typography>
            <Button variant="contained" color="error" className="cta-button">
              INSCREVER-ME NA CONVENÇÃO
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
