import {
  ButtonBox,
  Container,
  Description,
  InteractBox,
  LikeButton,
  LocationLabel,
  Position,
  StateLabel,
  StyledButton,
  TeamNameLabel,
  TimeLabel,
  Title,
} from "./styles";

const occupationOptions = {
  design_ui_ux: "UI/UX 디자인",
  design_illustration_character: "일러스트/캐릭터 디자인",
  design_movie_motion_graphic: "영화/모션그래픽 디자인",
  design_product_package: "제품/패키지 디자인",
  design_passion: "열정 디자인",
  design_crafts: "공예 디자인",
  design_graphic: "그래픽 디자인",
  development_frontend: "프론트엔드 개발",
  development_backend: "백엔드 개발",
  development_ai: "AI 개발",
  development_devops: "DevOps 개발",
  development_security: "보안 개발",
  development_game: "게임 개발",
  development_embedded: "임베디드 개발",
  development_dba: "DBA",
  plan: "기획",
  media_editing_movie: "영화 편집",
  media_filming_movie: "영화 촬영",
  media_pd: "PD",
  media_photographer: "사진작가",
  media_sound_engineer: "음향 엔지니어",
  marketing_management: "마케팅 관리",
  marketing_promotion: "마케팅 홍보",
  marketing_consulting: "마케팅 컨설팅",
  translation_english: "영어 번역",
  translation_japanese: "일본어 번역",
  translation_chinese: "중국어 번역",
  translation_spanish: "스페인어 번역",
  translation_arabic: "아랍어 번역",
  translation_hindi: "힌디어 번역",
  translation_french: "프랑스어 번역",
  translation_etc: "기타 번역",
  etc: "기타",
};

const MemberCard = ({ data }) => {
  return (
    <Container>
      <div
        style={{
          display: "flex",
          marginBottom: "6px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            marginBottom: "30px",
          }}
        >
          <div style={{ display: "flex" }}>
            <div>
              <img src="/icons/alert.svg" width={50} />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                marginLeft: "20px",
              }}
            >
              <Title>{data.name}</Title>
              <Position>{data.position}</Position>
            </div>
          </div>
          <div>
            <TeamNameLabel>{data.gender}</TeamNameLabel>
            <LocationLabel>{data.location}</LocationLabel>
          </div>
        </div>
      </div>

      <div style={{ textAlign: "left" }}>
        <Description>{data.introduction}</Description>
      </div>
      <div />
      <InteractBox>
        <ButtonBox>
          {data.occupationClassifications.map((item, index) => {
            return (
              <StyledButton key={index}>{occupationOptions[item]}</StyledButton>
            );
          })}
        </ButtonBox>
        <div>
          <LikeButton src="/icons/heart.svg" width={30} />
        </div>
      </InteractBox>
    </Container>
  );
};

export default MemberCard;
