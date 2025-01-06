import React from "react";
import { Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import "./LeaderMessage.css";
import LeaderImage from "../../assets/images/team/Rui_Malheiro_Mensagem.png";
import Logo from "../../assets/images/logo-branco.png";
import LogoLista from "../../assets/images/U-logo-white.png";
import assinaturaRui from "../../assets/images/assinaturarui_white.png";

export const LeaderMessage = () => {
  return (
    <Grid container className="leader-section">
      <Grid
        container
        className="leader-message"
        justifyContent="flex-start"
        alignItems="center"
        style={{ width: "100%" }}
      >
        <Grid item xs={12} md={12} className="leader-text-container">
          <Typography variant="h3" id="leader-title">
            Mensagem do Presidente
          </Typography>
          <Typography variant="body1" className="leader-message-body">
            Liberais, quero-vos manifestar um desejo e uma ambição: deixar um
            Portugal mais liberal para os nossos filhos, para os nossos netos e
            porque não, para nós próprios!
          </Typography>

          <Typography variant="body1" className="leader-message-body">
            O percurso do partido desde a minha entrada em 2020 tem sido
            notável, e é um orgulho fazer parte desta família e ter contribuído
            para que o nosso partido e todos os membros chegassem ao patamar em
            que hoje nos encontramos!
          </Typography>

          <Typography variant="body1" className="leader-message-body">
            No entanto, chegou a altura de darmos um passo em frente, para com
            Coragem Transformarmos Portugal num país mais liberal, em que todos
            tenham a liberdade para serem felizes, sem amarras económicas,
            sociais ou políticas, onde o limite da felicidade de cada um dependa
            apenas do próprio e não do Estado ou de outra entidade externa.
          </Typography>

          <Typography variant="body1" className="leader-message-body">
            Transformar este sonho em realidade só depende de nós, de um
            verdadeiro sobressalto liberal, que, Unidos, podemos concretizar!
          </Typography>

          <Typography variant="body1" className="leader-message-body">
            Liberais, o desafio é grande mas sei exatamente como o alcançar. A
            União entre os liberais, trabalhando Unidos, com respeito pelos
            nossos valores e princípios fundacionais, pode fazer deste partido
            um exemplo na política nacional e catapultar a política nacional
            para um patamar de excelência.
          </Typography>

          <Typography variant="body1" className="leader-message-body">
            Estão à porta umas eleições de proximidade, onde cada indivíduo terá
            a oportunidade de ser um elemento dinamizador do partido na sua
            região. O indivíduo tem uma força extraordinária, mas os nossos
            Núcleos Territoriais, com mais recursos e apoio nacional, terão um
            papel importantíssimo nesta batalha que, como qualquer batalha
            liberal, se deve focar nas suas ideias, na melhoria das condições de
            vida dos portugueses, sustentado no nosso fortíssimo ideário liberal
          </Typography>

          <Typography variant="body1" className="leader-message-body">
            Contem comigo, com a mesma Coragem de sempre, para Transformar
            Portugal!
          </Typography>

          <Typography variant="body1" className="leader-message-body">
            Um abraço,
          </Typography>
        </Grid>
        <Grid item xs={12} md={12} className="leader-image-container">
          <div className="image-fade-container">
            <img
              src={LeaderImage}
              alt="Leader"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </Grid>
        <Grid
          container
          className="leader-logo-container"
          justifyContent="space-around"
          alignItems="center"
          style={{ width: "100%" }}
        >
          <Grid item>
            <div className="signature">
              <img
                src={assinaturaRui}
                alt="assinaturaRui"
                style={{ marginTop: "20px" }}
              />
            </div>
          </Grid>

          <Grid item className="logos-leader-message">
            <div className="logo-lista">
              <img src={LogoLista} alt="Logo da Lista-U" />
            </div>
            <div className="logo">
              <img src={Logo} alt="Logo da Iniciativa Liberal" />
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
