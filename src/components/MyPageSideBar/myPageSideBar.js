import { useState } from "react";
import { Title, Container, SelectPage, NotSelectPage } from "./styles";

const MyPageSideBar = (props) => {
  const [curPage, setCurPage] = useState(5);

  var arr = ["내정보", "즐겨찾기", "지원현황", "팀관리", "이력서", "회원탈퇴"];

  return (
    <div>
      <Title>마이페이지</Title>
      <Container>
        {arr.map((item, index) => {
          const ItemComponent = curPage === index ? SelectPage : NotSelectPage;

          return <ItemComponent key={index}>{item}</ItemComponent>;
        })}
      </Container>
    </div>
  );
};

export default MyPageSideBar;
