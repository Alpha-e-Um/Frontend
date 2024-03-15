import { useState } from "react";
import { Container, SelectPage } from "./styles";

const MyPageSideBar = (props) => {
  const [curPage, setCurPage] = useState(0);

  return (
    <div>
      <Container>
        <SelectPage>내 정보</SelectPage>
      </Container>
    </div>
  );
};

export default MyPageSideBar;
