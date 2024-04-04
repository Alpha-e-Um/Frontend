import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as CheckCircle } from "../../assets/myPage/MyPageSidebarCircle.svg";
import { Container, SelectPage, NotSelectPage } from "./styles";

const MyPageSideBar = ({ setIsCreateTeam }) => {
  const navigate = useNavigate();
  const [curPage, setCurPage] = useState(0);

  var pageTitles = ["내정보", "즐겨찾기", "지원현황", "팀관리", "이력서"];

  const sideButtonClick = (index) => {
    setIsCreateTeam(false);
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
      default:
        break;
    }

    setCurPage(index);
  };

  return (
    <Container>
      {pageTitles.map((item, index) => {
        const ItemComponent = curPage === index ? SelectPage : NotSelectPage;

        return (
          <ItemComponent key={index} onClick={() => sideButtonClick(index)}>
            {curPage === index && (
              <CheckCircle style={{ marginRight: "20px" }} />
            )}
            {item}
          </ItemComponent>
        );
      })}
    </Container>
  );
};

export default MyPageSideBar;
