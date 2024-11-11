import "./App.css";
import { CallToAction } from "./components/CallToAction/CallToAction";
import { Menu } from "./components/Menu/Menu";
import { HeroSection } from "./components/HeroSection/HeroSection";
import { LeaderMessage } from "./components/LeaderMessage/LeaderMessage";
import { Testimonials } from "./components/Testimonials/Testimonials";
import { Team } from "./components/Team/Team";

function App() {
  return (
    <div className="App">
      <Menu position="fixed" /> {/* Header Menu */}
      <HeroSection />
      <CallToAction />
      <LeaderMessage />
      <Team />
      <Testimonials />
      <Menu position="static" /> {/* Footer Menu */}
    </div>
  );
}

export default App;
