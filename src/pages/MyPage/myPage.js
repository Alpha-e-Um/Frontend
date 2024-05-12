import React, { useState, useRef } from "react";
import { Routes, Route } from "react-router-dom";

import Navigation from "../../components/Navigation/navigation";
import MyPageSideBar from "../../components/MyPage/MyPageSideBar/myPageSideBar";
import MyInfo from "../../components/MyPage/MyInfo/myInfo";
import MyFavorites from "../../components/MyPage/MyFavorites/myFavorites";
import MySupport from "../../components/MyPage/MySupport/mySupport";
import MyTeam from "../../components/MyPage/MyTeam/myTeam";
import MyTeamPage from "../../components/MyPage/MyTeamPage/myTeamPage";
import MyResume from "../../components/MyPage/MyResume/myResume";

import { Title } from "./styles";
import WithdrawalModal from "../../components/WithdrawalModal/withdrawalModal";
import MyNewResume from "../../components/MyPage/MyNewResume/myNewResume";

const MyPage = (props) => {
  const [isCreateTeam, setIsCreateTeam] = useState(false);
  const [isNewResume, setIsNewResume] = useState(false);
  const [isWithdrawal, setIsWithdrawal] = useState(false);

  const pageAnimationRef = useRef({});
  const pageOutAnimation = () => {
    pageAnimationRef.current.EndAnimation();
  };

  return (
    <div>
      <Navigation />

      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <Title>마이페이지</Title>
          <MyPageSideBar
            setIsCreateTeam={setIsCreateTeam}
            setIsNewResume={setIsNewResume}
            pageOutAnimation={pageOutAnimation}
          />
        </div>
        <Routes>
          <Route
            index
            element={
              <div>
                <MyInfo
                  IsWithdrawal={setIsWithdrawal}
                  innerRef={pageAnimationRef}
                />
              </div>
            }
          />
          <Route
            path="favorites"
            element={
              <div>
                <MyFavorites />
              </div>
            }
          />
          <Route
            path="support"
            element={
              <div>
                <MySupport />
              </div>
            }
          />
          <Route
            path="team"
            element={
              <div>
                {isCreateTeam ? (
                  <MyTeamPage setIsCreateTeam={setIsCreateTeam} />
                ) : (
                  <MyTeam setIsCreateTeam={setIsCreateTeam} />
                )}
              </div>
            }
          />
          <Route
            path="resume"
            element={
              <div>
                {isNewResume ? (
                  <MyNewResume setIsNewResume={setIsNewResume} />
                ) : (
                  <MyResume setIsNewResume={setIsNewResume} />
                )}
              </div>
            }
          />
        </Routes>
      </div>

      {isWithdrawal ? (
        <WithdrawalModal IsWithdrawal={setIsWithdrawal} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default MyPage;
