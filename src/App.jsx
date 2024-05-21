import { Route, Routes } from "react-router-dom";
import {
  Curriencies,
  Exchange,
  Footer,
  Main,
  Navbar,
  News,
} from "./components";

const App = () => {
  return (
    <div className="grid md:grid-cols-[300px_1fr]">
      <div>
        <Navbar />
      </div>

      <div>
      
     
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/news" element={<News />} />
          <Route path="/exchange" element={<Exchange />} />
          <Route path="/currencies" element={<Curriencies />} />
        </Routes>
      
        <Footer />
      </div>
    </div>
  );
};

export default App;
