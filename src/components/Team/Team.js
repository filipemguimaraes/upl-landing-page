import React from "react";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import "./Team.css";
import { members } from "../../assets/textConst";
import { getImages } from "../../assets/utils";

export const Team = () => {
  const teamImage = getImages();
  return (
    <Box id="team-section" className="team-section">
      {members.map((member, index) => (
        <Box key={index} className="team-member">
          <Grid item xs={12} className="member-image-container">
            <img
              src={teamImage[member.photo]}
              alt={member.name}
              style={{ width: "100%" }}
            />
          </Grid>
          <Typography variant="body2" className="member-title">
            {member.title}
          </Typography>
          <Typography variant="h6" className="member-name">
            {member.name}
          </Typography>
          <Typography variant="body2">{member.city}</Typography>
        </Box>
      ))}
    </Box>
  );
};
