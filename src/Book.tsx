import React from 'react';
import styled from 'styled-components';

interface Props {
  title: string;
  onClick: (title: string) => void;
}

const BookDiv = styled.div`
  background-color: #a8dadc;
  border-color: #457b9d;
  margin-bottom: 20px;
  padding: 15px 30px 15px 15px;
  border-left: 5px solid #457b9d;
  cursor: pointer;
  &:hover {
    background-color: #457b9d;
    color: white;
  }
`

export const Book: React.FC<Props> = ({ title, onClick }) => {
  return (
    <BookDiv onClick={() => { onClick(title); }} >
      <h4>{title}</h4>
    </BookDiv>
  );
}