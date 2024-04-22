import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navigation from "../../components/Navigation/navigation";
import MyPageSideBar from "../../components/MyPage/MyPageSideBar/myPageSideBar";
import MyInfo from "../../components/MyPage/MyInfo/myInfo";
import MyFavorites from "../../components/MyPage/MyFavorites/myFavorites";
import MySupport from "../../components/MySupport/mySupport";
import MyTeam from "../../components/MyTeam/myTeam";
import MyTeamPage from "../../components/MyTeamPage/myTeamPage";
import MyResume from "../../components/MyResume/myResume";

import { Title, Container, PageName } from "./styles";
import WithdrawalModal from "../../components/WithdrawalModal/withdrawalModal";
import MyNewResume from "../../components/MyNewResume/myNewResume";

const MyPage = (props) => {
  const [isCreateTeam, setIsCreateTeam] = useState(false);
  const [isNewResume, setIsNewResume] = useState(false);
  const [isWithdrawal, setIsWithdrawal] = useState(false);

  return (
    <div>
      <Navigation />
      {/* <Container>
        <Title>마이페이지</Title>

        /> */}

      <div style={{ display: "flex", justifyContent: "center" }}>
        <MyPageSideBar
          setIsCreateTeam={setIsCreateTeam}
          setIsNewResume={setIsNewResume}
        />
        <Routes>
          <Route
            index
            element={
              <div>
                <MyInfo IsWithdrawal={setIsWithdrawal} />
              </div>
            }
          />
          <Route
            path="favorites"
            element={
              <div>
                <PageName>즐겨찾기 목록</PageName>
                <MyFavorites />
              </div>
            }
          />
          <Route
            path="support"
            element={
              <div>
                <PageName>지원 현황</PageName>
                <MySupport />
              </div>
            }
          />
          <Route
            path="team"
            element={
              <div>
                <PageName>팀관리</PageName>
                {isCreateTeam ? (
                  <MyTeamPage setIsCreateTeam={setIsCreateTeam} />
                ) : (
                  <MyTeam setIsCreateTeam={setIsCreateTeam} />
                )}
              </div>
            }
          />
          <Route
            path="resume"
            element={
              <div>
                <PageName>이력서 관리</PageName>
                {isNewResume ? (
                  <MyNewResume setIsNewResume={setIsNewResume} />
                ) : (
                  <MyResume setIsNewResume={setIsNewResume} />
                )}
              </div>
            }
          />
        </Routes>
      </div>

      {isWithdrawal ? (
        <WithdrawalModal IsWithdrawal={setIsWithdrawal} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default MyPage;
