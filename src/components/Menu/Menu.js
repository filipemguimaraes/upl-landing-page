import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Box from "@mui/material/Box";
import Logo from "../../assets/images/Logo-branco.png";
import "./Menu.css";

export const Menu = ({ position }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppBar
      position={position}
      className={`menu ${scrolled ? "scrolled" : ""}`}
    >
      <Toolbar className="toolbar">
        <div className="nav-links">
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            <a href="#hero-section" className="nav-link">
              INÍCIO
            </a>
          </Typography>
          <Typography variant="h6">
            <a
              href="https://www.unidospeloliberalismo.pt/_files/ugd/cb2a52_3d6a20f645134306b292574dd0cec699.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              MANIFESTO
            </a>
          </Typography>
          <Typography variant="h6">
            <a href="#team-section" className="nav-link">
              EQUIPA
            </a>
          </Typography>
          <Typography variant="h6" className="nav-link">
            MEG
          </Typography>
        </div>

        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>

        <div className="social-media">
          <Typography variant="body1">SEGUE-NOS</Typography>
          <a
            href="https://www.facebook.com/unidospeloliberalismo/?locale=pt_BR"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton color="inherit">
              <FacebookIcon />
            </IconButton>
          </a>
          <a
            href="https://www.instagram.com/unidospeloliberalismo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton color="inherit">
              <InstagramIcon />
            </IconButton>
          </a>
          <a
            href="https://www.youtube.com/channel/UCQXIj_QcRTm2r3Q2esnc35A"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton color="inherit">
              <YouTubeIcon />
            </IconButton>
          </a>
          <IconButton color="inherit">
            <MailOutlineIcon />
          </IconButton>
        </div>
      </Toolbar>
      <Box className="divider"></Box>
    </AppBar>
  );
};
