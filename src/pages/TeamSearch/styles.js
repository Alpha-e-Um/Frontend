import styled from "styled-components";

export const Title = styled.label`
  font-size: 30px;
  font-weight: 700;
`;

export const FilterContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: end;
  margin-bottom: 20px;
`;

export const FilterButton = styled.label`
  cursor: pointer;
  margin: 0 10px;
  color: ${({ $active }) => ($active ? "#377BFF" : "#6D758F")};
  text-decoration: ${({ $active }) => ($active ? "underline #377bff" : "none")};
  &:hover {
    color: #377bff;
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  margin: 0px 10px;
  justify-content: end;
  margin-bottom: 10px;
  label {
    cursor: pointer;
    display: flex;
    align-items: center;
    input {
      margin-right: 8px;
    }
  }
`;
