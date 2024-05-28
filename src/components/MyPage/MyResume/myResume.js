import {
  Container,
  CreateButton,
  ResumeDate,
  ResumeTitle,
  Title,
} from "./styles";

import { resumeAPI } from "../../../api/resumeAPI";

import { ReactComponent as Edit } from "../../../assets/myPage/EditButton.svg";
import { ReactComponent as Setting } from "../../../assets/myPage/ResumeSettingButton.svg";

const MyResume = () => {
  // resumeAPI
  //   .getResume()
  //   .then((res) => {
  //     console.log(res);
  //   })
  //   .catch((error) => {});

  return (
    <Container>
      <Title>이력서 관리</Title>

      <div
        style={{
          marginTop: "10px",
          marginLeft: "22px",

          width: "853px",
          display: "flex",
          justifyContent: "flex-end",
          padding: "15px 0px 15px 0px",
          background: "#F9F9F9",
        }}
      >
        <CreateButton>이력서 생성</CreateButton>
      </div>
      <div
        style={{
          marginLeft: "22px",
          padding: "18px 0px 18px 0px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          border: "solid",
          borderWidth: "2px 0px",
          borderColor: "#EBEBEB",
        }}
      >
        <div
          style={{
            width: "853px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <ResumeTitle>이력서 제목</ResumeTitle>
          <div>
            <Edit />
            <Setting />
          </div>
        </div>
        <ResumeDate>이력서 날자</ResumeDate>
      </div>
      <ResumeTitle></ResumeTitle>
    </Container>
  );
};

export default MyResume;
