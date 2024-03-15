import React from "react";
import Navigation from "../../components/Navigation/navigation";
import MyInfo from "../../components/MyInfo/myInfo";
import MyPageSideBar from "../../components/MyPageSideBar/myPageSideBar";

const MyPage = (props) => {
  return (
    <div>
      <Navigation />
      <MyPageSideBar />
    </div>
  );
};

export default MyPage;
