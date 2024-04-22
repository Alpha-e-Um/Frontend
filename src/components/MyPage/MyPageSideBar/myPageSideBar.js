import { useEffect, useMemo, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ReactComponent as CheckCircle } from "../../../assets/myPage/MyPageSidebarCircle.svg";
import { Container, SelectPage, NotSelectPage } from "./styles";

const MyPageSideBar = ({ setIsCreateTeam, setIsNewResume }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [curPage, setCurPage] = useState(0);

  const pageTitles = ["내정보", "즐겨찾기", "지원현황", "팀관리", "이력서"];
  const pagePaths = useMemo(
    () => [
      "/mypage",
      "/mypage/favorites",
      "/mypage/support",
      "/mypage/team",
      "/mypage/resume",
    ],
    [],
  );

  const sideButtonClick = (index) => {
    setIsCreateTeam(false);
    setIsNewResume(false);
    navigate(pagePaths[index]);
    setCurPage(index);
  };

  useEffect(() => {
    const currentPageIndex = pagePaths.findIndex(
      (path) => path === location.pathname,
    );
    setCurPage(currentPageIndex >= 0 ? currentPageIndex : 0);
  }, [location.pathname, pagePaths]);

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
