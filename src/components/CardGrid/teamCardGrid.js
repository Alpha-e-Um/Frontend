import TeamCard from "../Card/teamCard";
import { GridContainer, Title } from "./styles";

const TeamCardGrid = (props) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "start" }}
    >
      <Title>AI 팀 추천</Title>
      <GridContainer>
        {props.cardDatas.map((item) => (
          <TeamCard key={item.id} data={item} />
        ))}
      </GridContainer>
    </div>
  );
};

export default TeamCardGrid;
