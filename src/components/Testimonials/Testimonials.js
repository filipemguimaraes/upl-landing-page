import React from "react";
import { Box, Typography, Paper, Button } from "@mui/material";
import "./Testimonials.css";

export const Testimonials = () => {
  return (
    <Box className="testimonials-section">
      <Typography variant="h4" className="testimonials-title">
        Testemunhos de membros
      </Typography>

      <Box className="testimonials">
        <Paper className="testimonial" elevation={3}>
          <Typography variant="body1">
            "Tive oportunidade de contactar, de forma muito direta, com
            conivências entre núcleos e órgãos centrais, que me pareceram no
            mínimo incompatíveis com um partido que se diz liberal. Para além
            disso estou desiludido com a oportunidade falhada que a IL teve
            nestas últimas eleições, fruto de uma estratégia divisionista da CE
            e que se revelou desastrosa." - Tiago
          </Typography>
        </Paper>

        <Paper className="testimonial" elevation={3}>
          <Typography variant="body1">
            "Decidi juntar-me ao partido uma vez que me identifico totalmente
            com o liberalismo em toda a linha, por este defendido. Acredito que
            este liberalismo tem espaço para crescer em Portugal. Porém, para
            que este crescimento seja possível, o partido tem de aplicar tais
            conceitos internamente, promovendo maior coerência." - Mário
          </Typography>
        </Paper>

        <Paper className="testimonial" elevation={3}>
          <Typography variant="body1">
            "Sou um mero militante da IL que não ambiciona fazer carreira
            política, mas que acredita e quer ajudar a fazer um Portugal melhor
            para as futuras gerações. Faço parte do grupo de militantes que está
            descontente com o rumo que o partido seguiu nos últimos meses, onde
            na minha opinião ficou evidente a falta de estratégia política para
            o seu eleitorado, mas infelizmente a estratégia/agenda pessoal
            passaram a ser 'normal'." - Frederico
          </Typography>
        </Paper>

        <Paper className="testimonial" elevation={3}>
          <Typography variant="body1">
            "Para espanto meu, encontrei a maioria das ideias certas, mas o
            partido errado. Parece um contrassenso, mas o tempo, cerca de dois
            anos, demonstrou-me que era mesmo assim: Um partido de ideias
            genericamente liberais, mas com uma estrutura completamente
            iliberal, centralista e com 'jeitos' ditatoriais, pior que o PCP que
            eu combati toda a minha vida." - João
          </Typography>
        </Paper>

        <Paper className="testimonial" elevation={3}>
          <Typography variant="body1">
            "Juntei-me à IL em 2021 porque o liberalismo faz todo o sentido e
            faz falta a Portugal. Estamos juntos nesta missão, de construir um
            Portugal melhor, mais liberal." - Filipe
          </Typography>
        </Paper>
      </Box>

      <Button variant="contained" className="cta-button">
        JUNTA-TE A ESTES E OUTROS MEMBROS NA NOSSA COMUNIDADE NO WHATSAPP!
      </Button>
    </Box>
  );
};
