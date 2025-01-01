import React, { useState } from "react";
import { Box, Typography, Button, Modal } from "@mui/material";
import Grid from "@mui/material/Grid2";
import "./Team.css";
import { members } from "../../assets/textConst";
import { getImages } from "../../assets/utils";

export const Team = () => {
  const teamImage = getImages();
  const [open, setOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  const handleOpen = (member) => {
    setSelectedMember(member);
    setOpen(true);
  };

  const handleClose = () => {
    setSelectedMember(null);
    setOpen(false);
  };

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
          <Typography variant="h6" className="member-name">
            {member.name}
          </Typography>
          <Typography variant="body2" className="member-title">
            {member.title}
          </Typography>
          <Button
            variant="contained"
            className="team-button"
            size="small"
            onClick={() => handleOpen(member)}
            style={{ marginTop: "6px" }}
          >
            Ver Biografia
          </Button>
        </Box>
      ))}

      {selectedMember && (
        <Modal open={open} onClose={handleClose}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "80%",
              maxWidth: 400,
              maxHeight: "80vh",
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 4,
              borderRadius: "8px",
              overflowY: "auto",
            }}
          >
            <img
              src={teamImage[selectedMember.photo]}
              alt={selectedMember.name}
              style={{
                width: "100%",
                borderRadius: "8px",
                marginBottom: "15px",
              }}
            />
            <Typography variant="h6" gutterBottom>
              {selectedMember.name}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {selectedMember.city}
            </Typography>
            <Typography variant="body2" gutterBottom>
              {selectedMember.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {selectedMember.bio || "Biography not available."}
            </Typography>
            <Button
              variant="contained"
              className="close-team-button"
              onClick={handleClose}
              style={{ marginTop: "15px" }}
            >
              Fechar
            </Button>
          </Box>
        </Modal>
      )}
    </Box>
  );
};
