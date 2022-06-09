import AboutUsMain from "./aboutus";
import ContactMain from "./contact";
import Main from "./main";
import MenuMain from "./menu";
import "./scss/main.scss"


import {
    HashRouter,
    Route,
    Routes,
    Router,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

function App() {
  return (
      <HashRouter>
          <Routes>
              <Route index element={<Main/>} />
              <Route path="/contact" element={<ContactMain/>}/>
              <Route path="/about" element={<AboutUsMain/>}/>
              <Route path="/menu" element={<MenuMain/>}/>
          </Routes>
      </HashRouter>

  );
}

export default App;
