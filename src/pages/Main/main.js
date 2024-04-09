import React, { useEffect } from "react";
import Navigation from "../../components/Navigation/navigation";
import Introduce from "../../components/Introduce/introduce";
import SubNavigation from "../../components/SubNavigation/subNavigation";
import TeamCardGrid from "../../components/CardGrid/teamCardGrid";
import MemberCardGrid from "../../components/CardGrid/memberCardGrid";
import teamTestData from "../../api/teamTestData";
import memberTestData from "../../api/memberTestData";
import contestTestData from "../../api/contestTestData";
import ContestCard from "../../components/ContestCard/contestCard";
import ContestCardGrid from "../../components/CardGrid/contestCardGrid";
import { axios2 } from "../../lib/axios";

const Main = (props) => {
  useEffect(() => {
    axios2
      .get("/api/user/me")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.error(err));

    // TODO: 유저 객체 만들고 있으면 로그인 처리
  }, []);
  return (
    <div>
      <Navigation />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Introduce />
        <SubNavigation />
        <div style={{ marginTop: "80px" }}>
          <TeamCardGrid cardDatas={teamTestData} />
        </div>
        <div style={{ marginTop: "120px" }}>
          <MemberCardGrid cardDatas={memberTestData} />
        </div>
        <div style={{ marginTop: "120px" }}>
          <ContestCardGrid cardDatas={contestTestData} />
        </div>
      </div>
    </div>
  );
};

export default Main;
