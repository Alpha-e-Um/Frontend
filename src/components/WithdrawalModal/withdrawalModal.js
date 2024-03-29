import {
  ContainerOut,
  Containter,
  Title,
  Explanation,
  CannelButton,
  SecessionButton,
} from "./styles";

import { ReactComponent as Icon } from "../../assets/myPage/WithdrawalIcon.svg";

const WithdrawalModal = () => {
  return (
    <ContainerOut>
      <Containter>
        <Icon style={{ position: "absolute", top: "93px" }} />
        <Title>회원 탈퇴</Title>
        <Explanation>
          회원 탈퇴시 사용자 계정의 모든 정보가 삭제됩니다. <br />
          정말로 탈퇴하시겠습니까?
        </Explanation>
        <CannelButton>취소</CannelButton>
        <SecessionButton>회원탈퇴</SecessionButton>
      </Containter>
    </ContainerOut>
  );
};

export default WithdrawalModal;
