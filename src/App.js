import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main/main";
import MyPage from "./pages/MyPage/myPage";
import TeamSearch from "./pages/TeamSearch/teamSearch";
import MemberSearch from "./pages/MemberSearch/memberSearch";
import Login from "./pages/Login/login";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/mypage/*" element={<MyPage />} />
          <Route path="/team" element={<TeamSearch />} />
          <Route path="/member" element={<MemberSearch />} />
          <Route path="/login/*" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
