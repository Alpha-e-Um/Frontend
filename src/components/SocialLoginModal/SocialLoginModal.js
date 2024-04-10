import { ReactComponent as Vector } from "../../assets/icons/Vector.svg";

import {
  ContainerOut,
  Container,
  Explanation,
  Title,
  NaverButton,
  GoogleButton,
  KakaoButton,
  ExitButton,
} from "./styles";

const SocialLoginModal = ({ setClickLoginButton }) => {
  const loginWithKakao = () => {
    window.location.href = "/oauth2/authorization/kakao";
  };

  const loginWithGoogle = () => {
    window.location.href = "http://e-um.site/api/oauth2/google";
  };

  const loginWithNaver = () => {
    window.location.href = "/oauth2/authorization/naver";
  };

  return (
    <div>
      <ContainerOut>
        <Container>
          <Title>이음</Title>
          <Explanation>간편하게 시작하는 회원가입</Explanation>
          <KakaoButton onClick={loginWithKakao}>
            카카오톡으로 진행하기
          </KakaoButton>
          <GoogleButton onClick={loginWithGoogle}>구글로 진행하기</GoogleButton>
          <NaverButton onClick={loginWithNaver}>네이버로 진행하기</NaverButton>
          <ExitButton
            onClick={() => {
              setClickLoginButton(false);
            }}
          >
            <Vector />
          </ExitButton>
        </Container>
      </ContainerOut>
    </div>
  );
};

export default SocialLoginModal;
