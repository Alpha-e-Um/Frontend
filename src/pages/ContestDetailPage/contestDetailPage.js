// App.js
import React from "react";
import ContestDetail from "../../components/ContestDetail/contestDetail";
import Navigation from "../../components/Navigation/navigation";
import { competitionData } from "../../api/testDummyData/contestDetailData";
import ContestTeamGrid from "../../components/ContestDetail/contestTeamGrid";

const ContestDetailPage = () => {
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
        <ContestDetail data={competitionData} />
        {/* <ContestTeamGrid /> */}
      </div>
    </div>
  );
};

export default ContestDetailPage;
