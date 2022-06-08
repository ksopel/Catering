import Header from "./components/Header";
import Content from "./components/Content";
import Blurb from "./components/Blurb";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import "./scss/main.scss"

function App() {
  return (
    <div>
        <Header/>
        <Content/>
        <Blurb/>
        <Menu/>
        <Contact/>
        <AboutUs/>
        <Footer/>
    </div>
  );
}

export default App;
