import {
  Container,
  MyInfoLine,
  Title,
  Information,
  InputText,
  SchoolButton,
  SaveButton,
  CannelButton,
  InputRow,
  Profile,
  ProfileChangeButton,
} from "./styles";
import { ReactComponent as Line } from "../../assets/icons/line.svg";

const MyInfo = () => {
  return (
    <div>
      <Container>
        <Title>내 정보</Title>
        <MyInfoLine>
          <Line />
        </MyInfoLine>
        <Profile></Profile>
        <ProfileChangeButton>사진 변경</ProfileChangeButton>
        <InputRow>
          <Information>이름</Information>
          <InputText placeholder="이름"></InputText>
          <Information>성</Information>
          <InputText placeholder="성"></InputText>
          <Information>닉네임</Information>
          <InputText placeholder="닉네임"></InputText>
          <Information>MBTI</Information>
          <InputText placeholder="MBTI"></InputText>
          <Information>전화번호</Information>
          <InputText
            type="tel"
            placeholder="010-0000-0000"
            pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
            title="전화번호 형식: 000-0000-0000"
          ></InputText>
          <Information>생년월일</Information>
          <InputText type="date" placeholder=""></InputText>
          <Information>소속/학교</Information>
          <InputText placeholder="MBTI"></InputText>
        </InputRow>
        {/* <SchoolButton>학교 메일 인증하러 가기</SchoolButton>
        <Information>거주/지역</Information>
        <InputText placeholder="지역"></InputText>

        <Information>합격/불합격 연락 받을 수단</Information>
        <SaveButton>저장</SaveButton>
        <CannelButton>취소</CannelButton> */}
      </Container>
    </div>
  );
};

export default MyInfo;
