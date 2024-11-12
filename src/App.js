import "./App.css";
import { CallToAction } from "./components/CallToAction/CallToAction";
import { Menu } from "./components/Menu/Menu";
import { HeroSection } from "./components/HeroSection/HeroSection";
import { LeaderMessage } from "./components/LeaderMessage/LeaderMessage";
import { Testimonials } from "./components/Testimonials/Testimonials";
import { Team } from "./components/Team/Team";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./assets/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Menu position="fixed" /> {/* Header Menu */}
        <HeroSection />
        <CallToAction />
        <LeaderMessage />
        <Team />
        <Testimonials />
        <Menu position="static" /> {/* Footer Menu */}
      </div>
    </ThemeProvider>
  );
}

export default App;
