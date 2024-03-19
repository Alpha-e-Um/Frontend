import {
  Container,
  Title,
  SetVector,
  TeamButton,
  TeamMemberButton,
  CardContainter,
} from "./styles";
import { ReactComponent as Vector } from "../../assets/myPage/myInfoVector1.svg";

const scrollbarStyle = {
  customScrollbar: {
    height: "100%", // 또는 원하는 크기
    overflowY: "scroll", // 수직 스크롤바 사용
    scrollbarWidth: "thin", // 브라우저가 지원하는 경우 스크롤바 너비
    scrollbarColor: "#888 #f1f1f1", // 브라우저가 지원하는 경우 스크롤바와 트랙 색상
  },
};

const MyFavorites = (props) => {
  return (
    <div>
      <Container>
        <Title>즐겨찾기 목록</Title>
        <SetVector>
          <Vector />
        </SetVector>
        <TeamButton>팀</TeamButton>
        <TeamMemberButton>팀원</TeamMemberButton>
        <CardContainter>
          <div style={scrollbarStyle.customScrollbar}></div>
        </CardContainter>
      </Container>
    </div>
  );
};

export default MyFavorites;
