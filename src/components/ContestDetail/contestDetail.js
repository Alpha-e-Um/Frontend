// CompetitionDetail.js
import React, { useState } from "react";
import {
  Container,
  Header,
  ContentWrapper,
  ImagePlaceholder,
  Details,
  DetailItem,
  Label,
  Value,
  Tag,
  Divider,
  FooterNote,
  DescriptionWrapper,
  MoreButton,
  MoreButtonText,
} from "./styles";

const ContestDetail = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Container>
      <Header>{data.title}</Header>
      <ContentWrapper>
        <ImagePlaceholder src={data.image} />
        <Details>
          <DetailItem>
            <Label>분야</Label>
            <Value>{data.field}</Value>
          </DetailItem>
          <DetailItem>
            <Label>주최 기관</Label>
            <Value>{data.organizer}</Value>
          </DetailItem>
          <DetailItem>
            <Label>응모대상</Label>
            <Value>{data.target}</Value>
          </DetailItem>
          <DetailItem>
            <Label>공모전 태그</Label>
            <Tag>{data.tag}</Tag>
          </DetailItem>
          <DetailItem>
            <Label>접수 기간</Label>
            <Value>{data.period}</Value>
          </DetailItem>
          <DetailItem>
            <Label>총 상금</Label>
            <Value>{data.prize}</Value>
          </DetailItem>
          <DetailItem>
            <Label>홈페이지</Label>
            <Value>{data.website}</Value>
          </DetailItem>
          <DetailItem>
            <Label>첨부파일</Label>
            <Value>{data.file}</Value>
          </DetailItem>
        </Details>
      </ContentWrapper>
      <Divider />
      <Header>상세 내용</Header>
      <DescriptionWrapper isExpanded={isExpanded}>
        {data.description}
      </DescriptionWrapper>
      <MoreButton onClick={toggleDescription} isExpanded={isExpanded}>
        <MoreButtonText>{isExpanded ? "접기" : "더보기"}</MoreButtonText>
      </MoreButton>
      <Divider />
      <FooterNote>
        ※ 주최사 홈페이지의 공모요강을 확인하시기 바랍니다.
      </FooterNote>
    </Container>
  );
};

export default ContestDetail;
