import {
  Title,
  Container,
  InformationTag,
  Input,
  AddButton,
  SaveButton,
  CannelButton,
} from "./styled";

const MyNewResume = ({ setIsNewResume }) => {
  return (
    <div
      style={{
        position: "relative",
        marginTop: 121,
        marginLeft: 32,
        marginRight: 32,
        marginBottom: 100,
        textAlign: "left",
      }}
    >
      ``
      <Title>기본 정보</Title>
      <Container
        style={{
          width: "825px",
          height: "347px",
          marginTop: "28px",
          marginBottom: "52px",
        }}
      >
        <InformationTag style={{ left: "128px", top: "44px" }}>
          이름
        </InformationTag>
        <Input
          style={{
            left: "205px",
            top: "42px",
            width: "60px",
            height: "33px",
          }}
        />

        <InformationTag style={{ left: "466px", top: "44px" }}>
          성
        </InformationTag>
        <Input
          style={{
            left: "522px",
            top: "42px",
            width: "46px",
            height: "33px",
          }}
        />

        <InformationTag style={{ left: "113px", top: "94px" }}>
          전화번호
        </InformationTag>
        <Input
          style={{
            left: "205px",
            top: "92px",
            width: "162px",
            height: "33px",
          }}
        />

        <InformationTag style={{ left: "452px", top: "94px" }}>
          MBTI
        </InformationTag>
        <Input
          style={{
            left: "522px",
            top: "85px",
            width: "88px",
            height: "33px",
          }}
        />

        <InformationTag style={{ left: "113px", top: "144px" }}>
          생년월일
        </InformationTag>
        <Input
          type="date"
          style={{
            left: "205px",
            top: "142px",
            width: "139px",
            height: "33px",
          }}
        />

        <InformationTag style={{ left: "110px", top: "194px" }}>
          소속/학교
        </InformationTag>
        <Input
          style={{
            left: "205px",
            top: "192px",
            width: "176px",
            height: "33px",
          }}
        />

        <InformationTag style={{ left: "111px", top: "244px" }}>
          거주 지역
        </InformationTag>
        <Input
          style={{
            left: "205px",
            top: "242px",
            width: "131px",
            height: "33px",
          }}
        />
      </Container>
      <Title>이력서 정보</Title>
      <Container style={{ marginTop: "52px", height: "281px" }}>
        <InformationTag style={{ left: "47px", top: "54px" }}>
          직군
        </InformationTag>
        <Input
          style={{
            left: "43px",
            top: "86px",
            width: "332px",
            height: "36px",
          }}
        />
        <Input
          style={{
            left: "422px",
            top: "86px",
            width: "332px",
            height: "36px",
          }}
        />

        <InformationTag style={{ left: "47px", top: "167px" }}>
          학점
        </InformationTag>
        <Input
          style={{
            left: "43px",
            top: "200px",
            width: "332px",
            height: "36px",
          }}
        />

        <InformationTag style={{ left: "427px", top: "167px" }}>
          스킬
        </InformationTag>
        <Input
          style={{
            left: "422px",
            top: "200px",
            width: "332px",
            height: "36px",
          }}
        />
      </Container>
      <Container>
        <InformationTag style={{ left: "30px", top: "28px" }}>
          수상/자격증
        </InformationTag>
        <AddButton>+ 정보 추가</AddButton>
      </Container>
      <Container>
        <InformationTag style={{ left: "30px", top: "28px" }}>
          경력
        </InformationTag>
        <AddButton>+ 정보 추가</AddButton>
      </Container>
      <Container>
        <InformationTag style={{ left: "30px", top: "28px" }}>
          프로젝트
        </InformationTag>
        <AddButton>+ 정보 추가</AddButton>
      </Container>
      <Container>
        <InformationTag style={{ left: "30px", top: "28px" }}>
          외부활동
        </InformationTag>
        <AddButton>+ 정보 추가</AddButton>
      </Container>
      <Container>
        <InformationTag style={{ left: "30px", top: "28px" }}>
          홈페이지
        </InformationTag>
        <AddButton>+ 정보 추가</AddButton>
      </Container>
      <Container style={{ height: "488px" }}>
        <InformationTag style={{ left: "30px", top: "28px" }}>
          자기소개서
        </InformationTag>
        <Input
          style={{
            left: "30px",
            top: "66px",
            width: "734px",
            height: "267px",
          }}
        />
        <InformationTag style={{ left: "30px", top: "364px" }}>
          첨부 파일
        </InformationTag>
        <Input
          style={{
            left: "30px",
            top: "400px",
            width: "512px",
            height: "48px",
          }}
        />
      </Container>
      <SaveButton onClick={() => setIsNewResume(false)}>저장</SaveButton>
      <CannelButton onClick={() => setIsNewResume(false)}>취소</CannelButton>
    </div>
  );
};

export default MyNewResume;
