import Header from "../components/Header";
import Hero from "../components/Hero";
import SelectedWork from "../components/SelectedWork";
import OtherWork from "../components/OtherWork";
import Background from "../components/Background";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import SectionRail from "../components/SectionRail";

function HomePage() {
  return (
    <>
      <Header />
      <SectionRail />
      <Hero />
      <SelectedWork />
      <OtherWork />
      <Background />
      <Contact />
      <Footer />
    </>
  );
}

export default HomePage;