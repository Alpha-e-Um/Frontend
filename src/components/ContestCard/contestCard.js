import {
  CardContainer,
  ContestDetails,
  ContestHit,
  ContestInfo,
  ContestName,
  DeadlineButton,
  DeadlineText,
  PosterImage,
} from "./styles";

const ContestCard = ({ data }) => {
  return (
    <CardContainer>
      <DeadlineButton>
        <DeadlineText>D - {data.deadline}</DeadlineText>
      </DeadlineButton>
      <div style={{ maxHeight: "300px", overflow: "hidden" }}>
        <PosterImage src="/images/poster.png" alt="Contest Poster" />
      </div>
      <ContestDetails>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "10px",
            padding: "14px",
            alignItems: "start",
          }}
        >
          <ContestName>{data.name}</ContestName>
          <ContestInfo>{data.organizer}</ContestInfo>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "end",
          }}
        >
          <ContestHit>조회{data.views}</ContestHit>
        </div>
      </ContestDetails>
    </CardContainer>
  );
};

export default ContestCard;
