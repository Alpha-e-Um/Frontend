import {
  Containter,
  ProjectName,
  TeamAndRegion,
  DateLabel,
  TimeLabel,
  Introduction,
  Pass,
  Fail,
} from "./styles";

const MySupportCard = ({ data }) => {
  return (
    <Containter>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <ProjectName>{data.projectName}</ProjectName>
        <div>
          <TeamAndRegion>
            {data.teamName} / {data.region}
          </TeamAndRegion>
          <DateLabel>{data.date}</DateLabel>
          <TimeLabel>| {data.time}</TimeLabel>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
        }}
      >
        <Introduction>{data.introduction}</Introduction>
        <div style={{ display: "flex" }}>
          <img
            alt="qwe"
            src="/icons/file-text.svg"
            width={30}
            style={{ marginRight: "10px", cursor: "pointer" }}
          />
          {data.pass ? <Pass>합격</Pass> : <Fail>불합격</Fail>}
        </div>
      </div>
    </Containter>
  );
};

export default MySupportCard;
