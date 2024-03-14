import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main/main";
import SocialLoginModal from "./components/SocialLoginModal/SocialLoginModal";

const App = () => {
  return (
    <div className="App">
      <SocialLoginModal />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
