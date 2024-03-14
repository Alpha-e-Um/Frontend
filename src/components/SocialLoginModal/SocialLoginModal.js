import { useState } from "react";

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

const SocialLoginModal = () => {
  const [isLogin, setIsLogin] = useState(false);

  const openSocialLoginModal = () => {
    setIsLogin(true);
  };

  const closeSocialLoginModal = () => {
    setIsLogin(false);
  };

  return (
    <div>
      <button onClick={openSocialLoginModal}>로그인</button>
      {isLogin ? (
        <ContainerOut>
          <Container>
            <Title>이음</Title>
            <Explanation>간편하게 시작하는 회원가입</Explanation>
            <KakaoButton>카카오톡으로 진행하기</KakaoButton>
            <GoogleButton>구글로 진행하기</GoogleButton>
            <NaverButton>네이버로 진행하기</NaverButton>
            <ExitButton onClick={closeSocialLoginModal}>X</ExitButton>
          </Container>
        </ContainerOut>
      ) : (
        <></>
      )}
    </div>
  );
};

export default SocialLoginModal;
