import React from "react";
import Navigation from "../../components/Navigation/navigation";
//import MyInfo from "../../components/MyInfo/myInfo";
import MyFavorites from "../../components/MyFavorites/myFavorites";
import MyPageSideBar from "../../components/MyPageSideBar/myPageSideBar";

const MyPage = (props) => {
  return (
    <div>
      <Navigation />
      <MyPageSideBar />
      <MyFavorites />
    </div>
  );
};

export default MyPage;
