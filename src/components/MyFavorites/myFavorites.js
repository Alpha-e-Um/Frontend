import { SelectButton, NotSelectButton, CardContainter } from "./styles";

import MyFavoriteCard from "../MyPageCard/MyFavoriteCard/myFavoriteCard";
import MyTeamTestData from "../../api/myTeamTestData";

import teamTestData from "../../api/teamTestData";

import { useState } from "react";
import TeamCard from "../Card/teamCard";

const MyFavorites = (props) => {
  const [isToggle, setIsToggle] = useState(false);

  const TeamButton = () => {
    setIsToggle(true);
  };

  const TeamMemberButton = () => {
    setIsToggle(false);
  };

  return (
    <>
      {isToggle ? (
        <>
          <SelectButton
            onClick={TeamButton}
            style={{ right: "118px", top: "108px" }}
          >
            팀
          </SelectButton>
          <NotSelectButton
            onClick={TeamMemberButton}
            style={{ right: "41px", top: "108px" }}
          >
            팀원
          </NotSelectButton>

          <CardContainter>
            {teamTestData.map((item) => (
              <TeamCard data={{ item }} />
            ))}
          </CardContainter>
        </>
      ) : (
        <>
          <NotSelectButton
            onClick={TeamButton}
            style={{ right: "118px", top: "108px" }}
          >
            팀
          </NotSelectButton>
          <SelectButton
            onClick={TeamMemberButton}
            style={{ right: "41px", top: "108px" }}
          >
            팀원
          </SelectButton>
        </>
      )}
    </>
  );
};

export default MyFavorites;
