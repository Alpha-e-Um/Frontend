import MemberCard from "../Card/memberCard";
import { GridContainer } from "./styles";

const MemberCardGrid = (props) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "start" }}
    >
      <GridContainer>
        {props.cardDatas.map((item) => (
          <MemberCard key={item.id} data={item} />
        ))}
      </GridContainer>
    </div>
  );
};

export default MemberCardGrid;
