import { useState } from "react";
import teamTestData2 from "../../api/testDummyData/teamTestData2";
import teamTestData3 from "../../api/testDummyData/teamTestData3";
import TeamCardGrid from "../../components/CardGrid/teamCardGrid";
import Introduce from "../../components/Introduce/introduce";
import Navigation from "../../components/Navigation/navigation";
import PaginationComponent from "../../components/PagenationComponent/pagenationComponent";
import SideNavigation from "../../components/SideNavigation/sideNavigation";
import { jobCategories } from "../../api/testDummyData/jobPosition";
import { WriteButton } from "../../components/SideNavigation/styles";
import { useNavigate } from "react-router-dom";

const TeamSearch = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // 추가적인 페이지 변경 처리 로직
  };
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
        <div style={{ display: "flex" }}>
          <div>
            <WriteButton
              onClick={() => {
                navigate("/registerMember");
              }}
            >
              <label>+ 모집 공고 등록하기</label>
            </WriteButton>
            <SideNavigation categoryObject={jobCategories} />
          </div>
          <div>
            <div style={{ marginLeft: "120px" }}>
              <TeamCardGrid cardDatas={teamTestData2} />
            </div>
            <div style={{ marginLeft: "120px", marginTop: "100px" }}>
              <TeamCardGrid cardDatas={teamTestData3} />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "40px",
                marginBottom: "40px",
              }}
            >
              <PaginationComponent
                pages={10}
                currentPage={currentPage}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSearch;
