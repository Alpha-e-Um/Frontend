import {
  Containter,
  ProjectName,
  TeamAndRegion,
  Date,
  Time,
  Introduction,
  Pass,
  Fail,
} from "./styles";

import { ReactComponent as CenterLine } from "../../../assets/myPage/SupportCenterLine.svg";

const SupportCard = ({ data }) => {
  console.log(data.projectName);
  return (
    <Containter>
      <ProjectName>{data.projectName}</ProjectName>
      <TeamAndRegion>
        {data.teamName} / {data.region}
      </TeamAndRegion>
      <Date>{data.date}</Date>
      <Time>| {data.time}</Time>

      <CenterLine
        style={{
          position: "absolute",
          top: "41px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />

      <Introduction>{data.introduction}</Introduction>
      {data.pass ? <Pass>합격</Pass> : <Fail>불합격</Fail>}
    </Containter>
  );
};

export default SupportCard;
