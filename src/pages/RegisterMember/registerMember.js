import React, { useEffect, useState } from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-quill/dist/quill.snow.css"; // react-quill의 스타일
import ReactQuill from "react-quill"; // react-quill 임포트
import {
  Explanation,
  Profile,
  Input,
  SaveButton,
  Tag,
  Title,
  Container,
  RegistrationButton,
  QuillWrapper,
} from "./styles";
import Navigation from "../../components/Navigation/navigation";
import { ReactComponent as Line } from "../../assets/Line.svg";
import { teamAPI } from "../../api/teamAPI";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/footer";

const occupationOptions = [
  { value: "design_ui_ux", label: "UI/UX 디자인" },
  { value: "design_illustration_character", label: "일러스트/캐릭터 디자인" },
  { value: "design_movie_motion_graphic", label: "영화/모션그래픽 디자인" },
  { value: "design_product_package", label: "제품/패키지 디자인" },
  { value: "design_passion", label: "열정 디자인" },
  { value: "design_crafts", label: "공예 디자인" },
  { value: "design_graphic", label: "그래픽 디자인" },
  { value: "development_frontend", label: "프론트엔드 개발" },
  { value: "development_backend", label: "백엔드 개발" },
  { value: "development_ai", label: "AI 개발" },
  { value: "development_devops", label: "DevOps 개발" },
  { value: "development_security", label: "보안 개발" },
  { value: "development_game", label: "게임 개발" },
  { value: "development_embedded", label: "임베디드 개발" },
  { value: "development_dba", label: "DBA" },
  { value: "plan", label: "기획" },
  { value: "media_editing_movie", label: "영화 편집" },
  { value: "media_filming_movie", label: "영화 촬영" },
  { value: "media_pd", label: "PD" },
  { value: "media_photographer", label: "사진작가" },
  { value: "media_sound_engineer", label: "음향 엔지니어" },
  { value: "marketing_management", label: "마케팅 관리" },
  { value: "marketing_promotion", label: "마케팅 홍보" },
  { value: "marketing_consulting", label: "마케팅 컨설팅" },
  { value: "translation_english", label: "영어 번역" },
  { value: "translation_japanese", label: "일본어 번역" },
  { value: "translation_chinese", label: "중국어 번역" },
  { value: "translation_spanish", label: "스페인어 번역" },
  { value: "translation_arabic", label: "아랍어 번역" },
  { value: "translation_hindi", label: "힌디어 번역" },
  { value: "translation_french", label: "프랑스어 번역" },
  { value: "translation_etc", label: "기타 번역" },
  { value: "etc", label: "기타" },
];

const locationOptions = [
  { value: "seoul", label: "서울" },
  { value: "busan", label: "부산" },
  { value: "incheon", label: "인천" },
  { value: "daegu", label: "대구" },
  { value: "gwangju", label: "광주" },
  { value: "daejeon", label: "대전" },
  { value: "ulsan", label: "울산" },
  { value: "gyeonggi", label: "경기도" },
  { value: "gangwon", label: "강원도" },
  { value: "chungbuk", label: "충청북도" },
  { value: "chungnam", label: "충청남도" },
  { value: "jeonbuk", label: "전라북도" },
  { value: "jeonnam", label: "전라남도" },
  { value: "gyeongbuk", label: "경상북도" },
  { value: "gyeongnam", label: "경상남도" },
  { value: "jeju", label: "제주도" },
];

const RegisterMember = ({ setIsCreateTeam }) => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [description, setDescription] = useState("");
  const [vacancies, setVacancies] = useState(0);
  const [teamId, setTeamId] = useState(0);
  const [occupationClassifications, setOccupationClassifications] = useState(
    [],
  );
  const [publish, setPublish] = useState(true);
  const [expiredDate, setExpiredDate] = useState(new Date());
  const [location, setLocation] = useState("");
  const [errors, setErrors] = useState({});
  const [teamList, setTeamList] = useState([]);
  const navigate = useNavigate();

  const handleChange = (value, setter) => {
    setter(value);
  };

  const registerTeamAnnouncement = async () => {
    if (
      !title ||
      !description ||
      !vacancies ||
      !occupationClassifications ||
      !publish ||
      !expiredDate ||
      !location ||
      !teamId ||
      !summary
    ) {
      alert("모든 항목을 채워주세요");
      return;
    }
    const data = {
      teamId: teamId.value,
      title: title,
      description: description,
      vacancies: vacancies,
      occupationClassifications: occupationClassifications.map(
        (opt) => opt.value,
      ),
      publish: publish,
      expiredDate: expiredDate.toISOString(),
      region: location.label,
      summary: summary,
    };

    console.log(data);

    teamAPI
      .postNewTeamAnnouncement(data)
      .then((res) => {
        console.log(res);
        navigate("/teamannouncement");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    teamAPI
      .getMyTeams()
      .then((res) => {
        const teamList = res.data.data.filter((team) => team.isOwner);
        setTeamList(
          teamList.map((team) => ({ value: team.id, label: team.name })),
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    console.log(description);
  }, [description]);

  return (
    <div>
      <Navigation />
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <Container>
          <Title>팀원 모집 공고</Title>
          <Line
            style={{
              marginTop: "22px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
          <Tag style={{ marginTop: 20 }}>공고 제목</Tag>
          <Input
            style={{ width: "100%", marginRight: "auto", marginTop: "14px" }}
            value={title}
            onChange={(e) => handleChange(e.target.value, setTitle)}
          />
          <div
            style={{
              display: "flex",
              marginTop: "40px",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
              }}
            >
              <Tag>모집 분야</Tag>
              <Select
                options={occupationOptions}
                isMulti
                value={occupationClassifications}
                onChange={(selected) => setOccupationClassifications(selected)}
                styles={{ marginTop: "10px", width: "330px" }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
              }}
            >
              <Tag>팀 선택</Tag>
              <Select
                options={teamList}
                value={teamId}
                onChange={(selected) => {
                  setTeamId(selected);
                }}
                styles={{ marginTop: "10px", width: "330px" }}
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
              }}
            >
              <Tag>활동 지역</Tag>
              <Select
                options={locationOptions}
                value={location}
                onChange={(selected) => setLocation(selected)}
                styles={{ marginTop: "10px", width: "330px" }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
              }}
            >
              <Tag>모집 마감일</Tag>
              <DatePicker
                style={{ marginTop: "10px", width: "330px", height: "38px" }}
                selected={expiredDate}
                onChange={(date) => setExpiredDate(date)}
                dateFormat="yyyy-MM-dd"
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
              }}
            >
              <Tag>모집 인원</Tag>
              <Input
                value={vacancies}
                onChange={(e) => handleChange(e.target.value, setVacancies)}
              />
            </div>
          </div>
          <Tag style={{ marginTop: 20 }}>한줄 요약</Tag>
          <Input
            style={{ width: "100%", marginRight: "auto", marginTop: "14px" }}
            value={summary}
            onChange={(e) => handleChange(e.target.value, setSummary)}
          />
          <div style={{ marginTop: 20 }}>
            <Tag>팀 상세 소개</Tag>
          </div>
          <QuillWrapper>
            <ReactQuill
              value={description}
              onChange={setDescription}
              style={{ height: "240px", width: "100%" }}
            />
          </QuillWrapper>

          <div
            style={{ display: "flex", width: "100%", justifyContent: "end" }}
          >
            <RegistrationButton onClick={registerTeamAnnouncement}>
              등록하기
            </RegistrationButton>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default RegisterMember;
