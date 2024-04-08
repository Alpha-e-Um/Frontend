import React, { useState } from "react";
import styled from "styled-components";

const Navigation = styled.nav`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 300px;
`;

const NavHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h3`
  border-top: 1px solid #eee;
  padding-top: 20px;
  font-size: 1.25rem;
  color: #333;
  &:first-of-type {
    border-top: none;
    padding-top: 0;
  }
`;

const ResetButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #007bff;
  font-size: 1rem;
`;

const Section = styled.section`
  /* border-top: 1px solid #eee; */
  padding-top: 20px;
  /* &:first-of-type {
    border-top: none;
    padding-top: 0;
  } */
`;

const SectionTitleRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const SectionTitle = styled.h4`
  color: #333;
  font-size: 18px;
  margin: 0;
`;

const Checkbox = styled.input.attrs({ type: "checkbox" })`
  margin-right: 10px;
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

const ItemList = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const Item = styled.li`
  font-size: 18px;
  color: #333;
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  margin-left: 20px;
  cursor: pointer;
`;

const SideNavigation = () => {
  const [sectionEnabled, setSectionEnabled] = useState({
    design: false,
    developer: false,
    strategy: false,
    mediaProduction: false,
  });

  const handleSectionCheckbox = (section) => {
    setSectionEnabled((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <Navigation>
      <NavHeader>
        <Title>필터</Title>
        <ResetButton
          onClick={() =>
            setSectionEnabled({
              design: false,
              jobType: false,
              teamField: false,
              recruitmentType: false,
            })
          }
        >
          초기화
        </ResetButton>
      </NavHeader>

      {/* 모집기간 섹션 */}
      <Title
        style={{
          textAlign: "left",
          borderTop: "1px solid #eee",
          paddingTop: "20px",
        }}
      >
        모집 기간
      </Title>
      <Title style={{ textAlign: "left" }}>직종 분류</Title>
      <Section>
        <SectionTitleRow>
          <Checkbox
            id="design-checkbox"
            checked={sectionEnabled.design}
            onChange={() => handleSectionCheckbox("design")}
          />
          <SectionTitle htmlFor="design-checkbox">디자인</SectionTitle>
        </SectionTitleRow>
        <ItemList>
          <Item>
            <Checkbox disabled={!sectionEnabled.design} />
            UI / UX 디자이너
          </Item>
          <Item>
            <Checkbox disabled={!sectionEnabled.design} />
            일러스트 / 캐릭터 디자이너
          </Item>
          <Item>
            <Checkbox disabled={!sectionEnabled.design} />
            영상 / 모션 그래픽 디자이너
          </Item>
          <Item>
            <Checkbox disabled={!sectionEnabled.design} />
            제품 / 패키지 디자이너
          </Item>
          <Item>
            <Checkbox disabled={!sectionEnabled.design} />
            인테리어 디자이너
          </Item>
          <Item>
            <Checkbox disabled={!sectionEnabled.design} />
            패션디자이너
          </Item>
          <Item>
            <Checkbox disabled={!sectionEnabled.design} />
            공예
          </Item>
          <Item>
            <Checkbox disabled={!sectionEnabled.design} />
            그래픽 디자이너
          </Item>
        </ItemList>
      </Section>

      <Section>
        <SectionTitleRow>
          <Checkbox
            id="design-checkbox"
            checked={sectionEnabled.developer}
            onChange={() => handleSectionCheckbox("developer")}
          />
          <SectionTitle htmlFor="design-checkbox">개발자</SectionTitle>
        </SectionTitleRow>
        <ItemList>
          <Item>
            <Checkbox disabled={!sectionEnabled.developer} />
            프론트엔드
          </Item>
          <Item>
            <Checkbox disabled={!sectionEnabled.developer} />
            백엔드
          </Item>
          <Item>
            <Checkbox disabled={!sectionEnabled.developer} />
            AI 데이터 엔지니어
          </Item>
          <Item>
            <Checkbox disabled={!sectionEnabled.developer} />
            데브옵스 개발자
          </Item>
          <Item>
            <Checkbox disabled={!sectionEnabled.developer} />
            보안 전문가
          </Item>
          <Item>
            <Checkbox disabled={!sectionEnabled.developer} />
            게임 개발자
          </Item>
          <Item>
            <Checkbox disabled={!sectionEnabled.developer} />
            임베디드 개발
          </Item>
          <Item>
            <Checkbox disabled={!sectionEnabled.developer} />
            DBA
          </Item>
        </ItemList>
      </Section>

      <Section>
        <SectionTitleRow>
          <Checkbox
            id="design-checkbox"
            checked={sectionEnabled.strategy}
            onChange={() => handleSectionCheckbox("strategy")}
          />
          <SectionTitle htmlFor="design-checkbox">기획</SectionTitle>
        </SectionTitleRow>
      </Section>

      <Section>
        <SectionTitleRow>
          <Checkbox
            id="design-checkbox"
            checked={sectionEnabled.mediaProduction}
            onChange={() => handleSectionCheckbox("mediaProduction")}
          />
          <SectionTitle htmlFor="design-checkbox">영상/사진/음향</SectionTitle>
        </SectionTitleRow>
        <ItemList>
          <Item>
            <Checkbox disabled={!sectionEnabled.mediaProduction} />
            영상 편집
          </Item>
          <Item>
            <Checkbox disabled={!sectionEnabled.mediaProduction} />
            영상 촬영
          </Item>
          <Item>
            <Checkbox disabled={!sectionEnabled.mediaProduction} />
            PD
          </Item>
          <Item>
            <Checkbox disabled={!sectionEnabled.mediaProduction} />
            사진 작가
          </Item>
          <Item>
            <Checkbox disabled={!sectionEnabled.mediaProduction} />
            음향 엔지니어
          </Item>
        </ItemList>
      </Section>
    </Navigation>
  );
};

export default SideNavigation;
