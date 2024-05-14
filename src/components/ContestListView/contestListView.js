// CompetitionsList.js
import React, { useState } from "react";
import {
  Container,
  ContestTitle,
  DeadlineTitle,
  Divider,
  FilterContainer,
  FilterText,
  OrganizerTitle,
  StateButton,
  Table,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Title,
  ViewTitle,
} from "./styles";
import { competitions } from "../../api/testDummyData/contestListviewData";

const CompetitionsList = () => {
  const [activeFilter, setActiveFilter] = useState("최신순");

  const stateColors = [
    { bgColor: "#ffffff", color: "#000000", border: "2px solid #377bff" }, // 접수 예정
    { bgColor: "#377bff", color: "#ffffff" }, // 접수중
    { bgColor: "#ff4d4d", color: "#ffffff" }, // 마감임박
  ];

  return (
    <Container>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "end",
          marginBottom: "20px",
        }}
      >
        <Title>전체 공모전</Title>
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
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>공모전명</TableHeader>
            <TableHeader>마감일</TableHeader>
            <TableHeader>조회수</TableHeader>
          </TableRow>
        </TableHead>
        <tbody>
          {competitions.map((comp, index) => (
            <TableRow key={index}>
              <TableCell>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    gap: "6px",
                  }}
                >
                  <ContestTitle>{comp.title}</ContestTitle>
                  <OrganizerTitle>주최: {comp.organizer}</OrganizerTitle>
                </div>
              </TableCell>
              <TableCell>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <StateButton
                    bgColor={stateColors[comp.state].bgColor}
                    color={stateColors[comp.state].color}
                    border={stateColors[comp.state].border}
                  >
                    {comp.state === 0
                      ? "접수 예정"
                      : comp.state === 1
                      ? "접수중"
                      : "마감임박"}
                  </StateButton>

                  <DeadlineTitle>{comp.deadline}</DeadlineTitle>
                </div>
              </TableCell>
              <TableCell>
                <ViewTitle>{comp.views}회</ViewTitle>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default CompetitionsList;
