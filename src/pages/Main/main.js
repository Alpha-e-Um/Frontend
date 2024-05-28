import Navigation from "../../components/Navigation/navigation";
import Introduce from "../../components/Introduce/introduce";
import SubNavigation from "../../components/SubNavigation/subNavigation";
import TeamCardGrid from "../../components/CardGrid/teamCardGrid";
import MemberCardGrid from "../../components/CardGrid/memberCardGrid";
import teamTestData from "../../api/testDummyData/teamTestData";
import memberTestData from "../../api/testDummyData/memberTestData";
import contestTestData from "../../api/testDummyData/contestTestData";
import ContestCardGrid from "../../components/CardGrid/contestCardGrid";
import Footer from "../../components/Footer/footer";

const Main = (props) => {
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

      <Footer />
    </div>
  );
};

export default Main;
