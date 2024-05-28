// styles.js
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  margin: 20px auto;
  border: 2px solid #c9c9c9;
  border-radius: 10px;
  padding: 15px 40px;
  background-color: #fff;
`;

export const Header = styled.h1`
  font-size: 24px;
  border-bottom: 2px solid #c9c9c9;
  text-align: left;
  margin-bottom: 40px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ImagePlaceholder = styled.img`
  width: 350px;
  height: 500px;
  background-color: #ddd;
  border-radius: 10px;
`;

export const Details = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 80px;
`;

export const DetailItem = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const Label = styled.span`
  font-weight: bold;
  width: 120px;
  text-align: left;
`;

export const Value = styled.span`
  color: #555;
`;

export const Tag = styled.div`
  background-color: #377bff;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
`;

export const Divider = styled.hr`
  margin: 20px 0;
  border: none;
  border-top: 1px solid #eee;
`;

export const FooterNote = styled.p`
  font-size: 12px;
  color: #999;
  text-align: left;
`;

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const FilterText = styled.label`
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => (props.active ? "#377bff" : "#6D758F")};
  cursor: pointer;
  padding: 0 10px;
`;

export const DescriptionWrapper = styled.div`
  max-height: ${(props) => (props.isExpanded ? "none" : "300px")};
  overflow: hidden;
  position: relative;
  transition: max-height 0.3s ease;

  &::after {
    content: "";
    display: ${(props) => (props.isExpanded ? "none" : "block")};
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background: linear-gradient(to bottom, transparent, white);
  }
`;

export const MoreButton = styled.button`
  display: ${(props) => (props.isExpanded ? "none" : "visible")};
  background: #fafafa;
  border: none;
  cursor: pointer;
  padding: 16px;
  text-align: center;
  margin-top: 10px;

  &:hover {
    text-decoration: underline;
  }
`;

export const MoreButtonText = styled.label`
  font-size: 20px;
  color: #292929;
`;
