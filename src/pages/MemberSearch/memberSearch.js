import React, { useState, useEffect } from "react";
import MemberCardGrid from "../../components/CardGrid/memberCardGrid";
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
import { Title } from "../RegisterMember/styles";

const MemberSearch = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [announcements, setAnnouncements] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const occupationClassifications = useRecoilValue(
    occupationClassificationsState,
  );

  const fetchResumeAnnouncements = async (page) => {
    try {
      const filter = {
        page: page - 1,
        size: 10,
        occupationClassifications:
          occupationClassifications.length > 0 ? occupationClassifications : "",
      };

      const response = await teamAPI.getResumeAnnouncements(filter);
      setAnnouncements(response.data.data.content);
      setTotalPages(response.data.data.totalPages);
      console.log(response.data.data.content);
    } catch (error) {
      console.error("Error fetching resume announcements:", error);
    }
  };

  useEffect(() => {
    fetchResumeAnnouncements(currentPage);
  }, [currentPage, occupationClassifications]);

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
                navigate("/registerTeam");
              }}
            >
              <label>+ 모집 공고 등록하기</label>
            </WriteButton>
            <SideNavigation categoryObject={jobCategories} />
          </div>
          <div>
            <div style={{ marginLeft: "120px", minWidth: "1100px" }}>
              <Title>팀원 추천</Title>
              <MemberCardGrid cardDatas={announcements} />
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

export default MemberSearch;
