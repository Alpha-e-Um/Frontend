import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Navigation from "../../components/Navigation/navigation";
import MyPageSideBar from "../../components/MyPageSideBar/myPageSideBar";
import MyInfo from "../../components/MyInfo/myInfo";
import MyFavorites from "../../components/MyFavorites/myFavorites";
import MySupport from "../../components/MySupport/mySupport";
import MyTeam from "../../components/MyTeam/myTeam";
import MyResume from "../../components/MyResume/myResume";
import { ReactComponent as Vector } from "../../assets/myPage/myInfoVector1.svg";

import { Title, Container, PageName, SetVector } from "./styles";
import { Position } from "../../components/Card/styles";

const MyPage = (props) => {
  const { pathname } = useLocation();

  var arr = ["내정보", "즐겨찾기", "지원현황", "팀관리", "이력서"];
  var info = [MyInfo, MyFavorites, MySupport, MyTeam, MyResume];
  const [pageIdx, setPageIdx] = useState(0);

  useEffect(() => {
    switch (pathname) {
      case "/mypage":
        setPageIdx(0);
        break;
      case "/mypage/favorites":
        setPageIdx(1);
        break;
      case "/mypage/support":
        setPageIdx(2);
        break;
      case "/mypage/team":
        setPageIdx(3);
        break;
      case "/mypage/resume":
        setPageIdx(4);
        break;
    }
  });

  const PageComponent = info[pageIdx];

  return (
    <div>
      <Navigation />
      <Title>마이페이지</Title>
      <MyPageSideBar />

      <Container>
        <PageName>{arr[pageIdx]}</PageName>
        <Vector
          style={{
            position: "absolute",
            top: "86px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />
        <PageComponent />
      </Container>
    </div>
  );
};

export default MyPage;
