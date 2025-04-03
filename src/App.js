import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Menu } from "./components/Menu/Menu";
import { HeroSection } from "./components/HeroSection/HeroSection";
import { LeaderMessage } from "./components/LeaderMessage/LeaderMessage";
import { Testimonials } from "./components/Testimonials/Testimonials";
import { Team } from "./components/Team/Team";
import { Footer } from "./components/Footer/Footer";
import { Calender } from "./components/Calender/Calender";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./assets/theme";

function ExternalRedirect({ to }) {
  React.useEffect(() => {
    window.location.href = to;
  }, [to]);

  return null;
}

function App() {
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    // Fetch routes from routes.json
    fetch("/routes.json")
      .then((response) => response.json())
      .then((data) => setRoutes(data));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          {/* Handle external redirects dynamically */}
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.from}
              element={<ExternalRedirect to={route.to} />}
            />
          ))}

          {/* Default internal route */}
          <Route
            path="/"
            element={
              <div className="App">
                <Menu position="fixed" />
                <HeroSection />
                <Calender />
                <LeaderMessage />
                <Testimonials />
                <Team />
                <Footer />
              </div>
            }
          />

          {/* Fallback route for undefined paths */}
          <Route
            path="*"
            element={
              <div className="App">
                <h1>Page Not Found</h1>
                <p>The route you are looking for does not exist.</p>
              </div>
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
