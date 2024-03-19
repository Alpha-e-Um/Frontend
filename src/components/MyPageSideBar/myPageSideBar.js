import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as CheckCircleOn } from "../../assets/myPage/Circle.svg";
import { Container, SelectPage, NotSelectPage } from "./styles";

const MyPageSideBar = (props) => {
  const navigate = useNavigate();
  const [curPage, setCurPage] = useState(0);

  var arr = ["내정보", "즐겨찾기", "지원현황", "팀관리", "이력서"];

  const sideButtonClick = (index) => {
    switch (index) {
      case 0:
        navigate("/mypage");
        break;
      case 1:
        navigate("/mypage/favorites");
        break;
      case 2:
        navigate("/mypage/support");
        break;
      case 3:
        navigate("/mypage/team");
        break;
      case 4:
        navigate("/mypage/resume");
        break;
    }

    setCurPage(index);
  };

  return (
    <div>
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
