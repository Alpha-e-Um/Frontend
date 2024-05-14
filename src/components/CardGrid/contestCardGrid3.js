import ContestCard from "../ContestCard/contestCard";
import { GridContainer, Title } from "./styles";

const ContestCardGrid3 = (props) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "start" }}
    >
      <Title>마감 임박 공모전</Title>
      <GridContainer
        style={{
          gridTemplateColumns: "repeat(3, 1fr)",
        }}
      >
        {props.cardDatas.map((item) => (
          <ContestCard key={item.deadline} data={item} />
        ))}
      </GridContainer>
    </div>
  );
};

export default ContestCardGrid3;
