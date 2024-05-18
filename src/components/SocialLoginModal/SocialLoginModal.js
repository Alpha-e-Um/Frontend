import { ReactComponent as Vector } from "../../assets/icons/Vector.svg";

import {
  ContainerOut,
  Container,
  Explanation,
  Title,
  LoginButton,
  GoogleButton,
  ExitButton,
} from "./styles";

import kakao from "../../assets/login/kakaologin.png";
import google from "../../assets/login/googleLogin.png";
import naver from "../../assets/login/naverLogin.png";

const SocialLoginModal = ({ setClickLoginButton }) => {
  const baseURL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:8080"
      : "https://e-um.site";

  const loginWithKakao = () => {
    window.location.href = "/oauth2/authorization/kakao";
  };

  const loginWithGoogle = () => {
    window.location.href = `${baseURL}/api/oauth2/google`;
  };

  const loginWithNaver = () => {
    window.location.href = "/oauth2/authorization/naver";
  };

  return (
    <div>
      <ContainerOut>
        <Container>
          <ExitButton
            onClick={() => {
              setClickLoginButton(false);
            }}
          >
            <Vector />
          </ExitButton>

          <Title>이음</Title>
          <Explanation>간편하게 시작하는 회원가입</Explanation>

          <LoginButton onClick={loginWithKakao}>
            <img src={kakao} alt="이미지" />
          </LoginButton>
          <GoogleButton onClick={loginWithGoogle}>
            <img
              src={google}
              alt="이미지"
              width="70px"
              style={{ marginRight: "180px" }}
            />
            구글 로그인
          </GoogleButton>

          <LoginButton onClick={loginWithNaver}>
            <img src={naver} alt="이미지" />
          </LoginButton>
        </Container>
      </ContainerOut>
    </div>
  );
};

export default SocialLoginModal;
