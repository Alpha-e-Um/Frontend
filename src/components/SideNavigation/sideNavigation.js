import React, { useState, useRef } from "react";
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
  SearchInputContainer,
  SearchInput,
  SearchButton,
  SearchIcon,
} from "./styles";
import DatePickerPopup from "./datePickerPopup";

const SideNavigation = ({ categoryObject }) => {
  const initialMainCategoryStates = categoryObject.reduce((acc, category) => {
    acc[category.kind] = true;
    return acc;
  }, {});

  const initialSubCategoryStates = categoryObject.reduce((acc, category) => {
    acc[category.kind] = new Array(category.subCategories.length).fill(true);
    return acc;
  }, {});

  const initialSubCategoryVisibility = categoryObject.reduce(
    (acc, category) => {
      acc[category.kind] = true;
      return acc;
    },
    {},
  );

  const [mainCategoryStates, setMainCategoryStates] = useState(
    initialMainCategoryStates,
  );
  const [subCategoryStates, setSubCategoryStates] = useState(
    initialSubCategoryStates,
  );
  const [subCategoryVisibility, setSubCategoryVisibility] = useState(
    initialSubCategoryVisibility,
  );
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const dateButtonRef = useRef(null);

  const handleMainCategoryCheckbox = (kind) => {
    const futureStateOfMain = !mainCategoryStates[kind];
    setMainCategoryStates((prev) => ({ ...prev, [kind]: futureStateOfMain }));
    setSubCategoryStates((prev) => ({
      ...prev,
      [kind]: prev[kind].fill(futureStateOfMain),
    }));
    setSubCategoryVisibility((prev) => ({
      ...prev,
      [kind]: futureStateOfMain,
    }));
  };

  const handleSubCategoryCheckbox = (kind, index) => {
    const temp = [...subCategoryStates[kind]];
    temp[index] = !temp[index];
    if (!temp[index]) {
      setMainCategoryStates((prev) => ({ ...prev, [kind]: false }));
    }
    setSubCategoryStates((prev) => ({ ...prev, [kind]: temp }));
  };

  const filterReset = () => {
    setMainCategoryStates(initialMainCategoryStates);
    setSubCategoryStates(initialSubCategoryStates);
    setSubCategoryVisibility(initialSubCategoryVisibility);
    setStartDate(null);
    setEndDate(null);
    setIsDatePickerVisible(false);
  };

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    setIsDatePickerVisible(false);
  };

  const getPosition = () => {
    if (dateButtonRef.current) {
      const rect = dateButtonRef.current.getBoundingClientRect();
      return {
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
      };
    }
    return {};
  };

  return (
    <Navigation>
      <NavHeader>
        <Title>필터</Title>
        <ResetButton onClick={filterReset}>초기화</ResetButton>
      </NavHeader>

      {/* 제목 검색 섹션 */}
      <Title style={{ textAlign: "left" }}>제목 검색</Title>
      <SearchInputContainer>
        <SearchInput type="text" placeholder="제목 검색" />
        <SearchButton>
          <SearchIcon src="icons/search.svg" alt="Search" />
        </SearchButton>
      </SearchInputContainer>

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
      <SearchInputContainer>
        <SearchInput
          type="text"
          placeholder="기간 검색"
          value={
            startDate && endDate
              ? `${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`
              : ""
          }
          readOnly
        />
        <SearchButton
          ref={dateButtonRef}
          onClick={() => setIsDatePickerVisible(!isDatePickerVisible)}
        >
          <SearchIcon src="icons/calendar.svg" alt="Calendar" />
        </SearchButton>
      </SearchInputContainer>

      {isDatePickerVisible && (
        <DatePickerPopup
          startDate={startDate}
          endDate={endDate}
          onChange={handleDateChange}
          onClose={() => setIsDatePickerVisible(false)}
          position={getPosition()}
        />
      )}

      {/* 직종 분류 섹션 */}
      <Title style={{ textAlign: "left", marginTop: "20px" }}>직종 분류</Title>
      {categoryObject.map((category) => (
        <Section key={category.mainCategory}>
          <SectionTitleRow>
            <Checkbox
              checked={mainCategoryStates[category.kind]}
              onChange={() => handleMainCategoryCheckbox(category.kind)}
            />
            <SectionTitle>{category.mainCategory}</SectionTitle>
          </SectionTitleRow>
          {subCategoryVisibility[category.kind] && (
            <ItemList>
              {category.subCategories.map((subCategory, index) => (
                <Item key={index}>
                  <Checkbox
                    checked={subCategoryStates[category.kind][index]}
                    onChange={() =>
                      handleSubCategoryCheckbox(category.kind, index)
                    }
                  />
                  {subCategory}
                </Item>
              ))}
            </ItemList>
          )}
        </Section>
      ))}
    </Navigation>
  );
};

export default SideNavigation;
