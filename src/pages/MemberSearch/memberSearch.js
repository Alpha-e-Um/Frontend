import { useState } from "react";
import TeamCardGrid from "../../components/CardGrid/teamCardGrid";
import Introduce from "../../components/Introduce/introduce";
import Navigation from "../../components/Navigation/navigation";
import PaginationComponent from "../../components/PagenationComponent/pagenationComponent";
import SideNavigation from "../../components/SideNavigation/sideNavigation";
import memberTestData2 from "../../api/testDummyData/memberTestDats2";
import memberTestData3 from "../../api/testDummyData/memberTestData3";
import MemberCardGrid from "../../components/CardGrid/memberCardGrid";
import { WriteButton } from "../../components/SideNavigation/styles";
import { useNavigate } from "react-router-dom";
const MemberSearch = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

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
                navigate("/registerTeam");
              }}
            >
              <label>+ 모집 공고 등록하기</label>
            </WriteButton>
            <SideNavigation />
          </div>
          <div>
            <div style={{ marginLeft: "120px" }}>
              <MemberCardGrid cardDatas={memberTestData2} />
            </div>
            <div style={{ marginLeft: "120px", marginTop: "100px" }}>
              <MemberCardGrid cardDatas={memberTestData3} />
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

export default MemberSearch;
