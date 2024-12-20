import React from "react";
import { Card, CardContent, Typography, Button, Divider } from "@mui/material";
import Grid from "@mui/material/Grid2";
import "./CallToAction.css";
import { actions } from "../../assets/textConst";

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
              <Button variant="contained" className="cta-button">
                <a href={action.link} target="_blank" rel="noopener noreferrer">
                  {action.buttonText}
                </a>
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
