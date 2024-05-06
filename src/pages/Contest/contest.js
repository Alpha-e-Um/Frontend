import { useNavigate } from "react-router-dom";
import Introduce from "../../components/Introduce/introduce";
import Navigation from "../../components/Navigation/navigation";
import { WriteButton } from "../../components/SideNavigation/styles";
import SideNavigation from "../../components/SideNavigation/sideNavigation";
import PaginationComponent from "../../components/PagenationComponent/pagenationComponent";
import ContestCard from "../../components/ContestCard/contestCard";
import ContestCardGrid from "../../components/CardGrid/contestCardGrid";
import contestTestData2 from "../../api/testDummyData/contestTestData2";
import { useState } from "react";

const Contest = () => {
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
                navigate("/registerTeam");
              }}
            >
              <label>+ 모집 공고 등록하기</label>
            </WriteButton>
            <SideNavigation />
          </div>
          <div>
            <div style={{ marginLeft: "120px" }}>
              <ContestCardGrid cardDatas={contestTestData2} />
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

export default Contest;
