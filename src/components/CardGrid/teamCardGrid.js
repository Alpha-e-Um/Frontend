import TeamCard from "../Card/teamCard";
import { GridContainer } from "./styles";

const TeamCardGrid = (props) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "start" }}
    >
      <GridContainer>
        {props.cardDatas.map((item) => (
          <TeamCard key={item.id} data={item} />
        ))}
      </GridContainer>
    </div>
  );
};

export default TeamCardGrid;
