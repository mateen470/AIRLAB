import "./App.css";
import Header from "./Components/Header/Header";
import HeroSection from "./Components/HeroSection/HeroSection";
import CardsSection from "./Components/CardsSection/CardsSection";
import AchievementSection from "./Components/AchievementsSection/AchievementsSection";
import HowItWorkSection from "./Components/HowItWorkSection/HowItWorkSection";
import LastSection from "./Components/LastSection/Last";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <CardsSection />
      <AchievementSection />
      <HowItWorkSection />
      <LastSection />
    </>
  );
}

export default App;
