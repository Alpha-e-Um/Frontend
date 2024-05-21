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
  font-weight: 700;
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

export const WriteButton = styled.div`
  background-color: #377bff;
  padding: 14px 66px;
  border-radius: 6px;
  margin-bottom: 28px;
  cursor: pointer;

  > label {
    cursor: pointer;
    font-size: 24px;
    font-weight: 700;
    color: white;
  }
`;

export const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const SearchInput = styled.input`
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const SearchButton = styled.button`
  background: none;
  border: none;
  margin-left: 8px;
  cursor: pointer;
`;

export const SearchIcon = styled.img`
  width: 16px;
  height: 16px;
`;
