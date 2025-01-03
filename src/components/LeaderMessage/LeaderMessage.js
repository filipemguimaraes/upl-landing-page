import React from "react";
import { Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import "./LeaderMessage.css";
import LeaderImage from "../../assets/images/team/Rui_Malheiro_Transparente.png";
import Logo from "../../assets/images/logo-branco.png";
import LogoLista from "../../assets/images/U-logo-white.png";
import assinaturaRui from "../../assets/images/assinaturarui_white.png";

export const LeaderMessage = () => {
  return (
    <Grid container className="leader-section">
      <Grid
        container
        spacing={8}
        className="leader-message"
        justifyContent="space-around"
        alignItems="center"
        style={{ width: "100%" }}
      >
        <Grid item xs={12} md={6} className="leader-text-container">
          <Typography variant="h6" className="leader-message-title">
            "Liberais, quero-vos manifestar um desejo e uma ambição: deixar um
            Portugal mais liberal para os nossos filhos, para os nossos netos e,
            porque não, para nós próprios!
          </Typography>

          <Typography variant="body1" className="leader-message-body">
            O percurso do partido desde a minha entrada em 2020 tem sido
            notável, e é um orgulho fazer parte desta família e ter contribuído
            para que o nosso partido e todos os membros chegassem ao patamar em
            que hoje nos encontramos! No entanto, chegou a altura de darmos um
            passo em frente, para com coragem transformarmos Portugal num país
            mais liberal, em que todos tenham a liberdade para serem felizes,
            sem amarras económicas, sociais ou políticas.
          </Typography>

          <Typography variant="body1" className="leader-message-body">
            Transformar este sonho em realidade só depende de nós. Unidos,
            podemos concretizar este objetivo e fazer deste partido um exemplo
            na política nacional. Estão à porta umas eleições de proximidade,
            onde cada indivíduo terá a oportunidade de ser um elemento
            dinamizador do partido na sua região. O indivíduo tem uma força
            extraordinária, mas os nossos Núcleos Territoriais, com mais
            recursos e apoio nacional, terão um papel importantíssimo nesta
            batalha.
          </Typography>

          <Typography variant="body1" className="leader-message-body">
            Contem comigo, com a mesma coragem de sempre, para transformar
            Portugal!
          </Typography>

          <div className="signature">
            <Typography variant="body1" className="leader-message-body">
              Um abraço."
            </Typography>
            <img src={assinaturaRui} alt="assinaturaRui" />
          </div>
        </Grid>
        <Grid item xs={12} md={3} className="leader-image-container">
          <img
            src={LeaderImage}
            alt="Leader"
            style={{ width: "100%", height: "auto" }}
          />
        </Grid>
        <Grid
          container
          className="leader-logo-container"
          justifyContent="space-around"
          alignItems="center"
          style={{ width: "100%" }}
        >
          <Grid item>
            <Button
              variant="contained"
              className="leader-button"
              aria-label="Conhecer restante da equipa"
            >
              <a href="#team-section" className="nav-link">
                CONHECER RESTANTE DA EQUIPA
              </a>
            </Button>
          </Grid>
          <Grid item>
            <div className="logo-lista">
              <img src={LogoLista} alt="Logo da Lista-U" />
            </div>
          </Grid>
          <Grid item>
            <div className="logo">
              <img src={Logo} alt="Logo da Iniciativa Liberal" />
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
