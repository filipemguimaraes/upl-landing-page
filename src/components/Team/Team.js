import React, { useState } from "react";
import { Box, Typography, Button, Modal, IconButton } from "@mui/material";
import Grid from "@mui/material/Grid2";
import "./Team.css";
import { members } from "../../assets/textConst";
import { getImages } from "../../assets/utils";
import CloseIcon from "@mui/icons-material/Close";

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
    <div id="team-page" className="team-page">
      <Typography
        variant="h3"
        id="team-title"
        style={{ textAlign: "center", marginBottom: "20px" }}
      >
        Equipa
      </Typography>
      <Box className="team-section">
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
                width: "400px",
                maxWidth: "76vw",
                maxHeight: "90vh",
                bgcolor: "background.paper",
                boxShadow: 24,
                padding: "28px",
                borderRadius: "8px",
                overflowY: "auto",
                marginTop: "10px",
              }}
            >
              <IconButton
                onClick={handleClose}
                color="inherit"
                style={{
                  position: "absolute",
                  top: "0px",
                  right: "0px",
                }}
              >
                <CloseIcon />
              </IconButton>
              <img
                src={teamImage[selectedMember.photo]}
                alt={selectedMember.name}
                className="member-photo-modal"
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
              <Typography
                variant="body2"
                color="text.secondary"
                className="member-bio"
              >
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
    </div>
  );
};
