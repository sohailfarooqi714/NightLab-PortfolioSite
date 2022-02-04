import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Landing from "./components/Landing";
import About from "./components/About";
import Technologies from './components/Technologies';
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Landing />
      <Services />
      <Technologies />
      <Portfolio />
      <About />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
