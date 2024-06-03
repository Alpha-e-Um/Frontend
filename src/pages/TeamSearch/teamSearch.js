import React, { useState, useEffect } from "react";
import TeamCardGrid from "../../components/CardGrid/teamCardGrid";
import Introduce from "../../components/Introduce/introduce";
import Navigation from "../../components/Navigation/navigation";
import PaginationComponent from "../../components/PagenationComponent/pagenationComponent";
import SideNavigation from "../../components/SideNavigation/sideNavigation";
import { jobCategories } from "../../api/testDummyData/jobPosition";
import { WriteButton } from "../../components/SideNavigation/styles";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/footer";
import { teamAPI } from "../../api/teamAPI";
import { useRecoilValue } from "recoil";
import { occupationClassificationsState } from "../../states/occupationState";

const TeamSearch = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [announcements, setAnnouncements] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const occupationClassifications = useRecoilValue(
    occupationClassificationsState,
  );

  const fetchTeamAnnouncements = async (page) => {
    try {
      const filter = {
        page: page - 1, // 서버에서 페이지 번호가 0부터 시작하기 때문에
        size: 10,
        expired: true,
        option: "latest", // views, popular,favorites
        occupationClassifications:
          occupationClassifications.length > 0 ? occupationClassifications : "", // 빈 배열일 경우 빈 문자열로 설정
      };

      const response = await teamAPI.getTeamAnnouncements(filter);
      setAnnouncements(response.data.data.content);
      setTotalPages(response.data.data.totalPages);
      console.log(response.data.data.content);
    } catch (error) {
      console.error("Error fetching team announcements:", error);
    }
  };

  useEffect(() => {
    fetchTeamAnnouncements(currentPage);
  }, [currentPage, occupationClassifications]); // occupationClassifications 상태가 변경될 때마다 호출

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
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
        <div style={{ display: "flex", padding: "0px 60px" }}>
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
              <TeamCardGrid cardDatas={announcements} />
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
                pages={totalPages}
                currentPage={currentPage}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TeamSearch;
