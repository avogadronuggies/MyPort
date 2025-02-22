import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <LoadingScreen />
      <Navbar />
      <Header />
      <Skills />
      <Projects />
      <Footer />
    </main>
  );
}
