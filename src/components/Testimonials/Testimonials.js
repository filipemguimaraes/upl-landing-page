import React from "react";
import { Typography, Paper, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import doubleQuotesIcon from "../../assets/svg/double-quotes.svg";
import "./Testimonials.css";

export const Testimonials = () => {
  return (
    <div className="testimonials-section">
      <Grid container justifyContent="center" spacing={4}>
        <Grid
          item
          xs={12}
          md={3}
          className="left-section"
          display="flex"
          flexDirection="column"
        >
          <Typography variant="h4" className="testimonials-title">
            Testemunhos de membros
          </Typography>
          <img
            src={doubleQuotesIcon}
            alt="Quotes"
            style={{ width: "100%", maxHeight: "200px" }}
          />
        </Grid>

        <Grid item xs={12} md={9} className="right-section">
          {testimonials.map((testimonial, index) => (
            <Paper
              key={index}
              className="testimonial"
              elevation={3}
              style={{ margin: "10px", padding: "20px" }}
            >
              <Typography variant="body1" style={{ whiteSpace: "pre-wrap" }}>
                "{testimonial.quote}"
              </Typography>
              <Typography
                variant="subtitle1"
                style={{ textAlign: "right", marginTop: "10px" }}
              >
                - {testimonial.author}
              </Typography>
            </Paper>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" className="testimonials-button">
          JUNTA-TE A ESTES E OUTROS MEMBROS NA NOSSA COMUNIDADE NO WHATSAPP!
        </Button>
      </Grid>
    </div>
  );
};

const testimonials = [
  {
    author: "Tiago",
    quote:
      "Tive oportunidade de contactar, de forma muito direta, com conivências entre núcleos e órgãos centrais, que me pareceram no mínimo incompatíveis com um partido que se diz liberal. Para além disso estou desiludido com a oportunidade falhada que a IL teve nestas últimas eleições, fruto de uma estratégia divisionista da CE e que se revelou desastrosa.",
  },
  {
    author: "Mário",
    quote:
      "Decidi juntar-me ao partido uma vez que me identifico totalmente com o liberalismo em toda a linha, por este defendido. Acredito que este liberalismo tem espaço para crescer em Portugal. Porém, para que este crescimento seja possível, o partido tem de aplicar tais conceitos internamente, promovendo maior coerência.",
  },
  {
    author: "Frederico",
    quote:
      "Sou um mero militante da IL que não ambiciona fazer carreira política, mas que acredita e quer ajudar a fazer um Portugal melhor para as futuras gerações. Faço parte do grupo de militantes que está descontente com o rumo que o partido seguiu nos últimos meses, onde na minha opinião ficou evidente a falta de estratégia política para o seu eleitorado, mas infelizmente a estratégia/agenda pessoal passaram a ser 'normal'.",
  },
  {
    author: "João",
    quote:
      "Para espanto meu, encontrei a maioria das ideias certas, mas o partido errado. Parece um contrassenso, mas o tempo, cerca de dois anos, demonstrou-me que era mesmo assim: Um partido de ideias genericamente liberais, mas com uma estrutura completamente iliberal, centralista e com 'jeitos' ditatoriais, pior que o PCP que eu combati toda a minha vida.",
  },
  {
    author: "Filipe",
    quote:
      "Juntei-me à IL em 2021 porque o liberalismo faz todo o sentido e faz falta a Portugal. Estamos juntos nesta missão, de construir um Portugal melhor, mais liberal.",
  },
];
