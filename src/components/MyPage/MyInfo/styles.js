import styled, { css } from "styled-components";
import { ReactComponent as Profile } from "../../../assets/myPage/profile.svg";
import { ReactComponent as Line } from "../../../assets/myPage/myInfoVector1.svg";

const fadeIn = css`
  opacity: 1;
  transform: translateY(0px);
  transition: opacity 0.3s ease-out, transform 0.3s ease-out;
`;

export const Container = styled.div`
  margin-top: 90px;
  width: 898px;
  border: 2px solid;
  border-color: #c9c9c9;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  user-select: none;

  height: ${({ $isVisible }) =>
    $isVisible ? "1000px" : "150px"}; // 조건에 따라 높이 변경
  transition: height 0.3s ease-out;
`;

export const Title = styled.label`
  margin-top: 35px;
  margin-left: 50px;
  font-size: 24px;
  font-weight: 700;

  opacity: 0;
  transform: translateY(-10px);
  ${({ $isVisible }) => $isVisible && fadeIn}
`;

export const AnimatedProfile = styled(Profile)`
  opacity: 0;
  transform: translateY(-20px);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
  ${({ $isVisible }) => $isVisible && fadeIn}
`;

export const ProfileChangeButton = styled.button`
  width: 92px;
  height: 33px;
  margin-top: 20px;
  border: 1px solid;
  border-radius: 48px;
  font-size: 16px;
  font-weight: 400;
  background-color: #ffffff;
  cursor: pointer;

  opacity: 0;
  transform: translateY(-10px);
  ${({ $isVisible }) => $isVisible && fadeIn}
`;

export const LineAnimation = styled(Line)`
  margin-top: 15px;
  margin-left: auto;
  margin-right: auto;
  opacity: 0;
  transform: translateY(-20px);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
  ${({ $isVisible }) => $isVisible && fadeIn}
`;

export const Tag = styled.label`
  margin-bottom: 49px;
  font-size: 18px;
  font-weight: 600;

  opacity: 0;
  transform: translateY(-10px);
  ${({ $isVisible }) => $isVisible && fadeIn}
`;

export const Input = styled.input`
  height: 33px;
  margin-bottom: 37px;
  border: 1px solid;
  border-radius: 9px;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  cursor: pointer;

  opacity: 0;
  transform: translateY(-10px);
  ${({ $isVisible }) => $isVisible && fadeIn}
`;

export const AlarmSettingButton = styled.button`
  opacity: 0;
  transform: translateY(-10px);
  ${({ $isVisible }) => $isVisible && fadeIn}
`;

export const AlarmButton = styled.button`
  height: 34px;
  margin-left: 15px;
  margin-bottom: 50px;
  border: 1px solid;
  border-radius: 8px;
  border-color: #c9c9c9;
  font-size: 16px;
  font-weight: 400;
  padding-left: 15px;
  padding-right: 15px;
  background-color: #ffffff;

  display: flex;
  align-items: center;

  opacity: 0;
  transform: translateY(-10px);
  ${({ $isVisible }) => $isVisible && fadeIn}
`;

export const BlueButton = styled.button`
  height: 35px;
  padding-left: 16px;
  padding-right: 16px;
  margin-right: 13px;
  background-color: #376fff;
  border: none;
  border-radius: 9px;
  font-size: 18px;
  font-weight: 700;
  color: #ffffff;
  user-select: none;
  cursor: pointer;

  transition: background-color 0.3s ease;
  &:hover {
    background-color: #2953bc;
  }

  opacity: 0;
  transform: translateY(-10px);
  ${({ $isVisible }) => $isVisible && fadeIn}
`;

export const CannelButton = styled.button`
  width: 64px;
  height: 35px;
  margin-right: 36px;
  background-color: #dedede;
  border: none;
  border-radius: 9px;
  font-size: 18px;
  font-weight: 700;
  color: #646464;
  user-select: none;
  cursor: pointer;

  transition: background-color 0.3s ease;
  &:hover {
    background-color: #9e9e9e;
  }

  opacity: 0;
  transform: translateY(-10px);
  ${({ $isVisible }) => $isVisible && fadeIn}
`;
