import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  CreateButton,
  ResumeDate,
  ResumeTitle,
  Title,
} from "./styles";
import { ReactComponent as Edit } from "../../../assets/myPage/EditButton.svg";
import { ReactComponent as Setting } from "../../../assets/myPage/ResumeSettingButton.svg";
import { resumeAPI } from "../../../api/resumeAPI";

const MyResume = () => {
  const navigate = useNavigate();

  const [resumeData, setResumeData] = useState([]);

  const CreateResume = async () => {
    navigate("/mypage/createResume");
  };

  useEffect(() => {
    resumeAPI
      .getResume()
      .then((res) => {
        console.log(res.data.data);
        setResumeData(res.data.data);
      })
      .catch((error) => {});
  }, []);

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
        <CreateButton onClick={() => CreateResume()}>이력서 생성</CreateButton>
      </div>

      {resumeData.map((item, index) => (
        <div
          key={item.id}
          style={{
            marginLeft: "22px",
            padding: "18px 0px 18px 0px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            border: "solid",
            borderWidth: "2px 0px 0px 0px",
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
            <ResumeTitle>{item.title}</ResumeTitle>
            <div>
              <Edit />
              <Setting />
            </div>
          </div>
          <ResumeDate>{item.timeStamp.updateAt.substr(0, 10)}</ResumeDate>
        </div>
      ))}

      <ResumeTitle></ResumeTitle>
    </Container>
  );
};

export default MyResume;
