import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Logo from "../../assets/images/logo-branco.png";
import "./Menu.css";
import { drawerItems, drawerSocialMedia } from "../../assets/textConst";

export const Menu = ({ position }) => {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isBelow1100px, setIsBelow1100px] = useState(false);
  const [isBelow700px, setIsBelow700px] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsBelow1100px(window.innerWidth < 1100);
      setIsBelow700px(window.innerWidth < 700);
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    // Initial size check
    handleResize();

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <AppBar
      position={position}
      className={`menu ${scrolled ? "scrolled" : ""}`}
    >
      <Toolbar className="toolbar">
        {/* Show Menu Icon and Drawer only if below 600px */}
        <div className="menu-options">
          {position === "fixed" && isBelow700px && (
            <>
              <IconButton
                className="menu-icon"
                color="inherit"
                edge="start"
                onClick={toggleDrawer(true)}
                sx={{ fontSize: "3rem" }} // Adjust font size here
              >
                <MenuIcon fontSize="inherit" />{" "}
                {/* Use 'inherit' to apply the font size from IconButton */}
              </IconButton>

              <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
              >
                <List>
                  {drawerItems.map((item, index) => (
                    <ListItem button onClick={toggleDrawer(false)} key={index}>
                      <ListItemText>
                        {item.link.startsWith("http") ? (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="nav-link"
                          >
                            {item.title}
                          </a>
                        ) : (
                          <a href={item.link} className="nav-link">
                            {item.title}
                          </a>
                        )}
                      </ListItemText>
                    </ListItem>
                  ))}

                  {/* Social Media Section */}
                  <ListItem className="social-media">
                    {drawerSocialMedia.map((item, index) => {
                      const Icon =
                        item.icon === "FacebookIcon" ? (
                          <FacebookIcon />
                        ) : item.icon === "InstagramIcon" ? (
                          <InstagramIcon />
                        ) : (
                          <YouTubeIcon />
                        );

                      return (
                        <a
                          key={index}
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={item.icon}
                        >
                          <IconButton color="inherit">{Icon}</IconButton>
                        </a>
                      );
                    })}
                  </ListItem>
                </List>
              </Drawer>
            </>
          )}

          {/* Desktop Navigation: Hide if static and below 1100px */}
          {!(position === "static" && isBelow1100px) && (
            <div className="nav-links">
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
                MOÇÃO
              </Typography>
            </div>
          )}
        </div>

        {/* Logo */}
        {!(position === "static" && isBelow700px) && (
          <div className="logo">
            <img src={Logo} alt="Logo" />
          </div>
        )}

        {/* Social Media: Hide if fixed and below 1100px */}
        {!(position === "fixed" && isBelow1100px) && (
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
        )}
      </Toolbar>
    </AppBar>
  );
};
