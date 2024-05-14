// CompetitionDetail.js
import React, { useState } from "react";
import {
  Container,
  Divider,
  FilterContainer,
  FilterText,
  Header,
} from "./styles";
import { CardContainter } from "../MyPage/MyFavorites/styles";
import teamTestData from "../../api/testDummyData/teamTestData";
import TeamCard from "../Card/teamCard";
import PaginationComponent from "../PagenationComponent/pagenationComponent";

const ContestTeamGrid = ({ data }) => {
  const [activeFilter, setActiveFilter] = useState("최신순");
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // 추가적인 페이지 변경 처리 로직
  };

  return (
    <Container>
      <Header>팀 공고 현황</Header>
      <div style={{ display: "flex", justifyContent: "end" }}>
        <FilterContainer>
          <FilterText
            active={activeFilter === "최신순"}
            onClick={() => setActiveFilter("최신순")}
          >
            최신순
          </FilterText>
          <Divider />
          <FilterText
            active={activeFilter === "조회순"}
            onClick={() => setActiveFilter("조회순")}
          >
            조회순
          </FilterText>
        </FilterContainer>
      </div>
      <CardContainter>
        {teamTestData.map((item) => (
          <TeamCard data={item} />
        ))}
      </CardContainter>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "30px",
          marginBottom: "30px",
        }}
      >
        <PaginationComponent
          pages={10}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </Container>
  );
};

export default ContestTeamGrid;
