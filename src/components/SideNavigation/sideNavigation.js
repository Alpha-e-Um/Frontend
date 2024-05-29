import React, { useState, useRef, useEffect } from "react";
import { useRecoilState } from "recoil";
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
import { occupationClassificationsState } from "../../states/occupationState";

const categoryToEnumMap = {
  "UI/UX 디자이너": "design_ui_ux",
  "일러스트/캐릭터 디자이너": "design_illustration_character",
  "영상/모션 그래픽 디자이너": "design_movie_motion_graphic",
  "제품/패키지 디자이너": "design_product_package",
  "인테리어 디자이너": "design_passion",
  "패션 디자이너": "design_passion",
  "공예": "design_crafts",
  "그래픽 디자이너": "design_graphic",
  "프론트엔드": "development_frontend",
  "백엔드": "development_backend",
  "AI 데이터 엔지니어": "development_ai",
  "데브옵스 개발자": "development_devops",
  "보안 전문가": "development_security",
  "게임 개발자": "development_game",
  "임베디드 개발": "development_embedded",
  "DBA": "development_dba",
  "기획": "plan",
  "영상 편집": "media_editing_movie",
  "영상 촬영": "media_filming_movie",
  "PD": "media_pd",
  "사진 작가": "media_photographer",
  "음향 엔지니어": "media_sound_engineer",
  "관리": "marketing_management",
  "홍보": "marketing_promotion",
  "컨설팅": "marketing_consulting",
  "영어": "translation_english",
  "일본어": "translation_japanese",
  "중국어": "translation_chinese",
  "스페인어": "translation_spanish",
  "아랍어": "translation_arabic",
  "힌디어": "translation_hindi",
  "프랑스어": "translation_franch",
  "기타": "translation_etc",
};

const SideNavigation = ({ categoryObject }) => {
  const [occupationClassifications, setOccupationClassifications] =
    useRecoilState(occupationClassificationsState);
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

  useEffect(() => {
    const selectedClassifications = [];
    categoryObject.forEach((category) => {
      category.subCategories.forEach((subCategory, index) => {
        if (subCategoryStates[category.kind][index]) {
          const enumValue = categoryToEnumMap[subCategory];
          if (enumValue) {
            selectedClassifications.push(enumValue);
          }
        }
      });
    });
    setOccupationClassifications(selectedClassifications);
  }, [mainCategoryStates, subCategoryStates]);

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
