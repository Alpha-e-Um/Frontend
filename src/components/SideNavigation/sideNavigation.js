import React, { useState } from "react";
import {
  Checkbox,
  Item,
  ItemList,
  NavHeader,
  Navigation,
  ResetButton,
  Section,
  SectionTitle,
  SectionTitleRow,
  Title,
} from "./styles";
import { jobCategories } from "./jobPosition";

const SideNavigation = () => {
  const [sectionEnabled, setSectionEnabled] = useState({
    design: false,
    development: false,
    planning: false,
    media: false,
    marketing: false,
    translation: false,
    other: false,
  });
  const [subCategoryEnabled, setSubCategoryEnabled] = useState({});

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
              development: false,
              planning: false,
              media: false,
              marketing: false,
              translation: false,
              other: false,
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
      {jobCategories.map((category) => (
        <Section key={category.mainCategory}>
          <SectionTitleRow>
            <Checkbox
              checked={sectionEnabled[category.kind]}
              onChange={() => handleSectionCheckbox(category.kind)}
            />
            <SectionTitle>{category.mainCategory}</SectionTitle>
          </SectionTitleRow>
          <ItemList>
            {category.subCategories.map((subCategory, index) => (
              <Item key={index}>
                <Checkbox
                  disabled={!sectionEnabled[category.kind]}
                  // checked={subCategoryEnabled[subCategoryName] || false}
                  // onChange={() => handleSubCategoryCheckbox(subCategoryName)}
                />
                {subCategory}
              </Item>
            ))}
          </ItemList>
        </Section>
      ))}
    </Navigation>
  );
};

export default SideNavigation;
