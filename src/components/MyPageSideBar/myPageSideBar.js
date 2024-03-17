import { useState } from "react";
import { ReactComponent as CheckCircleOn } from "../../assets/myPage/Circle.svg";
import { Title, Container, SelectPage, NotSelectPage } from "./styles";

const MyPageSideBar = (props) => {
  const [curPage, setCurPage] = useState(0);

  var arr = ["내정보", "즐겨찾기", "지원현황", "팀관리", "이력서", "회원탈퇴"];

  const sideButtonClick = (index) => {
    setCurPage(index);
  };

  return (
    <div>
      <Title>마이페이지</Title>
      <Container>
        {arr.map((item, index) => {
          const ItemComponent = curPage === index ? SelectPage : NotSelectPage;

          return (
            <ItemComponent
              key={index}
              onClick={() => sideButtonClick(index)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {curPage === index && (
                <CheckCircleOn style={{ marginRight: "20px" }} />
              )}
              {item}
            </ItemComponent>
          );
        })}
      </Container>
    </div>
  );
};

export default MyPageSideBar;
