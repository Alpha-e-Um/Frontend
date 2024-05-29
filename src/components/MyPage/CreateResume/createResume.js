import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Title,
  Container,
  Lesson,
  InformationTag,
  Input,
  Selection,
  AddButton,
  SaveButton,
  CannelButton,
  InformationContainter,
  MyInfo,
  ImformationName,
  ImformationPeriod,
  ImformationDetail,
} from "./styled";
import { ReactComponent as Line } from "../../../assets/myPage/myInfoVector1.svg";
import { resumeAPI } from "../../../api/resumeAPI";

const mainCategory = [
  { value: "디자인", label: "디자인" },
  { value: "개발자", label: "개발자" },
  { value: "기획", label: "기획" },
  { value: "영상/사진/음향", label: "영상/사진/음향" },
  { value: "마케팅", label: "마케팅" },
  { value: "통번역", label: "통번역" },
  { value: "기타", label: "기타 " },
];

const categories = {
  디자인: [
    { value: "UI/UX 디자이너", label: "UI/UX 디자이너" },
    { value: "일러스트/캐릭터 디자이너", label: "일러스트/캐릭터 디자이너" },
    { value: "영상/모션 그래픽 디자이너", label: "영상/모션 그래픽 디자이너" },
    { value: "제품/패키지 디자이너", label: "제품/패키지 디자이너" },
    { value: "인테리어 디자이너", label: "인테리어 디자이너" },
    { value: "패션 디자이너", label: "패션 디자이너" },
    { value: "공예", label: "공예" },
    { value: "그래픽 디자이너", label: "그래픽 디자이너" },
  ],
  개발자: [
    { value: "프론트엔드", label: "프론트엔드" },
    { value: "백엔드", label: "백엔드" },
    { value: "AI 데이터 엔지니어", label: "AI 데이터 엔지니어" },
    { value: "데브옵스 개발자", label: "데브옵스 개발자" },
    { value: "보안 전문가", label: "보안 전문가" },
    { value: "게임 개발자", label: "게임 개발자" },
    { value: "임베디드 개발", label: "임베디드 개발" },
    { value: "DBA", label: "DBA" },
  ],
  기획: [{ value: "기획", label: "기획" }],
  "영상/사진/음향": [
    { value: "영상 편집", label: "영상 편집" },
    { value: "영상 촬영", label: "영상 촬영" },
    { value: "PD", label: "PD" },
    { value: "사진 작가", label: "사진 작가" },
    { value: "음향 엔지니어", label: "음향 엔지니어" },
  ],
  마케팅: [
    { value: "관리", label: "관리" },
    { value: "홍보", label: "홍보" },
    { value: "컨설팅", label: "컨설팅" },
  ],
  통번역: [
    { value: "영어", label: "영어" },
    { value: "일본어", label: "일본어" },
    { value: "중국어", label: "중국어" },
    { value: "스페인어", label: "스페인어" },
    { value: "아랍어", label: "아랍어" },
    { value: "힌디어", label: "힌디어" },
    { value: "프랑스어", label: "프랑스어" },
    { value: "기타", label: "기타" },
  ],
};

