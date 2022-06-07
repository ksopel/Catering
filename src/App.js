import Header from "./components/Header";
import Content from "./components/Content";
import Blurb from "./components/Blurb";
import Footer from "./components/Footer";
import "./scss/main.scss"

function App() {
  return (
    <div>
        <Header/>
        <Content/>
        <Blurb/>
        <Footer/>
    </div>
  );
}

export default App;
