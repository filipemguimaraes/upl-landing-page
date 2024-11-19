import React from "react";
import { Box, Typography } from "@mui/material";
import "./Team.css";
import { members } from "../../assets/textConst";

export const Team = () => {
  return (
    <Box id="team-section" className="team-section">
      {members.map((member, index) => (
        <Box key={index} className="team-member">
          <Typography variant="body2" className="member-title">
            {member.title}
          </Typography>
          <Typography variant="h6" className="member-name">
            {member.name}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};
