import React from "react";
import { FooterContainer, FooterText, ContactInfo } from "./styles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        (주)이음 | 대표이사 조현진 | 개인정보관리책임자 박준석 | 프론트팀장
        최지훈 | 백엔드팀장 홍석주 | 회계팀장 최태호 | 디자인팀장 이지윤
        <br />
        서울특별시 성북구 정릉로 77, (주)이음 | 업무시간(09:00 ~ 21:00)
        <br />
        사업자등록번호 123-45-67890 | 통신판매업신고번호
        제2024-서울성북-0777호(사업자정보확인)
        <br />
        이음은 통신판매중개자로, 행사에 대한 당사자 및 주최자가 등록한 행사와
        내용에 책임을 지지 않습니다.
      </FooterText>
      <ContactInfo>2024 © Eum. All rights reserved.</ContactInfo>
    </FooterContainer>
  );
};

export default Footer;