const CreateResume = () => {
  const navigate = useNavigate();

  //백엔드에 넘겨줄 데이터들
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [jobCategory, setJobCategory] = useState("");
  const [subJobCategory, setSubJobCategory] = useState("");
  const [subJobCategories, setSubJobCategories] = useState([]);
  const [gpa, setGpa] = useState("");
  const [skill, setSkill] = useState("");
  const [certificates, setCertificates] = useState([]);
  const [careers, setCareers] = useState([]);
  const [projects, setProjects] = useState([]);
  const [activities, setActivites] = useState([]);
  const [homepages, setHomepages] = useState([]);

  const [newCertificate, setNewCertificate] = useState(false);
  const [certificateName, setCertificateName] = useState("");
  const [certificateIntroduction, setCertificateIntroduction] = useState("");
  const [certificateStartDate, setCertificateStartDate] = useState("");
  const [certificateUrl, setCertificateUrl] = useState("");

  const [newCareer, setNewCareer] = useState(false);
  const [careerName, setCareerName] = useState("");
  const [careerRole, setCareerRole] = useState("");
  const [careerStartDate, setCareerStartDate] = useState("");
  const [careerTechnologiesUsed, setCareerTechnologiesUsed] = useState("");
  const [careerUrl, setCareerUrl] = useState("");
  const [careerAchievement, setCareerAchievement] = useState("");

  const [newProject, setNewProject] = useState(false);
  const [projectTitle, setProjectTitle] = useState("");
  const [projectRole, setProjectRole] = useState("");
  const [projectStartDate, setProjectStartDate] = useState("");
  const [projectUrl, setProjectUrl] = useState("");
  const [projectPhoto, setProjectPhoto] = useState("");
  const [projectIntroduction, setProjectIntroduction] = useState("");

  const [newActivite, setNewActivite] = useState(false);
  const [activiteTitle, setActiviteTitle] = useState("");
  const [activiteStartDate, setActiviteStartDate] = useState("");
  const [activiteUrl, setActiviteUrl] = useState("");
  const [activiteIntroduction, setActiviteIntroduction] = useState("");

  const [newHomepage, setNewHomepage] = useState(false);
  const [homepageType, setHomepageType] = useState("");
  const [homepageUrl, setHomepageUrl] = useState("");

  const SaveNewCertificate = () => {
    certificates.push({
      title: certificateName,
      startDate: certificateStartDate,
      endDate: "", //날짜 입력란이 한개만 있음
      introduction: certificateIntroduction,
      certificate_url: certificateUrl,
    });
    setCertificates(certificates);
    console.log(certificates);
    CloseNewCertificate();
  };
  const CloseNewCertificate = () => {
    setCertificateName("");
    setCertificateStartDate("");
    setCertificateIntroduction("");
    setCertificateUrl("");
    setNewCertificate(false);
  };

  const SaveNewCareer = () => {
    careers.push({
      companyName: careerName,
      companyRole: careerRole,
      startDate: careerStartDate,
      endDate: "",
      technologiesUsed: careerTechnologiesUsed,
      companyWebsiteUrl: careerUrl,
      achievement: careerAchievement,
    });
    setCareers(careers);
    CloseNewCareer();
  };
  const CloseNewCareer = () => {
    setCareerName("");
    setCareerRole("");
    setCareerStartDate("");
    setCareerTechnologiesUsed("");
    setCareerUrl("");
    setCareerAchievement("");
    setNewCareer(false);
  };

  const SaveNewProject = () => {
    projects.push({
      title: projectTitle,
      projectRole: projectRole,
      startDate: projectStartDate,
      endDate: "",
      projectUrl: projectUrl,
      introduction: projectIntroduction,
    });
    setProjects(projects);
    CloseNewProject();
  };
  const CloseNewProject = () => {
    setProjectTitle("");
    setProjectRole("");
    setProjectStartDate("");
    setProjectUrl("");
    setProjectPhoto("");
    setProjectIntroduction("");
    setNewProject(false);
  };

  const SaveNewActivite = () => {
    activities.push({
      title: activiteTitle,
      startDate: activiteStartDate,
      endDate: "",
      activityUrl: activiteUrl,
      introduction: activiteIntroduction,
    });
    setActivites(activities);
    CloseNewActivite();
  };
  const CloseNewActivite = () => {
    setActiviteTitle("");
    setActiviteStartDate("");
    setActiviteUrl("");
    setActiviteIntroduction("");
    setNewActivite(false);
  };

  const SaveNewHomepage = () => {
    homepages.push({
      homepageType: homepageType,
      homepageUrl: homepageUrl,
    });
    setHomepages(homepages);
    CloseNewHomepage();
  };
  const CloseNewHomepage = () => {
    setHomepageType("");
    setHomepageUrl("");
    setNewHomepage(false);
  };

  const Save = async () => {
    const data = {
      title: title,
      description: description,
      jobCategory: jobCategory.value,
      jobSubcategory: subJobCategory.value,
      gpa: parseInt(gpa),
      totalScore: 0, // 디자인 미구현
      isPublic: true,
      techStacks: [],

      certificates: certificates,
      careers: careers,
      projects: projects,
      activities: activities,
      homepages: homepages,
    };

    console.log(data);
    resumeAPI
      .postResume(data)
      .then((res) => {})
      .catch((error) => {
        console.log(error);
      });

    navigate("/mypage/resume");
  };

  useEffect(() => {
    if (jobCategory) {
      setSubJobCategories(categories[jobCategory.value] || []);
      setSubJobCategory(null);
    }
  }, [jobCategory]);

  return (
    <Container>
      <Title>신규 이력서 작성</Title>
      <Line
        style={{ marginTop: "22px", marginLeft: "auto", marginRight: "auto" }}
      />
      <Lesson>이력서 이름</Lesson>
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ marginLeft: "18px", marginTop: "20px" }}
      ></Input>

      <Lesson>기본 정보</Lesson>
      <InformationContainter
        style={{ flexDirection: "row", padding: "30px 0px 30px 0px" }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            paddingLeft: "100px",
            paddingTop: "8px",
            gap: "30px",
          }}
        >
          <InformationTag>이름</InformationTag>
          <InformationTag>전화번호</InformationTag>
          <InformationTag>생년월일</InformationTag>
          <InformationTag>소속/학교</InformationTag>
          <InformationTag>거주지역</InformationTag>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            paddingLeft: "30px",
            gap: "18px",
          }}
        >
          <MyInfo style={{ width: "60px" }}></MyInfo>
          <MyInfo></MyInfo>
          <MyInfo></MyInfo>
          <MyInfo></MyInfo>
          <MyInfo></MyInfo>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            paddingLeft: "100px",
            paddingTop: "8px",
            gap: "30px",
          }}
        >
          <InformationTag>성</InformationTag>
          <InformationTag>MBTI</InformationTag>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            paddingLeft: "30px",
            gap: "18px",
          }}
        >
          <MyInfo style={{ width: "45px" }}></MyInfo>
          <MyInfo></MyInfo>
        </div>
      </InformationContainter>

      <Lesson>이력서 정보</Lesson>
      <InformationContainter>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            marginTop: 45,
            marginLeft: 47,
          }}
        >
          <InformationTag>직군</InformationTag>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            marginTop: 10,
            marginLeft: 47,
            gap: 45,
          }}
        >
          <Selection
            value={jobCategory}
            onChange={(e) => setJobCategory(e)}
            options={mainCategory}
            placeholder="대분류"
          />
          <Selection
            value={subJobCategory}
            onChange={(e) => setSubJobCategory(e)}
            options={subJobCategories}
            placeholder="소분류"
            isDisabled={!jobCategory}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            marginTop: 43,
            marginLeft: 47,
            gap: 360,
          }}
        >
          <InformationTag>학점</InformationTag>
          <InformationTag>기술 스택</InformationTag>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            marginTop: 10,
            marginLeft: 47,
            marginBottom: 40,
            gap: 45,
          }}
        >
          <Input value={gpa} onChange={(e) => setGpa(e.target.value)} />
          <Input value={skill} onChange={(e) => setSkill(e.target.value)} />
        </div>
      </InformationContainter>

      {/* 수상자격증 */}
      <InformationContainter>
        <div
          style={{
            margin: "18px 27px 18px 27px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <InformationTag>수상/자격증</InformationTag>
          <AddButton onClick={() => setNewCertificate(true)}>
            + 정보 추가
          </AddButton>
        </div>

        {certificates.map((certificate, index) => (
          <div
            key={index}
            style={{
              margin: "10px 30px",
              paddingTop: "18px",
              borderTop: "3px solid #C9C9C9",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "10px",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "20px",
              }}
            >
              <ImformationName>{certificate.title}</ImformationName>
              <ImformationPeriod>{certificate.startDate}</ImformationPeriod>
            </div>
            <ImformationDetail>● {certificate.introduction}</ImformationDetail>
            <ImformationDetail>
              ● {certificate.certificate_url}
            </ImformationDetail>
          </div>
        ))}

        {newCertificate ? (
          <div>
            <div
              style={{
                borderTop: "3px solid #C9C9C9",
                display: "flex",
                justifyContent: "space-around",
                margin: "0px 30px",
                paddingTop: "30px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: 15,
                }}
              >
                <InformationTag>수상 자격증 이름</InformationTag>
                <Input
                  value={certificateName}
                  onChange={(e) => setCertificateName(e.target.value)}
                />
                <InformationTag>수상 취득 기간</InformationTag>
                <Input
                  value={certificateStartDate}
                  onChange={(e) => setCertificateStartDate(e.target.value)}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: 15,
                }}
              >
                <InformationTag>수상 자격증 내용</InformationTag>
                <Input
                  value={certificateIntroduction}
                  onChange={(e) => setCertificateIntroduction(e.target.value)}
                />
                <InformationTag>수상 자격증 관련 링크</InformationTag>
                <Input
                  value={certificateUrl}
                  onChange={(e) => setCertificateUrl(e.target.value)}
                />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                margin: "30px 60px",
                gap: "10px",
              }}
            >
              <SaveButton onClick={() => SaveNewCertificate()}>저장</SaveButton>
              <CannelButton onClick={() => CloseNewCertificate()}>
                취소
              </CannelButton>
            </div>
          </div>
        ) : (
          <></>
        )}
      </InformationContainter>

      {/* 경력 */}
      <InformationContainter>
        <div
          style={{
            margin: "18px 27px 18px 27px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <InformationTag>경력</InformationTag>
          <AddButton onClick={() => setNewCareer(true)}>+ 정보 추가</AddButton>
        </div>

        {careers.map((career, index) => (
          <div
            key={index}
            style={{
              margin: "10px 30px",
              paddingTop: "18px",
              borderTop: "3px solid #C9C9C9",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "10px",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "20px",
              }}
            >
              <ImformationName>{career.companyName}</ImformationName>
              <ImformationPeriod>{career.startDate}</ImformationPeriod>
            </div>
            <ImformationDetail>● {career.companyRole}</ImformationDetail>
          </div>
        ))}

        {/* 추가 */}
        {newCareer ? (
          <div>
            <div
              style={{
                borderTop: "3px solid #C9C9C9",
                display: "flex",
                justifyContent: "space-around",
                margin: "0px 30px",
                paddingTop: "30px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: 15,
                }}
              >
                <InformationTag>회사명</InformationTag>
                <Input
                  value={careerName}
                  onChange={(e) => setCareerName(e.target.value)}
                />
                <InformationTag>경력기간</InformationTag>
                <Input
                  value={careerStartDate}
                  onChange={(e) => setCareerStartDate(e.target.value)}
                />
                <InformationTag>관련 회사 링크</InformationTag>
                <Input
                  value={careerUrl}
                  onChange={(e) => setCareerUrl(e.target.value)}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: 15,
                }}
              >
                <InformationTag>직무명</InformationTag>
                <Input
                  value={careerRole}
                  onChange={(e) => setCareerRole(e.target.value)}
                />
                <InformationTag>사용 기술/스택</InformationTag>
                <Input
                  value={careerTechnologiesUsed}
                  onChange={(e) => setCareerTechnologiesUsed(e.target.value)}
                />
                <InformationTag>기타 설명 및 성과 설명</InformationTag>
                <Input
                  value={careerAchievement}
                  onChange={(e) => setCareerAchievement(e.target.value)}
                />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                margin: "30px 60px",
                gap: "10px",
              }}
            >
              <SaveButton onClick={() => SaveNewCareer()}>저장</SaveButton>
              <CannelButton onClick={() => CloseNewCareer()}>취소</CannelButton>
            </div>
          </div>
        ) : (
          <></>
        )}
      </InformationContainter>

      {/* 프로젝트 */}
      <InformationContainter>
        <div
          style={{
            margin: "18px 27px 18px 27px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <InformationTag>프로젝트</InformationTag>
          <AddButton onClick={() => setNewProject(true)}>+ 정보 추가</AddButton>
        </div>

        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              margin: "10px 30px",
              paddingTop: "18px",
              borderTop: "3px solid #C9C9C9",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "10px",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "20px",
              }}
            >
              <ImformationName>{project.title}</ImformationName>
              <ImformationPeriod>{project.startDate}</ImformationPeriod>
            </div>
            <ImformationDetail>● {project.projectRole}</ImformationDetail>
          </div>
        ))}

        {newProject ? (
          <div>
            <div
              style={{
                borderTop: "3px solid #C9C9C9",
                display: "flex",
                justifyContent: "space-around",
                margin: "0px 30px",
                paddingTop: "30px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: 15,
                }}
              >
                <InformationTag>프로젝트명</InformationTag>
                <Input
                  value={projectTitle}
                  onChange={(e) => setProjectTitle(e.target.value)}
                />
                <InformationTag>맡은 역할</InformationTag>
                <Input
                  value={projectRole}
                  onChange={(e) => setProjectRole(e.target.value)}
                />
                <InformationTag>사진</InformationTag>
                <Input
                  value={projectPhoto}
                  onChange={(e) => setProjectPhoto(e.target.value)}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: 15,
                }}
              >
                <InformationTag>진행기간</InformationTag>
                <Input
                  value={projectStartDate}
                  onChange={(e) => setProjectStartDate(e.target.value)}
                />
                <InformationTag>프로젝트 주소</InformationTag>
                <Input
                  value={projectUrl}
                  onChange={(e) => setProjectUrl(e.target.value)}
                />
                <InformationTag>프로젝트 설명</InformationTag>
                <Input
                  value={projectIntroduction}
                  onChange={(e) => setProjectIntroduction(e.target.value)}
                />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                margin: "30px 60px",
                gap: "10px",
              }}
            >
              <SaveButton onClick={() => SaveNewProject()}>저장</SaveButton>
              <CannelButton onClick={() => CloseNewProject()}>
                취소
              </CannelButton>
            </div>
          </div>
        ) : (
          <></>
        )}
      </InformationContainter>

      {/* 외부활동 */}
      <InformationContainter>
        <div
          style={{
            margin: "18px 27px 18px 27px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <InformationTag>외부활동</InformationTag>
          <AddButton onClick={() => setNewActivite(true)}>
            + 정보 추가
          </AddButton>
        </div>

        {activities.map((activite, index) => (
          <div
            key={index}
            style={{
              margin: "10px 30px",
              paddingTop: "18px",
              borderTop: "3px solid #C9C9C9",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "10px",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "20px",
              }}
            >
              <ImformationName>{activite.title}</ImformationName>
              <ImformationPeriod>{activite.startDate}</ImformationPeriod>
            </div>
            <ImformationDetail>● {activite.introduction}</ImformationDetail>
          </div>
        ))}

        {newActivite ? (
          <div>
            <div
              style={{
                borderTop: "3px solid #C9C9C9",
                display: "flex",
                justifyContent: "space-around",
                margin: "0px 30px",
                paddingTop: "30px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: 15,
                }}
              >
                <InformationTag>활동명</InformationTag>
                <Input
                  value={activiteTitle}
                  onChange={(e) => setActiviteTitle(e.target.value)}
                />
                <InformationTag>관련 링크</InformationTag>
                <Input
                  value={activiteUrl}
                  onChange={(e) => setActiviteUrl(e.target.value)}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: 15,
                }}
              >
                <InformationTag>진행기간</InformationTag>
                <Input
                  value={activiteStartDate}
                  onChange={(e) => setActiviteStartDate(e.target.value)}
                />
                <InformationTag>활동 설명</InformationTag>
                <Input
                  value={activiteIntroduction}
                  onChange={(e) => setActiviteIntroduction(e.target.value)}
                />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                margin: "30px 60px",
                gap: "10px",
              }}
            >
              <SaveButton onClick={() => SaveNewActivite()}>저장</SaveButton>
              <CannelButton onClick={() => CloseNewActivite()}>
                취소
              </CannelButton>
            </div>
          </div>
        ) : (
          <></>
        )}
      </InformationContainter>

      {/* 홈페이지 */}
      <InformationContainter>
        <div
          style={{
            margin: "18px 27px 18px 27px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <InformationTag>홈페이지</InformationTag>
          <AddButton onClick={() => setNewHomepage(true)}>
            + 정보 추가
          </AddButton>
        </div>

        {homepages.map((homepage, index) => (
          <div
            key={index}
            style={{
              margin: "10px 30px",
              paddingTop: "18px",
              borderTop: "3px solid #C9C9C9",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "10px",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "20px",
              }}
            >
              <ImformationName>홈페이지</ImformationName>
            </div>
            <ImformationDetail>{homepage.homepageUrl}</ImformationDetail>
          </div>
        ))}

        {newHomepage ? (
          <div>
            <div
              style={{
                borderTop: "3px solid #C9C9C9",
                display: "flex",
                justifyContent: "space-around",
                margin: "0px 30px",
                paddingTop: "30px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: 15,
                }}
              >
                <InformationTag>홈페이지 주소</InformationTag>
                <Input
                  value={homepageUrl}
                  onChange={(e) => setHomepageUrl(e.target.value)}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: 15,
                }}
              >
                <InformationTag>분류</InformationTag>
                <Input
                  value={homepageType}
                  onChange={(e) => setHomepageType(e.target.value)}
                />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                margin: "30px 60px",
                gap: "10px",
              }}
            >
              <SaveButton onClick={() => SaveNewHomepage()}>저장</SaveButton>
              <CannelButton onClick={() => CloseNewHomepage()}>
                취소
              </CannelButton>
            </div>
          </div>
        ) : (
          <></>
        )}
      </InformationContainter>

      <InformationContainter
        style={{
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <InformationTag
          style={{
            marginLeft: "30px",
            marginTop: "28px",
            marginBottom: "25px",
          }}
        >
          자기소개서
        </InformationTag>
        <Input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{
            marginLeft: "30px",
            width: "734px",
            height: "267px",
          }}
        />

        <InformationTag
          style={{
            marginLeft: "30px",
            marginTop: "28px",
            marginBottom: "25px",
          }}
        >
          첨부파일
        </InformationTag>

        <Input
          style={{
            marginLeft: "30px",
            marginBottom: "30px",
            width: "512px",
            height: "48px",
          }}
        />
      </InformationContainter>
      <div style={{ marginTop: 30, marginBottom: 30 }}>
        <SaveButton
          style={{
            marginLeft: "689px",
            marginRight: "10px",
          }}
          onClick={() => {
            Save();
          }}
        >
          저장
        </SaveButton>
        <CannelButton>취소</CannelButton>
      </div>
    </Container>
  );
};

export default CreateResume;
