import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import TwitterIcon from "@mui/icons-material/X";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
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
                        {!item.link.startsWith("#") ? (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="nav-link"
                            download={
                              item.title === "MEG"
                                ? "Moção de Estratégia Global - Coragem para Transformar Portugal - Lista U - Unidos Pelo Liberalismo.pdf"
                                : undefined
                            }
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
                        ) : item.icon === "YouTubeIcon" ? (
                          <YouTubeIcon />
                        ) : item.icon === "WhatsAppIcon" ? (
                          <WhatsAppIcon />
                        ) : item.icon === "TwitterIcon" ? (
                          <TwitterIcon />
                        ) : null;

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
              <Typography variant="body1">
                <a href="#hero-section" className="nav-link">
                  INÍCIO
                </a>
              </Typography>
              <Typography variant="body1">
                <a href="#calender-section" className="nav-link">
                  AGENDA
                </a>
              </Typography>
              <Typography variant="body1">
                <a
                  href="https://gateway.ifthenpay.com/url/Ahl2CEw95L"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link"
                >
                  DONATIVOS
                </a>
              </Typography>
              <Typography variant="body1">
                <a href="#team-page" className="nav-link">
                  EQUIPA
                </a>
              </Typography>
              {/* <Typography variant="body1" className="nav-link">
                <a
                  href="https://linktr.ee/unidospeloliberalismo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link"
                >
                  MEG
                </a>
              </Typography> */}
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
              href="https://unidospeloliberalismo.pt/comunidade"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton color="inherit">
                <WhatsAppIcon />
              </IconButton>
            </a>
            <a
              href="https://x.com/MalheiroLiberal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton color="inherit">
                <TwitterIcon />
              </IconButton>
            </a>
            <a
              href="https://www.instagram.com/Malheiroliberal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton color="inherit">
                <InstagramIcon />
              </IconButton>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61570025434812&mibextid=LQQJ4d&rdid=MshETOi0u5R7ZZpV&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FLr1yT9P9PiNt8uqf%2F%3Fmibextid%3DLQQJ4d"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton color="inherit">
                <FacebookIcon />
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
            <a href="mailto:geral@unidospeloliberalismo.pt" aria-label="Email">
              <IconButton color="inherit">
                <MailOutlineIcon />
              </IconButton>
            </a>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};
