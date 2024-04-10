import React from "react";
import styled from "styled-components";

// Styled-components for the pagination
const PaginationWrapper = styled.div`
  display: flex;
  list-style: none;
`;

const PageItem = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 8px 12px;
  margin: 4px;
  cursor: pointer;
  background-color: ${(props) => (props.isActive ? "#2F80ED" : "white")};
  color: ${(props) => (props.isActive ? "white" : "black")};

  &:hover {
    background-color: ${(props) => (props.isActive ? "#2F80ED" : "#f0f0f0")};
  }
`;

// React component for the pagination
const PaginationComponent = ({ pages, currentPage, onPageChange }) => {
  // Create the page numbers based on the 'pages' prop
  const pageNumbers = [];
  for (let number = 1; number <= pages; number++) {
    pageNumbers.push(
      <PageItem
        key={number}
        isActive={number === currentPage}
        onClick={() => onPageChange(number)}
      >
        {number}
      </PageItem>,
    );
  }

  return (
    <PaginationWrapper>
      {currentPage > 1 && (
        <PageItem onClick={() => onPageChange(currentPage - 1)}>{"<"}</PageItem>
      )}
      {pageNumbers}
      {currentPage < pages && (
        <PageItem onClick={() => onPageChange(currentPage + 1)}>{">"}</PageItem>
      )}
    </PaginationWrapper>
  );
};

export default PaginationComponent;
