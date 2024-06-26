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
import ContestDetail from "./pages/ContestDetailPage/contestDetailPage";
import TeamMemberRecruitmentNotice from "./components/TeamMemberRecruitmentNotice/teamMemberRecruitmentNotice";
import RegisterMember from "./pages/RegisterMember/registerMember";
import MyTeamDetail from "./components/MyPage/MyTeamDetail/myTeamDetail";
import ResumeDetail from "./pages/ResumeDetail/resumeDetail";
import TeamDetail from "./pages/TeamAnnouncementDetail/teamAnnouncementDetail";
import TeamAnnouncementDetail from "./pages/TeamAnnouncementDetail/teamAnnouncementDetail";

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
          <Route path="/resumeDetail" element={<ResumeDetail />} />
          <Route path="/mypage/*" element={<MyPage />} />
          <Route path="/mypage/team/:id" element={<MyTeamDetail />} />
          <Route path="/teamannouncement" element={<TeamSearch />} />
          <Route path="/member" element={<MemberSearch />} />
          <Route path="/login/*" element={<Login />} />
          <Route path="/registerTeam" element={<RegisterTeam />} />
          <Route path="/registerMember" element={<RegisterMember />} />
          <Route path="/contest" element={<Contest />} />
          <Route path="/contestDetail" element={<ContestDetail />} />
          <Route
            path="/teamannouncement/:id"
            element={<TeamAnnouncementDetail />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
