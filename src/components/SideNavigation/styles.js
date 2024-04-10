import styled from "styled-components";

export const Navigation = styled.nav`
  background-color: #ffffff;
  border-radius: 12px;
  border: #c9c9c9 solid 2px;
  padding: 20px;
  width: 300px;
`;

export const NavHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const Title = styled.h3`
  border-top: 1px solid #eee;
  padding-top: 20px;
  font-size: 1.25rem;
  color: #333;
  &:first-of-type {
    border-top: none;
    padding-top: 0;
  }
`;

export const ResetButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #007bff;
  font-size: 1rem;
`;

export const Section = styled.section`
  padding-top: 20px;
`;

export const SectionTitleRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const SectionTitle = styled.h4`
  color: #333;
  font-size: 18px;
  margin: 0;
`;

export const Checkbox = styled.input.attrs({ type: "checkbox" })`
  margin-right: 10px;
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

export const ItemList = styled.ul`
  list-style: none;
  padding-left: 0;
`;

export const Item = styled.li`
  font-size: 18px;
  color: #333;
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  margin-left: 20px;
  cursor: pointer;
`;
