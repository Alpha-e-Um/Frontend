import styled from "styled-components";
import Select from "react-select";

export const Container = styled.div`
  margin-top: 90px;
  width: 889px;
  border: 2px solid;
  border-radius: 12px;
  border-color: #c9c9c9;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Title = styled.label`
  margin-top: 35px;
  margin-left: 50px;
  font-size: 24px;
  font-weight: 700;
`;

export const Lesson = styled.label`
  margin-top: 35px;
  margin-left: 50px;
  font-size: 24px;
  font-weight: 700;
`;

export const InformationContainter = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  width: 849px;
  border: 2px solid;
  border-radius: 12px;
  border-color: #c9c9c9;

  display: flex;
  flex-direction: column;
`;

export const InformationTag = styled.label`
  font-size: 20px;
  font-weight: 600;
`;

export const MyInfo = styled.div`
  width: 162px;
  height: 33px;
  background: #c9c9c9;
  border: 2px solid;
  border-radius: 8px;
  border-color: #c9c9c9;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
`;

export const Input = styled.input`
  width: 332px;
  height: 33px;
  border: 2px solid;
  border-radius: 8px;
  border-color: #c9c9c9;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
`;

export const Selection = styled(Select).attrs({
  styles: {
    control: (provided) => ({
      ...provided,
      width: "336px",
      height: "33px",
      border: "2px solid #c9c9c9",
      borderRadius: "8px",
      fontSize: "16px",
      fontWeight: "400",
      textAlign: "center",
      boxShadow: "none",
      "&:hover": {
        borderColor: "#c9c9c9",
      },
    }),
    input: (provided) => ({
      ...provided,
      fontSize: "16px",
      fontWeight: "400",
      textAlign: "center",
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      padding: "4px",
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
  },
})``;

export const ImformationName = styled.label`
  font-size: 22px;
  font-weight: 600;
`;

export const ImformationPeriod = styled.label`
  font-size: 20px;
  font-weight: 400;
  color: #c9c9c9;
`;

export const ImformationDetail = styled.label`
  font-size: 20px;
  font-weight: 300;
  margin-left: 18px;
`;

export const AddButton = styled.button`
  width: 106px;
  height: 33px;
  border: 2px solid;
  border-radius: 8px;
  color: #377bff;
  background-color: #ffffff;
  cursor: pointer;
`;

export const SaveButton = styled.button`
  width: 64px;
  height: 35px;
  background-color: #376fff;
  border: none;
  border-radius: 9px;
  font-size: 18px;
  font-weight: 700;
  color: #ffffff;
  user-select: none;
  cursor: pointer;
`;
export const CannelButton = styled.button`
  width: 64px;
  height: 35px;
  background-color: #dedede;
  border: none;
  border-radius: 9px;
  font-size: 18px;
  font-weight: 700;
  color: #646464;
  user-select: none;
  cursor: pointer;
`;
