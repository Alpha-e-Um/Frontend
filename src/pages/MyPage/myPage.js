import React from "react";
import { Routes, Route } from "react-router-dom";

import Navigation from "../../components/Navigation/navigation";
import MyPageSideBar from "../../components/MyPageSideBar/myPageSideBar";
import MyInfo from "../../components/MyInfo/myInfo";
import MyFavorites from "../../components/MyFavorites/myFavorites";
import MySupport from "../../components/MySupport/mySupport";
import MyTeam from "../../components/MyTeam/myTeam";
import MyTeamCreate from "../../components/MyTeamCreate/myTeamCreate";
import MyResume from "../../components/MyResume/myResume";
import { ReactComponent as Vector } from "../../assets/myPage/myInfoVector1.svg";

import { Title, Container, PageName } from "./styles";
import WithdrawalModal from "../../components/WithdrawalModal/withdrawalModal";

const MyPage = (props) => {
  return (
    <div>
      <Navigation />
      <Container>
        <Title>마이페이지</Title>
        <MyPageSideBar />
        <Vector
          style={{
            position: "absolute",
            top: "86px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />

        <Routes>
          <Route
            index
            element={
              <div>
                <PageName>내정보</PageName>
                <MyInfo />
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
                <MyTeamCreate />
                {/* <MyTeam /> */}
              </div>
            }
          />
          <Route
            path="resume"
            element={
              <div>
                <PageName>이력서 관리</PageName>
                <MyResume />
              </div>
            }
          />
        </Routes>
      </Container>
    </div>
  );
};

export default MyPage;
