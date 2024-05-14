import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const Title = styled.label`
  text-align: center;
  font-size: 30px;
  font-weight: 700;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

export const TableHead = styled.thead`
  background-color: #f1f1f1;
`;

export const TableRow = styled.tr`
  /* &:nth-child(even) {
    background-color: #f9f9f9;
  } */
`;

export const TableHeader = styled.th`
  padding: 16px;
  border: 1px solid #ddd;
  text-align: center;
  font-size: 24px;
  color: #818181;
  font-weight: 500;
`;

export const TableCell = styled.td`
  padding: 20px;
  border: 1px solid #ddd;
`;

export const ContestTitle = styled.label`
  font-size: 24px;
  font-weight: 700;
`;

export const OrganizerTitle = styled.label`
  font-size: 20px;
  font-weight: 400;
  color: #565656;
`;

export const DeadlineTitle = styled.label`
  font-size: 20px;
  font-weight: 400;
  color: #565656;
`;

export const StateButton = styled.button`
  all: unset;
  width: 60px;
  height: 20px;
  font-size: 16px;
  font-weight: 500;
  background-color: ${(props) => props.bgColor || "#377bff"};
  padding: 8px 16px;
  color: ${(props) => props.color || "#ffffff"};
  border: ${(props) => props.border || "#ffffff"};
  border-radius: 8px;
`;

export const ViewTitle = styled.label`
  font-size: 20px;
  font-weight: 400;
  color: #565656;
`;

export const FilterText = styled.label`
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => (props.active ? "#377bff" : "#6D758F")};
  cursor: pointer;
  padding: 0 10px;
`;

export const Divider = styled.span`
  width: 1px;
  height: 20px;
  background-color: #ddd;
  margin: 0 10px;
`;

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
`;
