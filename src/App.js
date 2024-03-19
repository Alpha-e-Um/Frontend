import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main/main";
import MyPage from "./pages/MyPage/myPage";
import SocialLoginModal from "./components/SocialLoginModal/SocialLoginModal";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/mypage/favorites" element={<MyPage />} />
          <Route path="/mypage/support" element={<MyPage />} />
          <Route path="/mypage/team" element={<MyPage />} />
          <Route path="/mypage/resume" element={<MyPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
