import MemberCard from "../Card/memberCard";
import { GridContainer, Title } from "./styles";

const MemberCardGrid = (props) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "start" }}
    >
      <Title>AI 팀원 추천</Title>
      <GridContainer>
        {props.cardDatas.map((item) => (
          <MemberCard key={item.id} data={item} />
        ))}
      </GridContainer>
    </div>
  );
};

export default MemberCardGrid;
