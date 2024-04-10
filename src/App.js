import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main/main";
import MyPage from "./pages/MyPage/myPage";
import TeamSearch from "./pages/TeamSearch/teamSearch";
import MemberSearch from "./pages/MemberSearch/memberSearch";
import Login from "./pages/Login/login";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import { axiosWithAuth } from "./lib/axios";
import { userInfoState } from "./states/authState";

const App = () => {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const accessToken = localStorage.getItem("access_token");

  const getUserInfo = async () => {
    axiosWithAuth
      .get("/api/user/me")
      .then((res) => {
        setUserInfo({
          isLogin: true,
          userId: res.data.userId,
          email: res.data.email,
          name: res.data.name.first,
          fullName: res.data.name.fullName,
          avatar: res.data.avatar,
          mbti: res.data.mbti,
        });
        console.log(res);
        console.log("userInfo", userInfo);
      })
      .catch((err) => console.error(err));
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
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
