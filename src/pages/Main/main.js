import React from "react";
import Navigation from "../../components/Navigation/navigation";
import Introduce from "../../components/Introduce/introduce";
import SubNavigation from "../../components/SubNavigation/subNavigation";
import TeamCard from "../../components/TeamCard/teamCard";
import TeamCardGrid from "../../components/TeamCardGrid/teamCardGrid";
import teamTestData from "../../api/teamTestData";

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
      </div>
    </div>
  );
};

export default Main;
