import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main/main";
import MyPage from "./pages/MyPage/myPage";
import TeamSearch from "./pages/TeamSearch/teamSearch";
import MemberSearch from "./pages/MemberSearch/memberSearch";
import Login from "./pages/Login/login";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import { userInfoState } from "./states/authState";
import { userAPI } from "./api/userAPI";
import RegisterTeam from "./pages/RegisterTeam/registerTeam";
import Contest from "./pages/Contest/contest";

const App = () => {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);

  const getUserInfo = async () => {
    userAPI
      .getMyInfo()
      .then((res) => {
        const data = res.data.data;

        setUserInfo({
          isLogin: true,
          userId: data.userId,
          email: data.email,
          name: data.name.first,
          fullName: data.name.fullName,
          avatar: data.avatar,
          mbti: data.mbti,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/mypage/*" element={<MyPage />} />
          <Route path="/team" element={<TeamSearch />} />
          <Route path="/member" element={<MemberSearch />} />
          <Route path="/login/*" element={<Login />} />
          <Route path="/registerTeam" element={<RegisterTeam />} />
          <Route path="/contest" element={<Contest />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
