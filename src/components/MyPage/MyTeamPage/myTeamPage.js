import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import {
  Explanation,
  Profile,
  Input,
  Sel,
  SaveButton,
  Tag,
  Title,
  Container,
} from "./styled";
import { teamAPI } from "../../../api/teamAPI";
import { ReactComponent as Line } from "../../../assets/myPage/myInfoVector1.svg";

const MyTeamPage = ({ setIsCreateTeam }) => {
  const [teamName, setTeamName] = useState("");
  const [teamIntroduction, setTeamIntroduction] = useState("");
  const [teamContent, setTeamContent] = useState("");
  const [domain, setDomain] = useState("");
  const [location, setLocation] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (value, setter) => {
    setter(value);
  };

  const onDrop = (acceptedFiles) => {
    setProfileImage(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
    multiple: false,
  });

  const registerTeam = async () => {
    if (
      !teamName ||
      !teamIntroduction ||
      !teamContent ||
      !domain ||
      !location ||
      !phoneNumber ||
      !email
    ) {
      setErrors({
        teamName: teamName ? "" : "팀명을 입력해 주세요",
        teamIntroduction: teamIntroduction
          ? ""
          : "팀 상세 소개를 입력해 주세요",
        domain: domain ? "" : "분야를 선택해 주세요",
        location: location ? "" : "활동 지역을 선택해 주세요",
        phoneNumber: phoneNumber ? "" : "연락처를 입력해 주세요",
        email: email ? "" : "이메일을 입력해 주세요",
      });
    } else {
      const data = {
        name: teamName,
        introduction: teamIntroduction,
        content: teamContent,
        domain: domain,
        location: location,
        phoneNumber: phoneNumber,
        email: email,
        profileImage: profileImage,
      };

      teamAPI
        .postNewTeam(data)
        .then((res) => {
          console.log(res);
          setIsCreateTeam(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <Container>
      <Title>신규 팀 등록</Title>
      <Line
        style={{ marginTop: "22px", marginLeft: "auto", marginRight: "auto" }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          height: "100%",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <div
            {...getRootProps()}
            style={{
              border: "1px dashed gray",
              padding: "20px",
              cursor: "pointer",
              width: "200px",
              height: "200px",
            }}
          >
            <input {...getInputProps()} />
            {profileImage ? (
              <img
                src={URL.createObjectURL(profileImage)}
                alt="Profile Preview"
                style={{ width: "200px", height: "200px" }}
              />
            ) : (
              <p style={{ textAlign: "center" }}>
                사진을 여기에 드래그 하거나 클릭하여 업로드하세요 1:1 비율 권장
              </p>
            )}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              height: "242px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "start",
              }}
            >
              <Tag>팀명</Tag>
              <Tag>분야</Tag>
              <Tag>활동 지역</Tag>
              <Tag>연락처</Tag>
              <Tag>이메일</Tag>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
              }}
            >
              <Input
                value={teamName}
                onChange={(e) => handleChange(e.target.value, setTeamName)}
              />
              {errors.teamName && (
                <div style={{ color: "red" }}>{errors.teamName}</div>
              )}

              <Sel
                value={domain}
                onChange={(e) => handleChange(e.target.value, setDomain)}
              >
                <option value="">선택</option>
                <option value="design">디자인</option>
                <option value="development">개발</option>
              </Sel>
              {errors.domain && (
                <div style={{ color: "red" }}>{errors.domain}</div>
              )}

              <Sel
                value={location}
                onChange={(e) => handleChange(e.target.value, setLocation)}
              >
                <option value="">선택</option>
                <option value="seoul">서울</option>
                <option value="busan">부산</option>
                <option value="incheon">인천</option>
                <option value="daegu">대구</option>
                <option value="gwangju">광주</option>
                <option value="daejeon">대전</option>
                <option value="ulsan">울산</option>
                <option value="gyeonggi">경기도</option>
                <option value="gangwon">강원도</option>
                <option value="chungbuk">충청북도</option>
                <option value="chungnam">충청남도</option>
                <option value="jeonbuk">전라북도</option>
                <option value="jeonnam">전라남도</option>
                <option value="gyeongbuk">경상북도</option>
                <option value="gyeongnam">경상남도</option>
                <option value="jeju">제주도</option>
              </Sel>
              {errors.location && (
                <div style={{ color: "red" }}>{errors.location}</div>
              )}

              <Input
                value={phoneNumber}
                onChange={(e) => handleChange(e.target.value, setPhoneNumber)}
              />
              {errors.phoneNumber && (
                <div style={{ color: "red" }}>{errors.phoneNumber}</div>
              )}

              <Input
                value={email}
                onChange={(e) => handleChange(e.target.value, setEmail)}
              />
              {errors.email && (
                <div style={{ color: "red" }}>{errors.email}</div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          marginTop: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Tag style={{ marginBottom: 15 }}>한줄 소개</Tag>
        <Explanation
          value={teamIntroduction}
          onChange={(e) => handleChange(e.target.value, setTeamIntroduction)}
        />
      </div>

      <div
        style={{
          marginTop: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Tag style={{ marginBottom: 15 }}>상세 소개</Tag>
        <Explanation
          value={teamContent}
          onChange={(e) => handleChange(e.target.value, setTeamContent)}
        />
      </div>

      <SaveButton
        style={{ marginTop: 30, marginLeft: 700, marginBottom: 100 }}
        onClick={registerTeam}
      >
        등록하기
      </SaveButton>
    </Container>
  );
};

export default MyTeamPage;
