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
  const initialMainCategoryStates = jobCategories.reduce((acc, category) => {
    acc[category.kind] = true;
    return acc;
  }, {});

  const initialSubCategoryStates = jobCategories.reduce((acc, category) => {
    acc[category.kind] = new Array(category.subCategories.length).fill(true);
    return acc;
  }, {});

  const [mainCategoryStates, setMainCategoryStates] = useState(
    initialMainCategoryStates,
  );
  const [subCategoryStates, setSubCategoryStates] = useState(
    initialSubCategoryStates,
  );

  const handleMainCategoryCheckbox = (kind) => {
    var futureStateOfMain = !mainCategoryStates[kind];
    // 서브카테고리은 메인카테고리가 변경될 값으로 전부 따라감
    setMainCategoryStates((prev) => ({ ...prev, [kind]: !prev[kind] }));
    setSubCategoryStates((prev) => ({
      ...prev,
      [kind]: prev[kind].fill(futureStateOfMain),
    }));
  };

  const handleSubCategoryCheckbox = (kind, index) => {
    var temp = subCategoryStates[kind];
    temp[index] = !temp[index];
    if (!temp[index]) {
      // 서브 카테고리중 1개라도 체크를 해제하면, 메인카테고리도 체크 해제 되야함
      setMainCategoryStates((pres) => ({ ...pres, [kind]: false }));
    }
    setSubCategoryStates((prev) => ({ ...prev, [kind]: temp }));
  };

  const filterReset = () => {
    setMainCategoryStates(initialMainCategoryStates);
    setSubCategoryStates(initialSubCategoryStates);
  };

  return (
    <Navigation>
      <NavHeader>
        <Title>필터</Title>
        <ResetButton
          onClick={() => {
            filterReset();
          }}
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

      {/* 직종 분류 섹션 */}
      <Title style={{ textAlign: "left" }}>직종 분류</Title>
      {jobCategories.map((category) => (
        <Section key={category.mainCategory}>
          <SectionTitleRow>
            <Checkbox
              checked={mainCategoryStates[category.kind]}
              onChange={() => handleMainCategoryCheckbox(category.kind)}
            />
            <SectionTitle>{category.mainCategory}</SectionTitle>
          </SectionTitleRow>
          <ItemList>
            {category.subCategories.map((subCategory, index) => (
              <Item key={index}>
                <Checkbox
                  checked={
                    mainCategoryStates[category.kind] ||
                    subCategoryStates[category.kind][index]
                  }
                  onChange={() =>
                    handleSubCategoryCheckbox(category.kind, index)
                  }
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
