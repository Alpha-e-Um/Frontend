import React from "react";
import Navigation from "../../components/Navigation/navigation";
import Introduce from "../../components/Introduce/introduce";
import SubNavigation from "../../components/SubNavigation/subNavigation";
import TeamCardGrid from "../../components/CardGrid/teamCardGrid";
import MemberCardGrid from "../../components/CardGrid/memberCardGrid";
import teamTestData from "../../api/teamTestData";
import memberTestData from "../../api/memberTestData";

const Main = (props) => {
  return (
    <div>
      <Navigation />
      <div
        style={{
          padding: "30px 60px",
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
      </div>
    </div>
  );
};

export default Main;
