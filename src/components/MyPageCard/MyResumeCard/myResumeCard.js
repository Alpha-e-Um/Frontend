import {
  Containter,
  Name,
  GenderAge,
  Belong,
  Region,
  Occupation,
  Introduction,
} from "./styles";
import { ReactComponent as Profile } from "../../../assets/myPage/ResumeProfile.svg";
import { ReactComponent as CenterLine } from "../../../assets/myPage/ResumeCenterLine.svg";
import { ReactComponent as SettingButton } from "../../../assets/myPage/SettingButton.svg";
import { ReactComponent as DeleteButton } from "../../../assets/myPage/DeleteButton.svg";

const MyResumeCard = ({ data }) => {
  return (
    <Containter>
      <Profile
        style={{ position: "absolute", left: "19px", top: "20px" }}
      ></Profile>

      <Name>{data.name}</Name>
      <GenderAge>
        {data.gender}/{data.age}
      </GenderAge>
      <Belong>소속:{data.belong}</Belong>
      <Region>지역:{data.region}</Region>
      <CenterLine
        style={{
          position: "absolute",
          left: "50%",
          top: "105px",
          transform: "translateX(-50%)",
        }}
      />
      <Occupation>개발자</Occupation>
      <Introduction>{data.introduction}</Introduction>

      <SettingButton
        style={{ position: "absolute", right: "50px", top: "218px" }}
      ></SettingButton>
      <DeleteButton
        style={{ position: "absolute", right: "18px", top: "218px" }}
      ></DeleteButton>
    </Containter>
  );
};

export default MyResumeCard;
